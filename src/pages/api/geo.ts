import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get IP address from x-forwarded-for or req.socket.remoteAddress
  let ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim();
  if (!ip || ip === '::1' || ip === '127.0.0.1') {
    ip = req.socket.remoteAddress || '';
  }
  // Remove IPv6 prefix if present
  if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');

  // Use ip-api.com to get geolocation
  const url = `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,query`;
  try {
    const geoRes = await fetch(url);
    const data = await geoRes.json();
    res.status(200).json(data);
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