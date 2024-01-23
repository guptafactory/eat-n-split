import React, { useState } from "react";
import Button from "./Button";
function FormAddFriend({ friends, onShowAddFriend, onAddNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleAddNewFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddNewFriend(newFriend);
    onShowAddFriend();
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleAddNewFriend}>
      <label>👨🏼‍🤝‍👨🏼Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸 Image image:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleAddNewFriend}>Add</Button>
    </form>
  );
}

export default FormAddFriend;
