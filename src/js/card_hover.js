const handleGamePictureHover = (selector, game) => {
  const { background_image, rating, rating_top, ratings_count, released } = game;
  const genres = "in pending...";
  // const genresList = genres.reduce((list, genre) => list.push(genre.name), []).join(', ');
  selector.innerHTML = '';
  // selector.style = `background-image: url('${background_image}')`;
  selector.innerHTML += `
          <p>${released}</p>
          <p>Studio</p>
          <p>${rating}/${rating_top}, ${ratings_count} votes</p>
          <small>Genres: ${genres}</small>
  `;
};

export { handleGamePictureHover };
