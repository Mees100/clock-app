import { useEffect, useState } from "react";
import { Spinner } from "@fluentui/react-components";

// zie object literal type linksonder op https://www.typescriptlang.org/static/TypeScript%20Types-ae199d69aeecf7d4a2704a528d0fd3f9.png
type CurrentTime = {
  dateTime: string;
};

// een promise, gebruik je bij asynchrone code, je hebt ook een nieuwere syntax (async/await) hiervoor maar die heb ik bewust nog even weggelaten :)
function getTime(zone: string): Promise<CurrentTime> {
  const request = fetch(
    `https://www.timeapi.io/api/time/current/zone?timeZone=${zone}`
  );
  return request.then((response) => response.json());
}

function Time({ zone }: { zone: string }) {
  const [time, setTime] = useState<CurrentTime>();
  // deze state staat nu in App.tsx en wordt doorgegeven als prop en is hier niet meer nodig.
  // const [zone, setZone] = useState<string>("Amsterdam");
  console.log(time);

  useEffect(() => {
    setTime(undefined);
    getTime(zone).then((r) => setTime(r));
  }, [zone]);

  return (
    <div>
      {typeof time === "undefined" && <Spinner />}
      {time && (
        <span>
          Het is in {zone}: {time.dateTime}
        </span>
      )}
      {/* <button onClick={() => setZone("London")}>London</button>
      <button onClick={() => setZone("Amsterdam")}>Amsterdam</button>
      <button onClick={() => setZone("Helsinki")}>Helsinki</button> */}
    </div>
  );
}

export default Time;
