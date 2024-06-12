import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// const MovieRating = () => {
//   const [movieRating, setMovieRating] = useState(0);

//   const handleMovieRating = (rating) => {
//     setMovieRating(rating);
//   };
//   return (
//     <>
//       <StarRating color="pink" onSetRating={handleMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <MovieRating /> */
}
