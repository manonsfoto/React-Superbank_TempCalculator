import { useState } from "react";
import "./TempCalculator.css";
import TempInput from "../tempInput/TempInput";
import WaterStatus from "../waterStatus/WaterStatus";

const TempCalculator = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  return (
    <section className="tempCal flex">
      <TempInput
        celsius={celsius}
        setCelsius={setCelsius}
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
      />
      <WaterStatus celsius={celsius} />
    </section>
  );
};

export default TempCalculator;
