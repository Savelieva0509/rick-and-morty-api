import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../CharacterSearch/CharacterSearch.module.css';
import search from 'img/search.png';

function CharacterSearch({ onSubmit, name }) {
  
  return (
    <div className={css.form_container}>
      <form className={css.form}>
        <img
          src={search}
          alt="search icon"
          width="24"
          height="24"
          className={css.searchFormIcon}
        />
        <input
          type="text"
          name="imgName"
          placeholder="Search by name"
          value={name}
          onChange={onSubmit}
          className={css.input}
        />
        {/* <button type="submit" className={css.button}>
          <span>Search</span>
        </button> */}
      </form>
      <ToastContainer autoClose={3000} limit = {1} />
    </div>
  );
}

export default CharacterSearch;

CharacterSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
