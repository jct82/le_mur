import walls from 'src/data/walls';
import WallCard from './WallCard';
import './walls.scss';

const WallsCards = () => (
  <div className="wallsCards">
    {
      walls.map((wall) => <WallCard key={wall.id} {...wall} />)
    }
  </div>
);

export default WallsCards;
