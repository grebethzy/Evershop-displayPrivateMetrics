# Display private metrics extension for EverShop

This extension is implemented based on two npm package - Evershop @thenguyen and add-private-metrics @grebethzy. 

add-private-metrics allows you to track the essential e-commerce user actions: view, click, add to cart, checkout and order. 
Based on this, display-private-metrics illustrates those collected actions to users, granting user with right to be forgotten by GDPR. 

> **Note**: This extension requires EverShop version 1.0.0-rc.9 or higher.

## Installation guide

### Step 0: Install the Evershop application

There are three approaches to install the Evershop application, please refer to: 
- NPM package published: https://www.npmjs.com/package/@evershop/evershop 
- Github repository: https://github.com/evershopcommerce/evershop

### Step 1: Install the two extension using npm:

```bash
npm i add-private-metrics
```
```bash
npm i display-private-metrics
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
        "name": "add-private-metrics",
        "resolve": "node_modules/add-private-metrics",
        "enabled": true,
        "priority": 10
      }, 
      {
        "name": "display-private-metrics",
        "resolve": "node_modules/display-private-metrics",
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