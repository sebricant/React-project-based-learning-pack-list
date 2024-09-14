export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to your package list🚀</em>
        </p>
      </footer>
    )
  }
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  console.log(numPacked)

  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          👜 You have {numItems} items in your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      ) : (
        <em>You are ready to Fly ✈️</em>
      )}
    </footer>
  )
}
