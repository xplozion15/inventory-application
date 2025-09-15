#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS fruit_categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS fruits (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  quantity INTEGER,
  category_id INTEGER references fruit_categories(id)
);

INSERT INTO fruit_categories (name) 
VALUES
  ('Citrus'),
  ('Stone Fruits'),
  ('Berries'),
  ('Tropical'),
  ('Pomes');
  
INSERT INTO fruits (name, quantity, category_id)
VALUES
  ('Orange', 50, 1),
  ('Lemon', 30, 1), 
  ('Peach', 20, 2),
  ('Cherry', 25, 3),
  ('Mango', 40, 4),
  ('Apple', 35, 5);`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
