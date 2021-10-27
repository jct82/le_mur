import './walls.scss';
import Plus from 'src/assets/icons/plus-neg.png';

const Walls = () => (
  <div className="projects">
    <div className="projects__title">
      <p>Mes Projets</p>
    </div>
    <div className="projects__addProjectBtn">
      <p>ajouter un mur</p>
      <img className="projects__addProjectBtn__plusIcon" src={Plus} alt="bouton ajouter un mur" />
    </div>
  </div>
  // <ProjectList />
);

export default Walls;
