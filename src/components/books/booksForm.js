import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../redux/books/booksReducer';

import st from './booksForm.module.css';
import TextInput from '../forms/input';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setcategory] = useState('Action');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
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
    <form onSubmit={onAddBookClicked} className={st.form}>
      <h2 className={st.title}>ADD NEW BOOK</h2>
      <TextInput value={title} changeEvent={onTitleChanged} placeholder="Title" required />
      <TextInput value={author} changeEvent={onAuthorChanged} placeholder="Author" required />
      <select
        name="category"
        id="category"
        value={category}
        onChange={onCategoryChanged}
        className={st.select}
      >
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit" className={st.button}>
        ADD BOOK
      </button>
    </form>
  );
};

export default BooksForm;
