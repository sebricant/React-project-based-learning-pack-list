import { useState } from "react"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Cash", quantity: 1, packed: true },
  { id: 3, description: "Socks", quantity: 12, packed: false },
]
export default function App() {
  const [items, setItems] = useState([])

  function handleAdditem(item) {
    setItems((items) => [...items, item])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditem} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🏝️ Pack list 👜</h1>
}

function Form({ onAddItems }) {
  function handleSubmit(e) {
    e.preventDefault()
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)
    onAddItems(newItem)
    setDescription("")
    setQuantity(1)
  }

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      What do you need for your 😍 trip?
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  )
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items in your list, and you already packed X (X%)</em>
    </footer>
  )
}
