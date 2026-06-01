CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(150) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'created',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0)
);

INSERT INTO products (name, description, price_cents, stock)
VALUES
  ('Billet Lyon → Paris', 'Trajet direct en TGV pour formation DevOps.', 4500, 20),
  ('Billet Lyon → Marseille', 'Trajet rapide pour workshop Docker.', 3900, 15),
  ('Pass DevOps Week', 'Pass fictif pour une semaine de pratique DevOps.', 12900, 8),
  ('Guide Docker', 'Support pédagogique pour apprendre Docker.', 1900, 50);
