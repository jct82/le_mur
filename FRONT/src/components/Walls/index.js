import './walls.scss';
import Plus from 'src/assets/icons/plus-neg.png';
import WallsCards from './WallsCards';

const Walls = () => (
  <div className="projects">
    <div className="projects__title">
      <h1>Mes Projets</h1>
    </div>
    <div className="projects__addProjectBtn">
      <p>ajouter un mur</p>
      <img className="projects__addProjectBtn__plusIcon" src={Plus} alt="bouton ajouter un mur" />
    </div>
    <WallsCards />
  </div>
);

export default Walls;
