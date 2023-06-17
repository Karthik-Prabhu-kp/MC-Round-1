import "./BookCard.css";

export default function BookCard({ book, onStatusChange }) {
  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    onStatusChange(book.id, selectedStatus);
  };

  return (
    <div className="BookCard">
      <img src={book.img} alt="book" />
      <p>Name: {book.name}</p>
      <span>Author: {book.author}</span>
      <select value={book.status} onChange={handleStatusChange}>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
      </select>
    </div>
  );
}
