//import Book from "./Book";
//import Book from "./Book";

export const Bookcase = ({ listOfbooks }) => {
  return (
    <div>
      <h2>{listOfbooks.length}</h2>
      {listOfbooks.map((el) => el.volumeInfo.title)}
    </div>
  );
};
