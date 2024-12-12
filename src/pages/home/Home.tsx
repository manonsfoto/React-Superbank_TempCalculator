import SuperBank from "../../components/Super-Bank-Level-3_1/SuperBank";
import TempCalculator from "../../components/Temperatur-Rechner Level-3_2/TempCalculator";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h3>React-Super-Bank-Level-3_1</h3>
      <SuperBank />
      <hr />
      <h3>React-Temperatur-Rechner Level-3_2</h3>
      <TempCalculator />
    </>
  );
};

export default Home;
