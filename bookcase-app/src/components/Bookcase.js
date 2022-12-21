//import Book from "./Book";
import Book from "./Book";

export const Bookcase = ({ listOfbooks }) => {
  return (
    <div>
      <h2> You have Added: {listOfbooks.length}</h2>
      {listOfbooks.map((el) => (
        <Book
          key={el.id}
          title={el.title}
          authors={el.volumeInfo.authors}
          amount={el.saleInfo.retailPrice?.amount}
          currencyCode={el.saleInfo.retailPrice?.currencyCode}
          description={el.volumeInfo.description}
          imageLinks={el.volumeInfo.imageLinks?.smallThumbnail}
          isInTheBasket={true}
        />
      ))}
    </div>
  );
};
