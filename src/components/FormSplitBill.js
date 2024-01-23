import React, { useState } from "react";
import Button from "./Button";
function FormSplitBill({ friends, billId, onBillId, onSplitBill }) {
  const { name } = friends[billId];
  const [totalBill, setTotalBill] = useState("");
  const [userBill, setUserBill] = useState("");
  const [payee, setPayee] = useState("user");
  let friendBill =
    Number(totalBill) > 0
      ? Number(totalBill) >= Number(userBill)
        ? Number(totalBill) - Number(userBill)
        : ""
      : "";
  function handleUserBill(val) {
    if (val < 0 || val > Number(totalBill)) setUserBill("");
    else setUserBill(val);
  }
  function handleBillSubmit(e) {
    e.preventDefault();
    if (!totalBill) return;
    if (payee === "user") {
      onSplitBill(billId, friendBill);
    } else {
      onSplitBill(billId, -userBill);
    }
    onBillId(-1);
  }
  return (
    <form className="form-split-bill" onSubmit={(e) => handleBillSubmit(e)}>
      <h2>Split a bill with {name}</h2>
      <label>💸 Bill Value</label>
      <input
        type="number"
        min={0}
        max={10000}
        value={totalBill}
        onChange={(e) =>
          setTotalBill(Number(e.target.value) > 0 ? Number(e.target.value) : "")
        }
      />
      <label>🤵 Your expense</label>
      <input
        type="number"
        min={0}
        max={10000}
        value={userBill}
        onChange={(e) => handleUserBill(Number(e.target.value))}
      />
      <label>👨🏽‍🤝‍👨🏻 {name}'s expense</label>
      <input type="number" value={friendBill} disabled />
      <label>🤑 Who is paying the bill?</label>
      <select value={payee} onChange={(e) => setPayee(e.target.value)}>
        <option value="user">You</option>
        <option value={name}>{name}</option>
      </select>
      <Button onClick={(e) => handleBillSubmit(e)}>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
