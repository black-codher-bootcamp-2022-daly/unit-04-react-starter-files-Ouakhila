import React from 'react';
import Book from './components/Book';
import data from './models/books.json';
import BookList from './components/BookList';

function addBook(id) {
  console.log(`The Book ${id} wa clicked`)
}

function App() {
  const books = data;
  return (
  // 
  <BookList books={books} addBook={addBook}>
  <Book books={books} onClick={() =>PaymentResponse.addBook(props.book.id)}/>
  </BookList>
  );
}

export default App;

