import { ChangeEvent } from "react";
import "./TempInput.css";

interface Props {
  celsius: string;
  setCelsius: React.Dispatch<React.SetStateAction<string>>;
  fahrenheit: string;
  setFahrenheit: React.Dispatch<React.SetStateAction<string>>;
}

const TempInput: React.FC<Props> = (props) => {
  const convertCToF = (e: ChangeEvent<HTMLInputElement>) => {
    const newCelsius = e?.target.value;
    props.setCelsius(newCelsius);
    const fahrenheitValue = newCelsius
      ? ((Number(newCelsius) * 9) / 5 + 32).toFixed(2).toString()
      : "";
    props.setFahrenheit(fahrenheitValue);
  };
  const convertFToC = (e: ChangeEvent<HTMLInputElement>) => {
    const newFahrenheit = e.target.value;
    props.setFahrenheit(newFahrenheit);
    const celsiusValue = newFahrenheit
      ? (((Number(newFahrenheit) - 32) * 5) / 9).toFixed(2).toString()
      : "";
    props.setCelsius(celsiusValue);
  };

  return (
    <>
      <fieldset className="flex">
        <legend>Schreibe Temparatur in Celsius:</legend>
        <input
          onChange={convertCToF}
          value={props.celsius}
          type="number"
          id="inputCelsius"
        />
        <label htmlFor="inputCelsius"></label>
      </fieldset>
      <fieldset className="flex">
        <legend>Schreibe Temparatur in Fahrenheit:</legend>
        <input
          onChange={convertFToC}
          value={props.fahrenheit}
          type="number"
          id="inputFahrenheit"
        />
        <label htmlFor="inputFahrenheit"></label>
      </fieldset>
    </>
  );
};

export default TempInput;
