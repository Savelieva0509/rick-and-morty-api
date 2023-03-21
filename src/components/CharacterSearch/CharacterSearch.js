import PropTypes from 'prop-types';
import css from '../CharacterSearch/CharacterSearch.module.css';
import search from 'img/search.png';

function CharacterSearch({ onSubmit, name }) {
  return (
    <div>
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
      </form>
    </div>
  );
}

export default CharacterSearch;

CharacterSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
