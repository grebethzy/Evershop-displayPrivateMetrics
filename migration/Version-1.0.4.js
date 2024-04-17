// add fake orders

const { execute, insert } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {

  const order1 = await insert('order')
    .given({
      order_number: "00000", 
      cart_id: 0, 
      currency: "SGD", 
      customer_id: 1, 
      customer_email: "test@test.com", 
      sub_total: "250.0000",
      sub_total_incl_tax: "260.0000", 
      total_qty: 1,
      tax_amount: "0.0000",
      shipping_note: null,
      grand_total: "259.0000",
      created_at: new Date(1707732357000),
      updated_at: new Date(1707732357000)
    })
    .execute(connection); 
    
}