import { ethers } from "ethers";
import React, { useState } from "react";
import "./buy.css"; 

const Buy = ({ state }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const buyChai = async (event) => {
    event.preventDefault();

    const { contract } = state;
    if (!contract) {
      alert("Smart contract not loaded.");
      return;
    }

    try {
      const amount = { value: ethers.utils.parseEther("0.001") };
      const transaction = await contract.buyChai(name, message, amount);
      await transaction.wait();
      alert("Transaction is successful");
      window.location.reload();
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="center">
      <h1>Buy Chai</h1>
      <form onSubmit={buyChai}>
        <div className="inputbox">
          <input
            type="text"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input
            type="text"
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span>Message</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
      </form>
    </div>
  );
};

export default Buy;
