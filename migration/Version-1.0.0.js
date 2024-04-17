// sript to add some fake data under a test account with clicks

const { execute, insert } = require('@evershop/postgres-query-builder');
const {
  hashPassword
} = require('@evershop/evershop/src/lib/util/passwordHelper');

module.exports = exports = async (connection) => {

  // add fake test account
  const fakeAccount = await insert('customer')
    .given({
      customer_id: 1, 
      email: "test@test.com", 
      password: hashPassword("123456"), 
      full_name: "test", 
      created_at: new Date(1624045389000)
    })
    .execute(connection);

  // add fake clicks data to this account
  const click1 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1706557410176)
    })
    .execute(connection); 

  const click2 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1684352610176)
    })
    .execute(connection); 

  const click3 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1701200610176)
    })
    .execute(connection); 

  const click4 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1700336610176)
    })
    .execute(connection); 

  const click5 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1701546210176)
    })
    .execute(connection); 

  const click6 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1689104610176)
    })
    .execute(connection); 

  const click7 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1702583010176)
    })
    .execute(connection); 

  const click8 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1705607010176)
    })
    .execute(connection); 

  const click9 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1709149410176)
    })
    .execute(connection); 

  const click10 = await insert('privacy_clicks')
    .given({
      customer_id: 1, 
      customer_email: "test@test.com", 
      product_id: 0,
      url_key: "test", 
      action_time: new Date(1690314210176)
    })
    .execute(connection); 
  
  // duplicating click 3
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_clicks')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1701200610176)
      })
      .execute(connection); 
  }

  // duplicating click 10
  for (let i = 0; i < 2; i++) {
    const temp = await insert('privacy_clicks')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1690314210176)
      })
      .execute(connection); 
  }
  
  // duplicating click 5
  for (let i = 0; i < 6; i++) {
    const temp = await insert('privacy_clicks')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1701546210176)
      })
      .execute(connection); 
  }

  // duplicating click 8
  for (let i = 0; i < 10; i++) {
    const temp = await insert('privacy_clicks')
      .given({
        customer_id: 1, 
        customer_email: "test@test.com", 
        product_id: 0,
        url_key: "test", 
        action_time: new Date(1705607010176)
      })
      .execute(connection); 
  }
}