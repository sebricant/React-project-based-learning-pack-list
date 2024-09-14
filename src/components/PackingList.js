import { useState } from "react"
import { Item } from "./App"

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input")
  let sortByItems
  if (sortBy === "input") sortByItems = items
  if (sortBy === "description")
    sortByItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === "packed")
    sortByItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))
  return (
    <div className="list">
      <ul>
        {sortByItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input value</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  )
}
