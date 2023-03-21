import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { characterDetails } from '../../API';
import Loader from 'components/Loader/Loader';
import css from '../CharacterDetails/CharacterDetails.module.css';

const CharacterDetails = () => {
  const location = useLocation();
  const { characterId } = useParams();
  const [character, setCharacter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      characterDetails(characterId)
        .finally(() => setIsLoading(false))
        .then(response => {
          setCharacter(response.data);
          console.log(response.data);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError, characterId]);

  const backLink = location.state?.from ?? '/';

  return (
    <div className={css.container}>
      {character && (
        <div>
          <Link to={backLink} className={css.backlink}>
            &#8592; GO BACK
          </Link>
          {isLoading && <Loader />}
          <div className={css.informContainer}>
            <img
              width={150}
              height={150}
              src={character.image}
              alt={character.name}
              className={css.imageCharacter}
            />
            <h2 className={css.name}> {character.name}</h2>
            <p className={css.title}>Informations</p>
            <ul className={css.characteristicsList}>
              <li className={css.characteristicsItem}>
                <p className={css.characteristicsTitle}>Gender</p>
                <p className={css.characteristicsText}>{character.gender}</p>
              </li>
              <li className={css.characteristicsItem}>
                <p className={css.characteristicsTitle}>Status</p>
                <p className={css.characteristicsText}>{character.status}</p>
              </li>
              <li className={css.characteristicsItem}>
                <p className={css.characteristicsTitle}>Specie</p>
                <p className={css.characteristicsText}>{character.species}</p>
              </li>
              <li className={css.characteristicsItem}>
                <p className={css.characteristicsTitle}>Origin</p>
                <p className={css.characteristicsText}>
                  {character.origin.name}
                </p>
              </li>
              <li className={css.characteristicsItem}>
                <p className={css.characteristicsTitle}>Type</p>
                <p className={css.characteristicsText}>
                  {character?.type === '' ? 'Unkwown' : character?.type}
                </p>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
