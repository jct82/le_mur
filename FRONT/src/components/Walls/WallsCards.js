import { useSelector} from 'react-redux';
import WallCard from './WallCard';
import './walls.scss';

const WallsCards = () => {
  const walls = useSelector((state) => state.walls.wallsList);
  return (
    <div className="wallsCards">
      {walls &&
        walls.map((wall) => <WallCard key={wall.id} {...wall} />)
      }
    </div>
  );
};

export default WallsCards;
