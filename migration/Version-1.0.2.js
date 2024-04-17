// add fake addtocarts

const { execute, insert } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {

  const addtocart1 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1707732357000)
    })
    .execute(connection); 

  const addtocart2 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689156357000)
    })
    .execute(connection); 

  const addtocart3 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689329157000)
    })
    .execute(connection); 

  const addtocart4 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689761157000)
    })
    .execute(connection); 

  const addtocart5 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1694945157000)
    })
    .execute(connection); 

  const addtocart6 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1685873157000)
    })
    .execute(connection); 

  const addtocart7 = await insert('privacy_addtocarts')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1697450757000)
    })
    .execute(connection); 

  // duplicating addtocart 7
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_addtocarts')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1697450757000)
      })
      .execute(connection); 
  }

  // duplicating addtocart 4
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_addtocarts')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1689761157000)
      })
      .execute(connection); 
  }
  
  // duplicating addtocart 1
  for (let i = 0; i < 6; i++) {
    const temp = await insert('privacy_addtocarts')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1707732357000)
      })
      .execute(connection); 
  }
}