
-- Sample categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Electronic gadgets and devices'),
('Clothing', 'Apparel and fashion items'),
('Home & Kitchen', 'Items for home and kitchen use'),
('Books', 'Books across various genres'),
('Toys & Games', 'Entertainment items for all ages');

-- Sample products
INSERT INTO products (name, description, price, stock_quantity, image_url, category_id) VALUES
('Smartphone X', 'Latest smartphone with advanced features', 799.99, 50, '/images/smartphone.jpg', 1),
('Laptop Pro', 'High-performance laptop for professionals', 1299.99, 25, '/images/laptop.jpg', 1),
('Wireless Headphones', 'Noise-cancelling wireless headphones', 199.99, 100, '/images/headphones.jpg', 1),
('T-shirt', 'Cotton t-shirt, available in multiple colors', 19.99, 200, '/images/tshirt.jpg', 2),
('Jeans', 'Classic denim jeans', 49.99, 150, '/images/jeans.jpg', 2),
('Coffee Maker', 'Automatic coffee maker for home use', 89.99, 30, '/images/coffeemaker.jpg', 3),
('Novel: The Adventure', 'Bestselling adventure novel', 14.99, 75, '/images/novel.jpg', 4),
('Board Game', 'Fun family board game', 29.99, 40, '/images/boardgame.jpg', 5);

-- Sample users (password_hash would be properly hashed in a real application)
INSERT INTO users (name, email, password_hash, is_admin) VALUES
('Admin User', 'admin@example.com', 'hashed_password_here', TRUE),
('John Doe', 'john@example.com', 'hashed_password_here', FALSE),
('Jane Smith', 'jane@example.com', 'hashed_password_here', FALSE);

-- Create carts for users
INSERT INTO carts (user_id) VALUES
(2), -- John's cart
(3); -- Jane's cart

-- Add items to John's cart
INSERT INTO cart_items (cart_id, product_id, quantity) VALUES
(1, 1, 1), -- Smartphone X
(1, 3, 1); -- Wireless Headphones

-- Add items to Jane's cart
INSERT INTO cart_items (cart_id, product_id, quantity) VALUES
(2, 2, 1), -- Laptop Pro
(2, 5, 2); -- Jeans (2 quantity)

-- Create a sample order for John
INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES
(2, 219.98, 'delivered', '123 Main St, Anytown, USA');

-- Add items to John's order
INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES
(1, 3, 1, 199.99), -- Wireless Headphones
(1, 4, 1, 19.99);  -- T-shirt

-- Add some product reviews
INSERT INTO reviews (product_id, user_id, rating, comment) VALUES
(1, 2, 5, 'Great smartphone, highly recommended!'),
(3, 2, 4, 'Good sound quality, comfortable to wear.'),
(2, 3, 5, 'Excellent performance, perfect for work.');

-- Create wishlists for users
INSERT INTO wishlists (user_id) VALUES
(2), -- John's wishlist
(3); -- Jane's wishlist

-- Add items to John's wishlist
INSERT INTO wishlist_items (wishlist_id, product_id) VALUES
(1, 2), -- Laptop Pro
(1, 6); -- Coffee Maker

-- Add items to Jane's wishlist
INSERT INTO wishlist_items (wishlist_id, product_id) VALUES
(2, 7), -- Novel
(2, 8); -- Board Game
