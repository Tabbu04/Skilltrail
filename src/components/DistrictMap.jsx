import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup } from "react-leaflet";
import { districts, retentionTier } from "../data/districts";

export default function DistrictMap({ height = 480, onSelect }) {
  return (
    <div style={{ height }} className="rounded-2xl overflow-hidden border border-navy-100 dark:border-navy-700">
      <MapContainer center={[19.4, 76.0]} zoom={6} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {districts.map((d) => {
          const tier = retentionTier(d.ret12);
          return (
            <CircleMarker
              key={d.name}
              center={[d.lat, d.lng]}
              radius={6 + d.trained / 4000}
              pathOptions={{ color: tier.color, fillColor: tier.color, fillOpacity: 0.65, weight: 2 }}
              eventHandlers={{ click: () => onSelect && onSelect(d) }}
            >
              <Tooltip direction="top" offset={[0, -4]}>
                <strong>{d.name}</strong>
              </Tooltip>
              <Popup>
                <div className="text-sm">
                  <div className="font-bold">{d.name}</div>
                  <div>Trained: {d.trained.toLocaleString()}</div>
                  <div>12M Retention: {d.ret12}%</div>
                  <div>Wage multiplier: {d.wageMult}x</div>
                  <div>Self-employment: {d.selfEmp}%</div>
                  <div className="mt-1 font-semibold" style={{ color: tier.color }}>{tier.label}</div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
