import { useEffect, useState } from "react";

function getZones(): Promise<string[]> {
  const request = fetch(
    "https://www.timeapi.io/api/timezone/availabletimezones"
  );
  return request.then((response) => response.json());
}

function TimeZone({
  onZoneChange,
  value,
}: {
  onZoneChange: (zone: string) => void;
  value: string;
}) {
  const [zones, setZones] = useState<string[]>([]);

  useEffect(() => {
    getZones().then((result) => setZones(result));
  }, []);
  const options = zones.map((zone) => <option key={zone}>{zone}</option>);
  return (
    <>
      <p>Choose a zone</p>
      <select value={value} onChange={(e) => onZoneChange(e.target.value)}>
        {options}
      </select>
    </>
  );
}

export default TimeZone;
