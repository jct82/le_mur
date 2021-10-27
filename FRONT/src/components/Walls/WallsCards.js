import WallCard from './WallCard';
import './walls.scss';
const rapUsers = ['antoine', 'julien', 'ari'];
const grungeUsers = ['kurt', 'vile', 'wipers', 'army of one'];
const psychedelicUsers = ['mars red sky', 'los bitchos', 'lice', 'melenas', 'tina'];
const WallsCards = () => (
  <div className="wallsCards">
    <WallCard title="rap" titleColor="DarkSlateGrey" photo="/tyler.png" users={rapUsers} />
    <WallCard title="grunge" titleColor="IndianRed" photo="/grunge.jpg" users={grungeUsers} />
    <WallCard title="psychedelic" titleColor="orange" photo="/psychedelic.jpg" users={psychedelicUsers} />
    <WallCard title="rap" titleColor="DarkSlateGrey" photo="/tyler.png" users={rapUsers} />
    <WallCard title="psychedelic" titleColor="orange" photo="/psychedelic.jpg" users={psychedelicUsers} />
  </div>
);

export default WallsCards;
