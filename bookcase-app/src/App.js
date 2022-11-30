import React from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App() {
  const books = data;
  return <Book books={books}/>;
}

export default App;

