import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

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
    const response = await axios.get("/data.json");
    setBooks(response.data.books);
  };

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

  useEffect((e) => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h2>Currently Reading</h2>
        <div>{renderBooksByStatus("Currently Reading")}</div>
      </div>
      <div>
        <h2>want to Read</h2>
        {renderBooksByStatus("want to Read")}
      </div>
      <div>
        <h2>Read</h2>
        {renderBooksByStatus("Read")}
        {/* {books.map((e) => {
          // return <div>{e.name}</div>;
          return (
            <BookCard key={e.id} book={e} onStatusChange={handleStatusChange} />
          );
        })} */}
      </div>
    </>
  );
}
