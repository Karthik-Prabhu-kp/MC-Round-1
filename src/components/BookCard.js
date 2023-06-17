export default function ({ book, onStatusChange }) {
  console.log(book);

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    onStatusChange(book.id, selectedStatus);
  };

  return (
    <div>
      <p>Name: {book.name}</p>
      <span>Author: {book.author}</span>
      <select value={book.status} onChange={handleStatusChange}>
        <option>currently reading</option>
        <option>Want to read</option>
        <option>Read</option>
      </select>
    </div>
  );
}
