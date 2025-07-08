import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@libsql/client';

const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim();
  if (!ip || ip === '::1' || ip === '127.0.0.1') {
    ip = req.socket.remoteAddress || '';
  }
  if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');

  const url = `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,query`;
  try {
    const geoRes = await fetch(url);
    const data = await geoRes.json();
    res.status(200).json(data);

    // Log to Turso if successful
    if (data.status === 'success') {
      await db.execute({
        sql: `INSERT INTO geo_logs (timestamp, ip, country, region, city) VALUES (?, ?, ?, ?, ?)` ,
        args: [
          new Date().toISOString(),
          data.query,
          data.country,
          data.regionName,
          data.city
        ]
      });
    }
  } catch (err) {
    res.status(500).json({ status: 'fail', message: 'Could not fetch geolocation' });
  }
}

// --- Example frontend usage ---
// Place this in any client component or useEffect:
//
// fetch('/api/geo')
//   .then(res => res.json())
//   .then(data => console.log('Geolocation:', data));
//