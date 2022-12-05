import React from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";

function addBook(id) {
  console.log(`The Book ${id} wa clicked`);
}

function App() {
  const [books] = React.useState(data);
  return (
    //
    <BookList books={books} addBook={addBook}>
      {books.map((item) => (
        <Book
          onClick={addBook}
          key={item.id}
          title={item.volumeInfo.title}
          subtitle={item.volumeInfo.subtitle}
          authors={item.volumeInfo.authors}
          selflink={item.selfLink}
        ></Book>
      ))}
    </BookList>
  );
}

export default App;
