import { useEffect, useState } from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";

type CurrentTime = {
  dateTime: string;
};

const useStyles = makeStyles({
  currentTime: {
    backgroundColor: " #0a0d1c",
    width: "100%",
    display: "flex",
    color: "white",
    padding: "25px",
    justifyContent: "center",
    fontSize: "17px",
  },
});

function getTime(zone: string): Promise<CurrentTime> {
  const request = fetch(
    `https://www.timeapi.io/api/time/current/zone?timeZone=${zone}`
  );
  return request.then((response) => response.json());
}

function Time({ zone }: { zone: string }) {
  const [time, setTime] = useState<CurrentTime>();
  const classes = useStyles();

  useEffect(() => {
    setTime(undefined);
    getTime(zone).then((r) => setTime(r));
  }, [zone]);

  return (
    <div>
      {typeof time === "undefined" && <Spinner />}
      {time && (
        <span className={classes.currentTime}>
          Het is in {zone}: {time.dateTime}
        </span>
      )}
    </div>
  );
}

export default Time;
