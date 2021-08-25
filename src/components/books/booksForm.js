import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../redux/books/booksReducer';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setcategory] = useState('Action');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onCategoryChanged = (e) => setcategory(e.target.value);

  const onAddBookClicked = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(
        addBook({
          item_id: nanoid(),
          category,
          title,
        }),
      );

      setTitle('');
      setcategory('Action');
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
        placeholder="Title"
        required
      />
      <select
        name="category"
        id="category"
        value={category}
        onChange={onCategoryChanged}
      >
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BooksForm;
