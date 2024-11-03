import { useEffect, useState } from "react";
import "./App.css";

// zie object literal type linksonder op https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png
type CurrentTime = {
  dateTime: string;
};

// een promise, gebruik je bij asynchrone code, je hebt ook een nieuwere syntax (async/await) hiervoor maar die heb ik bewust nog even weggelaten :)
function getTime(zone: string): Promise<CurrentTime> {
  const request = fetch(
    `https://www.timeapi.io/api/time/current/zone?timeZone=Europe%2F${zone}`
  );
  return request.then((response) => response.json());
}

function App() {
  const [time, setTime] = useState<CurrentTime>();
  const [zone, setZone] = useState<string>("Amsterdam");

  useEffect(() => {
    getTime(zone).then((r) => setTime(r));
  }, [zone]);

  return (
    <>
      {typeof time === "undefined" && <span>Loading</span>}
      {time && <span>Het is {time.dateTime}</span>}
      <button onClick={() => setZone("London")}>London</button>
      <button onClick={() => setZone("Amsterdam")}>Amsterdam</button>
      <button onClick={() => setZone("Helsinki")}>Helsinki</button>
    </>
  );
}

export default App;
