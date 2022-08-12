import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
   const result = await token.payOut();
   setText(result);
    // setDisable(false);
<<<<<<< HEAD
    // browser msg.caller id 2vxsx-fae
=======
    //2vxsx-fae
>>>>>>> 6e2bc336b706a96c189ee6c8371c40e2f600ac28
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button 
        id="btn-payout" 
        onClick={handleClick}
        disabled = {isDisabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
