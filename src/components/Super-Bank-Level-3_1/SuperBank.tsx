import { useEffect, useState } from "react";
import "./SuperBank.css";
import { CreditCard } from "react-kawaii";

type TMood =
  | "sad"
  | "shocked"
  | "happy"
  | "blissful"
  | "lovestruck"
  | "excited"
  | "ko";

const SuperBank = () => {
  const [balance, setBalance] = useState<number>(0);
  const [inputNum, setInputNum] = useState<string>("");
  const [mood, setMood] = useState<TMood>("happy");

  useEffect(() => {
    switch (true) {
      case balance < -500:
        setMood("ko");
        break;
      case balance < 0:
        setMood("sad");
        break;
      case 0 <= balance && balance <= 500:
        setMood("happy");
        break;
      case 500 < balance && balance <= 2000:
        setMood("excited");
        break;
      case 2000 < balance && balance <= 10000:
        setMood("blissful");
        break;
      case 10000 < balance && balance <= 50000:
        setMood("lovestruck");
        break;
      case 50000 < balance:
        setMood("shocked");
        break;
    }
  }, [balance]);

  return (
    <section className="superBank flex">
      <CreditCard size={240} mood={mood} color="#c9a9fa" />

      <h1 className="title">Super Bank</h1>
      <form className="flex">
        <p>Dein Girokonto</p>
        <h1>{balance} €</h1>
        <input
          value={inputNum}
          type="number"
          min={0}
          id="inputAmountOfMoney"
          placeholder="Gib einen Geldbetrag ein"
          onChange={(e) => {
            setInputNum(e?.target.value);
          }}
        />
        <label htmlFor="inputAmountOfMoney"></label>
        <div className="btn-wrapper flex">
          <button
            type="button"
            onClick={() => {
              setBalance((prev) => (inputNum ? prev + Number(inputNum) : prev));
              setInputNum("");
            }}
          >
            Einzahlen
          </button>
          <button
            type="button"
            onClick={() => {
              setBalance((prev) => (inputNum ? prev - Number(inputNum) : prev));
              setInputNum("");
            }}
          >
            Auszahlen
          </button>
        </div>
      </form>
    </section>
  );
};

export default SuperBank;
