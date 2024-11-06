import { useEffect, useState } from "react";
import { Select, useId } from "@fluentui/react-components";

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
  const selectId = useId();

  useEffect(() => {
    getZones().then((result) => setZones(result));
  }, []);
  const options = zones.map((zone) => <option key={zone}>{zone}</option>);
  return (
    <>
      <label htmlFor={selectId}>Choose a zone</label>
      <Select
        id={selectId}
        value={value}
        onChange={(e) => onZoneChange(e.target.value)}
      >
        {options}
      </Select>
    </>
  );
}

export default TimeZone;
