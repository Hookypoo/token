import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {

  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setDisable] = useState(false);
<<<<<<< HEAD
  
  async function handleClick() {
=======
  const [feedBack, setFeedBack] = useState("");
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    setHidden(true);
>>>>>>> 6e2bc336b706a96c189ee6c8371c40e2f600ac28
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);
    const result = await token.transfer(recipient, amountToTransfer);
    setFeedBack(result);
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) =>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) =>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button 
          id="btn-transfer" 
          onClick={handleClick}
          disabled={isDisabled}
          >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedBack}</p>
      </div>
    </div>
  );
}

export default Transfer;
