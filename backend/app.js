const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  user: process.env.POSTGRES_USER || 'appuser',
  password: process.env.POSTGRES_PASSWORD || 'apppass',
  database: process.env.POSTGRES_DB || 'appdb',
  port: process.env.POSTGRES_PORT || 5432
});

const app = express();

app.get('/api/hello', async (req, res) => {
  try {
    const r = await pool.query('SELECT NOW() as now');
    res.json({ message: 'Hello from backend', now: r.rows[0].now, version: process.env.APP_VERSION || 'v1' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log('Backend listening on 3000'));

