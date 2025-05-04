import { useEffect, useState } from "react";
import { Select, useId } from "@fluentui/react-components";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  label: {
    display: "flex",
    width: "100%",
    color: "white",
    fontSize: "20px",
    justifyContent: "center",
    height: "50px",
    alignItems: "center",
    padding: "25px",
  },
});

async function getZones(): Promise<string[] | undefined> {
  try {
    const response = await fetch(
      "https://www.timeapi.io/api/timezone/availabletimezones"
    );
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Request failed");
  } catch (error) {
    console.error(error);
  }
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
    getZones().then((result) => {
      if (result !== undefined) {
        setZones(result);
      }
    });
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
