import { useState } from "react"
import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackingList"
import Stats from "./Stats"

export default function App() {
  const [items, setItems] = useState([])

  function handleAdditem(item) {
    console.log(item)

    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    console.log(id)

    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  function HandleClearItems(items) {
    let confirmed = window.confirm(
      "Are you sure do you want to delete all the files?"
    )
    if (confirmed) setItems((items = []))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={HandleClearItems}
      />
      <Stats items={items} />
    </div>
  )
}

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggleItem(item.id)}
      />{" "}
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
