export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "123qweQWE",
    name: process.env.DB_NAME || "postgres",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret_key!",
    ttl: process.env.JWT_TTL || "30000s",
  },
});
