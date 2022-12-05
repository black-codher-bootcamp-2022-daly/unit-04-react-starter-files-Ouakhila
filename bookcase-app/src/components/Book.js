function Book(props) {
  const { authors, title, subtitle, selfLink } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{authors}</h3>
      <img src={selfLink} alt={title} />
      <button onClick={() => props.onClick(props.id)}></button>
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
