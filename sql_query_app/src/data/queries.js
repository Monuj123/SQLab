export const sampleQueries = [
  {
    id: 1,
    name: "Select all users",
    query: "SELECT * FROM users;",
  },
  {
    id: 2,
    name: "Count active users",
    query: "SELECT COUNT(*) FROM users WHERE status = 'active';",
  },
  {
    id: 3,
    name: "Get user orders",
    query:
      "SELECT u.name, o.order_date, o.total FROM users u JOIN orders o ON u.id = o.user_id;",
  },
  {
    id: 4,
    name: "Find high-value customers",
    query:
      "SELECT customer_id, SUM(amount) as total_spent FROM transactions GROUP BY customer_id HAVING SUM(amount) > 1000;",
  },
  {
    id: 5,
    name: "Get top 5 products by sales",
    query:
      "SELECT product_id, SUM(quantity) as total_sold FROM sales GROUP BY product_id ORDER BY total_sold DESC LIMIT 5;",
  },
];

export const queryResults = {
  1: [
    { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
    {
      id: 2,
      name: "Will Smith",
      email: "will@example.com",
      status: "inactive",
    },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "active" },
    {
      id: 4,
      name: "John Williams",
      email: "john@example.com",
      status: "active",
    },
    { id: 5, name: "John Doe", email: "john@example.com", status: "active" },
    {
      id: 6,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
    },
    { id: 7, name: "Bob Johnson", email: "bob@example.com", status: "active" },
    {
      id: 8,
      name: "Alice Williams",
      email: "alice@example.com",
      status: "active",
    },
    { id: 9, name: "John Doe", email: "john@example.com", status: "active" },
    {
      id: 10,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
    },
    { id: 11, name: "Bob Johnson", email: "bob@example.com", status: "active" },
    {
      id: 12,
      name: "Alice Williams",
      email: "alice@example.com",
      status: "active",
    },
  ],
  2: [{ "COUNT(*)": 3 }],
  3: [
    { name: "John Doe", order_date: "2023-01-15", total: 125.5 },
    { name: "John Doe", order_date: "2023-02-20", total: 89.99 },
    { name: "Alice Williams", order_date: "2023-03-05", total: 210.0 },
  ],
  4: [
    { customer_id: 101, total_spent: 1500.75 },
    { customer_id: 205, total_spent: 3200.0 },
  ],
  5: [
    { product_id: 1, total_sold: 500 },
    { product_id: 2, total_sold: 450 },
    { product_id: 3, total_sold: 400 },
    { product_id: 4, total_sold: 350 },
    { product_id: 5, total_sold: 300 },
  ],
};
