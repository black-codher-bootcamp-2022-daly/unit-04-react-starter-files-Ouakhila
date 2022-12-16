import React from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import BookList from "./components/BookList";
import { Search } from "./components/Search";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Bookcase } from "./components/Bookcase";
import { Home } from "./components/Home";

function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  function addBook(id) {
    const bookToAdd = basket;
    bookToAdd.push(id);
    setBasket(bookToAdd);
    console.log({ bookToAdd, basket });
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
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <BookList books={books} addBook={addBook}>
                <Search
                  keyword={keyword}
                  setKeyword={setKeyword}
                  findBooks={findBooks}
                ></Search>
                {books.map((item) => (
                  <Book
                    key={item.id}
                    title={item.title}
                    authors={item.volumeInfo.authors}
                    amount={item.saleInfo.retailPrice?.amount}
                    currencyCode={item.saleInfo.retailPrice?.currencyCode}
                    description={item.volumeInfo.description}
                    imageLinks={item.volumeInfo.imageLinks.thumbnail}
                    onClick={() => addBook(item)}
                  ></Book>
                ))}
              </BookList>
            </Home>
          }
        ></Route>
        <Route path="About" element={<About />}></Route>
        <Route
          path="Bookcase"
          element={<Bookcase listOfbooks={basket} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
