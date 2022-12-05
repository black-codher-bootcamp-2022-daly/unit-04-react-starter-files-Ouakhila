import { React } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> All Pets </Link>
        </li>
        <li>
          <Link to="/kittens"> Kittens </Link>
        </li>
        <li>
          <Link to="/puppies"> Puppies </Link>
        </li>
        <li>
          <Link to="/duckling"> Duckling </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="kittens"
          element={<Animals name={"kittens"} img={"imgs/kitten.jpg"} />}
        />
        <Route
          path="Puppies"
          element={<Animals name={"puppies"} img={"imgs/puppy.jpg"} />}
        />
        <Route
          path="Duckling"
          element={<Animals name={"duckling"} img={"imgs/duckling.jpg"} />}
        />
      </Routes>
    </Router>
  );
}

function Animals({ name, img }) {
  return (
    <div>
      <h2>{name}</h2>
      <section>This is the {name} page</section>
      <img src={img} alt={name} />
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>All Pets</h1>
      <section>This is the page for all your pet needs</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
      <img src="imgs/puppy.jpg" alt="Puppy" />
      <img src="imgs/duckling.jpg" alt="Duckling" />
    </>
  );
}

function Kittens() {
  return (
    <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
    </>
  );
}

function Puppies() {
  return (
    <div>
      <h2>Puppies</h2>
      <section>This is the Puppy page</section>
      <img src="imgs/puppy.jpg" alt="Puppy" />
    </div>
  );
}

function Duckling() {
  return (
    <>
      <h1>Duckling</h1>
      <section>This is the Duckling page</section>
      <img src="imgs/duckling.jpg" alt="Duckling" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
