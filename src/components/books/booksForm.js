import { useState } from 'react';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Action');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onGenreChanged = (e) => setGenre(e.target.value);

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={onTitleChanged}
      />
      <select name="genre" id="genre" value={genre} onChange={onGenreChanged}>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  );
};

export default BooksForm;
