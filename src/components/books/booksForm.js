import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../redux/books/booksReducer';

import st from './booksForm.module.css';
import TextInput from '../forms/input';
import categories from '../../data/categories';

const maxChapters = Array.from(Array(100).keys());

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(0);
  const [chaptersTotal, setChaptersTotal] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [maxCurrentChapter, setMaxCurrentChapter] = useState([]);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);
  const onChaptersTotalChanged = (e) => {
    setChaptersTotal(e.target.value);
    setMaxCurrentChapter(Array.from(Array(Number(e.target.value)).keys()));
  };
  const onCurrentChapterChanged = (e) => setCurrentChapter(e.target.value);

  // NON-DRY

  const categoriesOptions = categories.map((categorie, index) => (
    <option key={index} value={index}>
      {categorie}
    </option>
  ));

  const chaptersTotalOptions = maxChapters.map((number) => (
    <option key={number} value={number + 1}>
      {number + 1}
    </option>
  ));

  const currentChapterOptions = maxCurrentChapter.map((number) => (
    <option key={number} value={number + 1}>
      {number + 1}
    </option>
  ));

  const onAddBookClicked = (e) => {
    e.preventDefault();
    if (title) {
      if (!author) {
        setAuthor('Anonymous');
      }
      const atr = `${category}-${author}-${chaptersTotal}-${currentChapter}`;
      console.log(atr);
      dispatch(
        addBook({
          item_id: nanoid(),
          atr,
          title,
        }),
      );

      setTitle('');
      setAuthor('');
      setCategory(0);
      setChaptersTotal(0);
      setCurrentChapter(0);
    }
  };

  return (
    <form onSubmit={onAddBookClicked} className={st.form}>
      <h2 className={st.title}>ADD NEW BOOK</h2>
      <TextInput value={title} changeEvent={onTitleChanged} placeholder="Title" required />
      <TextInput value={author} changeEvent={onAuthorChanged} placeholder="Author" />
      <select
        name="category"
        id="category"
        value={category}
        onChange={onCategoryChanged}
        className={st.select}
      >
        <option value="0" disabled>
          Category
        </option>
        {categoriesOptions}
      </select>
      <select
        name="chaptersTotal"
        id="chaptersTotal"
        value={chaptersTotal}
        onChange={onChaptersTotalChanged}
        className={st.select}
      >
        <option value="0" disabled>
          Chapters Total
        </option>
        {chaptersTotalOptions}
      </select>
      <select
        name="currentChapter"
        id="currentChapter"
        value={currentChapter}
        onChange={onCurrentChapterChanged}
        className={st.select}
      >
        <option value="0" disabled>
          Current Chapter
        </option>
        {currentChapterOptions}
      </select>
      <button type="submit" className={st.button}>
        ADD BOOK
      </button>
    </form>
  );
};

export default BooksForm;
