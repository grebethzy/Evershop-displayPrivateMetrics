// add fake views

const { execute, insert } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {

  const view1 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1698314757000)
    })
    .execute(connection); 

  const view2 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1701079557000)
    })
    .execute(connection); 

  const view3 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1685786757000)
    })
    .execute(connection); 

  const view4 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1691575557000)
    })
    .execute(connection); 

  const view5 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1711706757000)
    })
    .execute(connection); 

  const view6 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1695290757000)
    })
    .execute(connection); 

  const view7 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1707991557000)
    })
    .execute(connection); 

  const view8 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1692698757000)
    })
    .execute(connection); 

  const view9 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1702893957000)
    })
    .execute(connection); 

  const view10 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1691748357000)
    })
    .execute(connection); 

  const view11 = await insert('privacy_views')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1706349957000)
    })
    .execute(connection); 
  
  // duplicating view 3
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_views')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1685786757000)
      })
      .execute(connection); 
  }

  // duplicating view 11
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_views')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1706349957000)
      })
      .execute(connection); 
  }
  
  // duplicating view 12
  for (let i = 0; i < 6; i++) {
    const temp = await insert('privacy_views')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1700042757000)
      })
      .execute(connection); 
  }
}