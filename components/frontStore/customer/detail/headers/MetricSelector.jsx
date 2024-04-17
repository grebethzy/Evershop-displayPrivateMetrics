import React from 'react';
import PropTypes from 'prop-types';
import './MetricSelector.scss'; 

export default function MetricSelector({ selectedMetric, onMetricChange }) {
  const metricsOptions = [
    { value: 'clicks', label: 'Clicks' },
    { value: 'views', label: 'Views' },
    { value: 'addToCarts', label: 'Add to Cart' },
    { value: 'checkouts', label: 'Checkout' },
    { value: 'privacyOrders', label: 'Order' },
  ];

  return (
    <div className="metric-selector-container">
      <label htmlFor="metric-select" className="metric-selector-label">Choose a metric:</label>
      <select
        id="metric-select"
        className="metric-selector"
        value={selectedMetric}
        onChange={(e) => onMetricChange(e.target.value)}
      >
        {metricsOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

MetricSelector.propTypes = {
    selectedMetric: PropTypes.string.isRequired,
    onMetricChange: PropTypes.func.isRequired
};
