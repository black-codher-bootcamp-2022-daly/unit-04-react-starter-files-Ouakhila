import React from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import { Search } from "./components/Search";
import { useState } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  function addBook(id) {
    console.log(`The Book ${id} wa clicked`);
    const bookToAdd = basket;
    bookToAdd.push(id);
    setBasket(bookToAdd);
  }

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    //
    <div>
      {/* <Routes>
        <Route path="/Home"></Route>
      </Routes> */}
      <BookList books={books} addBook={addBook}>
        <Search
          keyword={keyword}
          setKeyword={setKeyword}
          findBooks={findBooks}
        ></Search>
        {books.map((item) => (
          <Book
            onClick={addBook}
            key={item.id}
            title={item.title}
            authors={item.volumeInfo.authors}
            amount={item.saleInfo.retailPrice?.amount}
            currencyCode={item.saleInfo.retailPrice?.currencyCode}
            description={item.volumeInfo.description}
            imageLinks={item.volumeInfo.imageLinks.thumbnail}
          ></Book>
        ))}
      </BookList>
    </div>
  );
}

export default App;
