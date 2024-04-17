import React, { useState, useEffect, useCallback } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import MetricSelector from '@components/frontStore/customer/detail/headers/MetricSelector';
import DateDeleter from '@components/frontStore/customer/detail/headers/DateDeleter';
import './ClickArea.scss'; 

export default function ClicksHeatmap({ customer, removeUrl }) {
  const [selectedMetric, setSelectedMetric] = useState('clicks');
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  const [heatmapValues, setHeatmapValues] = useState([]);

  const accountCreationYear = new Date(customer.createdAt.text).getFullYear(); 
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - accountCreationYear + 1 }, (_, i) => accountCreationYear + i);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const processDataForYear = (data, selectedYear) => {
    const timeKey = 'actionTime';
    const countsByDate = data
      .filter(item => {
        const itemDate = new Date(Number(item[timeKey]));
        return itemDate.getFullYear() === selectedYear;
      })
      .reduce((acc, item) => {
        const itemDate = new Date(Number(item[timeKey]));
        const itemDateString = [
          itemDate.getFullYear(),
          String(itemDate.getMonth() + 1).padStart(2, '0'),
          String(itemDate.getDate()).padStart(2, '0')
        ].join('-');
  
        acc[itemDateString] = (acc[itemDateString] || 0) + 1;
        return acc;
      }, {});
  
    return Object.keys(countsByDate).map(dateString => ({
      date: new Date(dateString),
      count: countsByDate[dateString],
    }));
  };
  
  useEffect(() => {
    if (customer[selectedMetric]) {
      setHeatmapValues(processDataForYear(customer[selectedMetric], selectedYear));
    }
  }, [customer, selectedMetric, selectedYear]);

  const handleDataDeleted = useCallback(() => {
    window.location.reload();
  }, []);

  const showTooltip = (event, value) => {
    if (value) {
      const rect = event.target.getBoundingClientRect();
      setTooltip({
        show: true,
        content: `${value.date.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })} : ${value.count === 0 ? `No ${selectedMetric === 'privacyOrders' ? 'orders' : selectedMetric}` : `${value.count} ${selectedMetric === 'privacyOrders' ? 'orders' : selectedMetric}`}`,
        x: rect.left + rect.width / 2, 
        y: rect.top - 10, 
      });
    } 
  };

  const hideTooltip = () => {
    setTooltip({ show: false, content: '', x: 0, y: 0 });
  };

  return (
    <div>

      <div className="controls-container">
        <MetricSelector
          selectedMetric={selectedMetric}
          onMetricChange={setSelectedMetric}
        />
        <div className="date-deleter-container">
          <DateDeleter deleteUrl={removeUrl} metric={selectedMetric} customer_id={customer.customerId} onDataChange={handleDataDeleted}/>
        </div>
      </div>

      <div className="calendar-heatmap">
        <CalendarHeatmap
          startDate={new Date(`${selectedYear}-01-01`)}
          endDate={new Date(`${selectedYear}-12-31`)}
          values={heatmapValues}
          classForValue={(value) => {
            if (!value) {
              return 'color-github-0';
            }
            const count = value.count;
            if (count === 0) {
              return 'color-github-0';
            } else if (count === 1) {
              return 'color-github-1';
            } else if (count <= 4) {
              return 'color-github-2';
            } else {
              return 'color-github-3';
            }
          }}
          onMouseOver={showTooltip}
          onMouseLeave={hideTooltip}
          showWeekdayLabels={true}
        />
      </div>
      
      <div className="year-selector-container">
        <div className="year-selector">
          {years.map(year => (
            <button
              key={year}
              className={`year-button ${selectedYear === year ? 'selected' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {tooltip.show && (
        <div
          style={{
            position: 'absolute',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            background: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '3px',
            pointerEvents: 'none'
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

// Utility function to shift date by a number of days
function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export const layout = {
  areaId: 'leftSideClick',
  sortOrder: 10
};

export const query = `
  query Query {
    removeUrl: url(routeId: "removeMetric")

    customer: currentCustomer {
      customerId
      createdAt {
        text
      }
      
      clicks {
        clickId
        customerId
        customerEmail
        productId
        urlKey
        actionTime
      }

      views {
        viewId
        customerId
        customerEmail
        productId
        urlKey
        actionTime
      }

      addToCarts {
        addtocartId
        customerId
        customerEmail
        productId
        actionTime
      }

      checkouts {
        checkoutId
        customerId
        customerEmail
        actionTime
      }

      privacyOrders {
        orderId
        customerId
        customerEmail
        actionTime
      }
      
    }
  }
`;
