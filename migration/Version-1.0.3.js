// add fake checkouts

const { execute, insert } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {

  const checkout1 = await insert('privacy_checkouts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1707732357000)
    })
    .execute(connection); 

  const checkout2 = await insert('privacy_checkouts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689156357000)
    })
    .execute(connection); 

  const checkout3 = await insert('privacy_checkouts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689329157000)
    })
    .execute(connection); 

  const checkout4 = await insert('privacy_checkouts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689761157000)
    })
    .execute(connection)

}