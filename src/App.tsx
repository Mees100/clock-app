import { useState } from "react";
import Time from "./Time";
import TimeZone from "./TimeZone";

function App() {
  const [zone, setZone] = useState<string>("Europe/Amsterdam");
  return (
    <div>
      <TimeZone onZoneChange={(zone: string) => setZone(zone)} value={zone} />
      <Time zone={zone} />
    </div>
  );
}

export default App;
