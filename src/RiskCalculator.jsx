import React, { useState } from "react";
import Popup from "./Popup";
import Risk from "./assets/risk.png"

function RiskCalculator() {
  const [showPopup, setShowPopup] = useState(false);
  const [entry, setEntry] = useState("");
  const [sl, setSl] = useState("");
  const [risk, setRisk] = useState("");
  const [riskRewardRatio, setRiskRewardRatio] = useState("");
  const [qty, setQty] = useState(null);
  const [investment, setInvestment] = useState(null);
  const [target, setTarget] = useState(null);

  const calculateValues = () => {
    const entryValue = parseFloat(entry);
    const slValue = parseFloat(sl);
    const riskValue = parseFloat(risk);
    const rrRatioValue = parseFloat(riskRewardRatio);

    const calculatedQty = Math.floor(riskValue / (entryValue - slValue));
    const calculatedInvestment = calculatedQty * entryValue;
    const calculatedTarget = entryValue + (entryValue - slValue) * rrRatioValue;

    setQty(calculatedQty);
    setInvestment(calculatedInvestment);
    setTarget(calculatedTarget);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup} style={styles.rr}>
        <img style={styles.rrImage} src={Risk} alt="" />
      </button>

      <Popup show={showPopup} onClose={togglePopup}>
        <div style={styles.container}>
          <h2>Risk Reward Calculator</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Entry Price:</label>
            <input
              type="number"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Stop-Loss Price:</label>
            <input
              type="number"
              value={sl}
              onChange={(e) => setSl(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Risk Amount:</label>
            <input
              type="number"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Risk-Reward Ratio:</label>
            <input
              type="number"
              value={riskRewardRatio}
              onChange={(e) => setRiskRewardRatio(e.target.value)}
              style={styles.input}
            />
          </div>
          <button onClick={calculateValues} style={styles.button}>
            Calculate
          </button>
          {qty !== null && (
            <div style={styles.results}>
              <p>Quantity: {qty}</p>
              <p>Investment: ${investment.toFixed(2)}</p>
              <p>Target Price: ${target.toFixed(2)}</p>
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    fontSize : "0.7rem"
  },
  formGroup: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "5px",
    fontSize: "0.8rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "0.8rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rr:{
    display : "flex",
    alignItems : "center",
    width: "50px",
    height : "50px",
    borderRadius :  "50%",
    border : "none",
    cursor : "pointer",
  },

  rrImage : {
    width : "100%"
  }
  ,
  results: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
  },
};

export default RiskCalculator;
