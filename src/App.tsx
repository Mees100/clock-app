import { useState } from "react";
import Time from "./Time";
import TimeZone from "./TimeZone";

// volgende keer maken we het mooi: https://react.fluentui.dev/?path=/docs/concepts-developer-quick-start--docs
function App() {
  // Leren (advanced) Dit is een voorbeeld van lifting state up, zie https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
  const [zone, setZone] = useState<string>("Europe/Amsterdam");
  return (
    <>
      <TimeZone onZoneChange={(zone: string) => setZone(zone)} value={zone} />
      <Time zone={zone} />
    </>
  );
}

export default App;
