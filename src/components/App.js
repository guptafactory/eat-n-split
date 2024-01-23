import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";
import { useState } from "react";
const intialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7000,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20000,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friends, setFriends] = useState(intialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [billId, setBillId] = useState(-1);
  function handleShowAddFriend() {
    setShowAddFriend((val) => !val);
  }
  function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleBillId(id) {
    if (billId === -1) {
      setBillId(id);
    } else {
      setBillId(-1);
    }
    setShowAddFriend(false);
  }
  function handleSplitBill(ind, val) {
    const arr = friends;
    arr[ind].balance += val;
    setFriends(arr);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          key={11}
          billId={billId}
          onBillId={handleBillId}
        />
        {showAddFriend && (
          <FormAddFriend
            key={12}
            friends={friends}
            onShowAddFriend={handleShowAddFriend}
            onAddNewFriend={handleAddNewFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend === false ? "Add Friend" : "Close"}
        </Button>
      </div>
      {billId !== -1 && (
        <FormSplitBill
          key={13}
          friends={friends}
          billId={billId}
          onBillId={handleBillId}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
export default App;
