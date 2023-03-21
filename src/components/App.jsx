import { Routes, Route } from 'react-router-dom';
import Characters from '../pages/Main/Main';
import CharacterDetails from '../pages/CharacterDetails/CharacterDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/:characterId" element={<CharacterDetails />} />
    </Routes>
  );
};
