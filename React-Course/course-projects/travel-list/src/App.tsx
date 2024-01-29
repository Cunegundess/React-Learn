import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ItemType } from "./data/initialItems";

export default function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handleAddItems(item: ItemType) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        item={{
          id: 0,
          description: "",
          quantity: 0,
          packed: false,
        }}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
