"use client";
import { useEffect, useState } from "react";

type GeoData = {
  status: string;
  message?: string;
  country?: string;
  regionName?: string;
  city?: string;
  query?: string;
};

export default function VisitorInfo() {
  const [geo, setGeo] = useState<GeoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => {
        setGeo(data);
        setLoading(false);
        if (data.status !== "success") {
          setError(data.message || "Could not fetch geolocation");
        }
      })
      .catch((err) => {
        setError("Could not fetch geolocation");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading geolocation…</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!geo) return null;

  return (
    <div className="text-sm text-neutral-600 bg-neutral-100 rounded-lg p-4 border border-neutral-200 max-w-xs">
      <div><span className="font-semibold">IP:</span> {geo.query}</div>
      <div><span className="font-semibold">Country:</span> {geo.country}</div>
      <div><span className="font-semibold">Region:</span> {geo.regionName}</div>
      <div><span className="font-semibold">City:</span> {geo.city}</div>
    </div>
  );
} 