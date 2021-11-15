import { useSelector } from 'react-redux';
import NoWall from './Nowall';
import WallCard from './WallCard';
import './walls.scss';

const WallsCards = () => {
  const walls = useSelector((state) => state.walls.wallsList);
  return (
    <div className="wallsCards">
      {walls.length > 0
        ? walls.map((wall) => <WallCard key={wall.id} {...wall} />)
        : <NoWall />}
    </div>
  );
};

export default WallsCards;
