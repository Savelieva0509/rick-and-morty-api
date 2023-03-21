import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../CharacterList/CharacterList.module.css';

const CharacterList = ({ characters }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {characters.map(({ id, name, image, species }) => {
        return (
          <li className={css.item} key={id}>
            <Link
              to={`${id}`}
              key={id}
              state={{ from: location }}
              className={css.link}
            >
              <img src={[image]} alt={name} className ={css.itemImage} />
              <div className={css.textContainer}>
                <p className={css.name}>{name}</p>
                <p className={css.species}>{species}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
