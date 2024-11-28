import { useEffect, useState } from "react";
import { Display, Select, useId } from "@fluentui/react-components";
// import { makeStyles } from "@fluentui/react-components";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  label: {
    display: "flex",
    width: "100%",
    // backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    justifyContent: "center",
    height: "50px",
    alignItems: "center",
    padding: "25px",
  },
});

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
  const classes = useClasses();

  useEffect(() => {
    getZones().then((result) => setZones(result));
  }, []);
  const options = zones.map((zone) => <option key={zone}>{zone}</option>);
  return (
    <div>
      <label htmlFor={selectId} className={classes.label}>
        Choose a zone
      </label>
      <Select
        id={`${selectId}-filledDarker`}
        appearance="filled-darker"
        value={value}
        onChange={(e) => onZoneChange(e.target.value)}
      >
        {options}
      </Select>
    </div>
  );
}

export default TimeZone;
