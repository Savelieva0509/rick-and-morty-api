import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import CharacterSearch from 'components/CharacterSearch/CharacterSearch';
import CharacterList from 'components/CharacterList/CharacterList';
import css from '../Main/Main.module.css';
import { allCharacters } from '../../API';
import Button from 'components/Button/Button';
import logo from 'img/logo.png';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(localStorage.getItem("query"));
  const [characters, setCharacters] = useState([]);
  const [setError] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  
  const sortCharacters = (a, b) => a.name.localeCompare(b.name);

  useEffect(() => {
    try {
      setIsLoading(true);
      allCharacters(page)
        .finally(() => setIsLoading(false))
        .then(response => {
          setCharacters(response.data.results.sort(sortCharacters));
        });
        
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [page, setError]);

  useEffect(() => {
    if (characters) {
      const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCharacters(filtered);
      localStorage.setItem('query', query);
    }
  }, [characters, query]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.container}>
      <img src={logo} alt="Rick and Morty" className={css.logo} />
      <CharacterSearch onSubmit={onChange} name={query} />
      {isLoading && <Loader />}
      <CharacterList characters={filteredCharacters} />
      <ScrollToTop/>
      <Button onLoadMore={loadMore} />
     
      <Suspense fallback={<Loader center content="loading" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Characters;
