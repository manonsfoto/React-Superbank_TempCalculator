import "./WaterStatus.css";

interface Props {
  celsius: string;
}

const WaterStatus: React.FC<Props> = ({ celsius }) => {
  return (
    <p className="result-water">
      The water
      <span className={`${Number(celsius) >= 100 && "red"}`}>
        {Number(celsius) >= 100 ? "IS" : "is not"}
      </span>
      boiling.
    </p>
  );
};

export default WaterStatus;
