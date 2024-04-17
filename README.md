# Display private metrics extension for EverShop

This extension is implemented based on two npm package - Evershop @thenguyen and addPrivateMetrics @grebethzy. 

addPrivateMetrics allows you to track the essential e-commerce user actions: view, click, add to cart, checkout and order. 
Based on this, displayPrivateMetrics illustrates those collected actions to users, granting user with right to be forgotten by GDPR. 

> **Note**: This extension requires EverShop version 1.0.0-rc.9 or higher.

## Installation guide

### Step 0: Install the Evershop application

There are three approaches to install the Evershop application, please refer to: 
- NPM package published: https://www.npmjs.com/package/@evershop/evershop 
- Github repository: https://github.com/evershopcommerce/evershop

### Step 1: Install the two extension using npm:

```bash
npm i addPrivateMetrics
```
```bash
npm i displayPrivateMetrics
```

### Step 2: Enable the extension

Edit the `config/default.json` file in the root directory of your EverShop installation and add the following line to the `extensions` section:

```json
{
  ...,
  "system": {
    ...,
    "extensions": [
      ...,
      {
        "name": "addPrivateMetrics",
        "resolve": "node_modules/addPrivateMetrics",
        "enabled": true,
        "priority": 10
      }, 
      {
        "name": "displayPrivateMetrics",
        "resolve": "node_modules/displayPrivateMetrics",
        "enabled": true,
        "priority": 10
      }
    ]
  }
}
```

## Testing

An account for testing purpose has been implemented: 

Email: test@test.com

Password: 123456

Some fake actions has been added to this account for illustration purpose. 
