// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getAllUsers } from '../../actions/users';
import WallCard from './WallCard';
import './walls.scss';

const WallsCards = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);
  const walls = useSelector((state) => state.walls.wallsList);
  return (
    <div className="wallsCards">
      {
        walls.map((wall) => <WallCard key={wall.id} {...wall} />)
      }
    </div>
  );
};

export default WallsCards;
