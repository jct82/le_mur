import './walls.scss';
import { useState } from 'react';
import Plus from 'src/assets/icons/plus-neg.png';
import WallsCards from './WallsCards';
import WallForm from './WallForm';

const Walls = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const handleOpenForm = () => {
    setFormOpen(!isFormOpen);
  };
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Mes Projets</h1>
      </div>
      <div className="projects__addProjectBtn" onClick={handleOpenForm}>
        <p className="projects__addProjectBtn__title">ajouter un mur</p>
        <img className="projects__addProjectBtn__plusIcon" src={Plus} alt="bouton ajouter un mur" />
      </div>
      {
        isFormOpen && <WallForm />
      }
      <WallsCards />
    </div>
  );
};

export default Walls;
