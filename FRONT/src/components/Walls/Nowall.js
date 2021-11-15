import notWallFound from 'src/assets/icons/bankrupt.png';

const NoWall = () => (
  <div className="wallsCards__noWall">
    { notWallFound
    && (
    <div>
      <img className="wallsCards__noWall__img" src={notWallFound} alt="no wall found" />
      <h2>Vous n'avez pas de projet en cours</h2>
      <p>créez un projet en ajoutant un mur svp</p>
    </div>
    )}
  </div>
);

export default NoWall;
