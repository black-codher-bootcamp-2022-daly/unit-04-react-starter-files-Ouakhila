import Book from "./Book";
export const Bookcase = ({ books }) => {
  return (
    <div>
      List of Bookcase
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};
