import React from "react";
import Button from "./Button";
function FriendsList({ friends, billId, onBillId }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <Friend
          key={friend.id}
          ind={i}
          billId={billId}
          onBillId={onBillId}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
        />
      ))}
    </ul>
  );
}
function Friend({ ind, billId, onBillId, name, image, balance }) {
  const isSelected = ind === billId;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you ₹ {balance}
        </p>
      )}
      {balance < 0 && (
        <p className="red">
          You owe {name} ₹ {Math.abs(balance)}
        </p>
      )}
      <Button onClick={() => onBillId(ind)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
export default FriendsList;
