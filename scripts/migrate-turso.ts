import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function migrate() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS geo_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT NOT NULL,
      ip TEXT,
      country TEXT,
      region TEXT,
      city TEXT
    );
  `);
  console.log("Migration complete!");
  process.exit(0);
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
}); 