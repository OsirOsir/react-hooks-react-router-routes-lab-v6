import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movieItem, setMovieItem] = useState({});
  const { id } = useParams();  // Correctly destructure the id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovieItem(data))
      .catch((error) => console.error(error));
  }, [id]);
  

  if (!movieItem.title) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieItem.title}</h1>
        <p>Runtime: {movieItem.time} minutes</p>
        <div>
          {movieItem.genres.map((genre, index) => (
            <span key={index}> {genre} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
