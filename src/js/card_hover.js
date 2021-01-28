const handleGamePictureHover = (selector, game, developers) => {
  const { background_image, rating, rating_top, ratings_count, genres, released } = game;
  // const genres = "in pending...";
  selector.innerHTML = '';
  let genresList = [];
  genres.forEach(genre => {
    genresList.push(genre.name);
  });
  genresList = genresList.join(', ');
  selector.innerHTML += `
        <div class="text-top-left">
          <p>${released}</p>
          <p>${developers}</p>
          <p>${rating}/${rating_top}, ${ratings_count} votes</p>
          <small>Genres: ${genresList}</small>
        </div>
  `;
};

export { handleGamePictureHover };
