import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../CharacterList/CharacterList.module.css';

const CharacterListItem = ({ id, name, image, species, location }) => {
  return (
    <li className={css.item} key={id}>
      <Link to={`${id}`} state={{ from: location }} className={css.link}>
        <img src={image} alt={name} className={css.itemImage} />
        <div className={css.textContainer}>
          <p className={css.name}>{name}</p>
          <p className={css.species}>{species}</p>
        </div>
      </Link>
    </li>
  );
};

CharacterListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

const CharacterList = ({ characters }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {characters.map(({ id, name, image, species }) => (
        <CharacterListItem
          key={id}
          id={id}
          name={name}
          image={image}
          species={species}
          location={location}
        />
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
