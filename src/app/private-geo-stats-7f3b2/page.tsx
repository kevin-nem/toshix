import fs from 'fs/promises';
import path from 'path';

async function getGeoLogs() {
  const logPath = path.join(process.cwd(), 'geo-log.json');
  try {
    const data = await fs.readFile(logPath, 'utf-8');
    return JSON.parse(data).reverse(); // most recent first
  } catch {
    return [];
  }
}

export default async function PrivateGeoStatsPage() {
  const logs = await getGeoLogs();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Visitor Geolocation Stats</h1>
      {logs.length === 0 ? (
        <div className="text-neutral-500">No data yet.</div>
      ) : (
        <div className="overflow-x-auto w-full max-w-3xl">
          <table className="min-w-full border border-neutral-200 text-sm bg-white">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-3 py-2 border-b">Time</th>
                <th className="px-3 py-2 border-b">IP</th>
                <th className="px-3 py-2 border-b">Country</th>
                <th className="px-3 py-2 border-b">Region</th>
                <th className="px-3 py-2 border-b">City</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log: any, i: number) => (
                <tr key={i} className="even:bg-neutral-50">
                  <td className="px-3 py-2 border-b whitespace-nowrap">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="px-3 py-2 border-b font-mono">{log.ip}</td>
                  <td className="px-3 py-2 border-b">{log.country}</td>
                  <td className="px-3 py-2 border-b">{log.region}</td>
                  <td className="px-3 py-2 border-b">{log.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
} 