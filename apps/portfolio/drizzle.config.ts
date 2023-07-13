import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/schema.ts",
  out: "./src/server/migrations",
  breakpoints: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  driver: "mysql2",
} satisfies Config;
