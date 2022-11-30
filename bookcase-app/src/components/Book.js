import React from 'react';

function BookList(props) {
  const{ authors, title, subtitle, selfLink } = props
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{authors}</h3>
      <img src={selfLink} alt={title}/>
   
    </div>
  );
}



const Book = (props) => {
  console.log(props.books)
  return (

    <main>
      <h2>Book List</h2>
      {props.books.map((item) => (<BookList title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></BookList>))}
    </main>
    
  );
  
}




export default Book;
