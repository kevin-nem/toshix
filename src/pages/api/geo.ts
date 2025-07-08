import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

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

    // Log to geo-log.json if successful
    if (data.status === 'success') {
      const logEntry = {
        timestamp: new Date().toISOString(),
        ip: data.query,
        country: data.country,
        region: data.regionName,
        city: data.city
      };
      const logPath = path.join(process.cwd(), 'geo-log.json');
      let logs: any[] = [];
      try {
        const existing = await fs.readFile(logPath, 'utf-8');
        logs = JSON.parse(existing);
      } catch (e) {
        // File does not exist or is invalid, start new
        logs = [];
      }
      logs.push(logEntry);
      // Keep only the last 200 entries for sanity
      if (logs.length > 200) logs = logs.slice(-200);
      await fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf-8');
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