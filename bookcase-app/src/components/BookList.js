//import Book from "./Book";

function BookList(props) {
  return (
    <main>
      {props.children}
      {/* {props.books.map((item) => (<Book title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></Book>))} */}
    </main>
  );
}
export default BookList;
