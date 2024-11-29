import { useState } from "react";
import Time from "./Time";
import TimeZone from "./TimeZone";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    width: "50%",
    margin: "0 auto",
  },
});

function App() {
  const classes = useStyles();
  const [zone, setZone] = useState<string>("Europe/Amsterdam");
  return (
    <div className={classes.wrapper}>
      <TimeZone onZoneChange={(zone: string) => setZone(zone)} value={zone} />
      <Time zone={zone} />
    </div>
  );
}

export default App;
