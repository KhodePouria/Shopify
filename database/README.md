# Shopping Web Application Database Schema

This directory contains the SQL schema and seed data for the shopping web application.

## Schema Overview

The database is designed to support the following features:

### Users
- Store user account information
- Support for admin users

### Products
- Comprehensive product details
- Categorization system

### Shopping Cart
- User-specific shopping carts
- Add, update, and remove products

### Orders
- Complete order tracking
- Order history for users

### Reviews
- Product reviews and ratings
- User-specific review history

### Wishlist
- User wishlists
- Save products for future purchase

## Entity Relationship Diagram (ERD)

```
Users 1──┐     ┌───* Products
         │     │
         │     │
         ▼     ▼
        Carts *────* CartItems
         ▲
         │
         │
Orders *──┘     ┌───* Reviews
  │             │
  └──────* OrderItems
  
  Users 1────* Wishlists *────* WishlistItems *────1 Products
```

## Tables

1. **users** - Stores user information
2. **categories** - Product categories
3. **products** - Product information
4. **carts** - Shopping carts for users
5. **cart_items** - Items in shopping carts
6. **orders** - Order information
7. **order_items** - Items in orders
8. **reviews** - Product reviews by users
9. **wishlists** - User wishlists
10. **wishlist_items** - Items in wishlists

## Setup Instructions

1. Create the database:
   ```bash
   psql -c "CREATE DATABASE shop_db"
   ```

2. Apply the schema:
   ```bash
   psql -d shop_db -f schema.sql
   ```

3. (Optional) Load sample data:
   ```bash
   psql -d shop_db -f seed.sql
   ```
