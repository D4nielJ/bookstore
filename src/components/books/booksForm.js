import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../redux/books/booksReducer';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Action');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onGenreChanged = (e) => setGenre(e.target.value);

  const onAddBookClicked = (e) => {
    e.preventDefault();
    if (title && genre) {
      dispatch(
        addBook({
          id: nanoid(),
          title,
          genre,
          author: 'Jhon Doe',
        }),
      );

      setTitle('');
      setGenre('Action');
    }
  };

  return (
    <form onSubmit={onAddBookClicked}>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={onTitleChanged}
        required
      />
      <select name="genre" id="genre" value={genre} onChange={onGenreChanged}>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

export default BooksForm;
