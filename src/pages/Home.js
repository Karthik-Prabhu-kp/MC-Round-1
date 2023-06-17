import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleStatusChange = (bookId, status) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, status: status };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const getData = async () => {
    try {
      const response = await axios.get("/data.json");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderBooksByStatus = (status) => {
    return books
      .filter((book) => book.status === status)
      .map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onStatusChange={handleStatusChange}
        />
      ));
  };

  return (
    <>
      <div className="Section">
        <h2>Currently Reading</h2>
        <div className="BookContainer">
          {renderBooksByStatus("Currently Reading")}
        </div>
      </div>
      <div className="Section">
        <h2>Want to Read</h2>
        <div className="BookContainer">
          {renderBooksByStatus("Want to Read")}
        </div>
      </div>
      <div className="Section">
        <h2>Read</h2>
        <div className="BookContainer">{renderBooksByStatus("Read")}</div>
      </div>
    </>
  );
}
