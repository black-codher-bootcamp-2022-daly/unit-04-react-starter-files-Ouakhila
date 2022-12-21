function Book(props) {
  const { authors, description, amount, currencyCode, title, smallThumbnail } =
    props;

  return (
    <div className="Book-div">
      <div>
        <h1>{title}</h1>
        <h2>{authors}</h2>
        <h4>{amount}</h4>
        <h5>{currencyCode}</h5>
        <h3>{description}</h3>
      </div>

      <img src={smallThumbnail} alt={title} />

      <button onClick={() => props.onClick(props.id)}>
        {props.isInTheBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default Book;

// const BookList = (props) => {
//   console.log(props.books)
//   return (

//     <main>
//       <h2>Book List</h2>
//       {props.books.map((item) => (<Book title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></Book>))}
//     </main>

//   );

// }
