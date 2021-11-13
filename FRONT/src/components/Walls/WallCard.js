import './walls.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import deleteIcon from 'src/assets/icons/file-erase.png';
import crossIcon from 'src/assets/icons/cross-neg-white.png';
import cameraIcon from 'src/assets/icons/camera.jpg';
import { Link } from 'react-router-dom';
import UserTag from './UserTag';
import { deleteWallAction } from '../../actions/wall';

const WallCard = ({
  title_color, title, photo, users, description, id,
}) => {
  const [deleteWall, setDeleteWall] = useState(false);
  const [deleteWallId, setDeleteWallId] = useState();
  const dispatch = useDispatch();

  const handleDeleteWall = (wallId) => {
    setDeleteWall(true);
    setDeleteWallId(wallId);
  };
  const handleCloseDeleteBox = () => {
    setDeleteWallId(false);
    setDeleteWallId(null);
  };
  const handleConfirmDeleteWall = (wallId) => {
    dispatch(deleteWallAction(wallId));
  };
  return (
    <div className="wallcard">
      <div className="wallcard__deleteBtn" onClick={() => handleDeleteWall(id)}>
        <img className="wallcard__deleteBtn__deleteIcon" src={deleteIcon} alt="delete file" />
      </div>
      <div className="wallcard__imgContainer">

        {/* ------affichage conditionel confirmation de suppression du mur  */}
        {
        deleteWall && id === deleteWallId
          ? (
            <div className="wallcard__imgContainer__deleteBox --deleteDialog">
              <div className="wallcard_imgContainer__deleteBox__delete">
                <img className="wallcard__imgContainer__deleteBox__delete__closeIcon" src={crossIcon} onClick={handleCloseDeleteBox} alt="fermeture" />
                <p className="wallcard__imgContainer__deleteBox__delete"> Supprimer le mur ?
                  <div className="wallcard__imgContainer__deleteBox__delete__btn" onClick={() => handleConfirmDeleteWall(id)}>Oui</div>
                  <div className="wallcard__imgContainer__deleteBox__delete__btn" onClick={handleCloseDeleteBox}>Non</div>
                </p>
              </div>
            </div>
          )
          : (
            <Link to={{ pathname: '/wall', state: { wallId: id, wallTitle: title } }}>
              {
                photo
                  ? <div className="wallcard__imgContainer__img" style={{ backgroundImage: `url('http://localhost:3000/${photo}')`, backgroundPosition: 'center' }} />
                  : <div className="wallcard__imgContainer__img" style={{ backgroundImage: 'url(\'/images/icons/camera.jpg\')', backgroundPosition: 'center' }} />
              }
            </Link>
          )
      }

      </div>
      <div className="wallcard__description">
        <div className="wallcard__description__title" style={{ backgroundColor: `${title_color}` }}>{title}</div>
        <p>{description}</p>
      </div>
      <div className="wallcard__coworkers">
        {
          users && users.map((user) => (
            <UserTag pseudo={user.name} key={user.id} />
          ))
        }
      </div>
    </div>
  );
};

WallCard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title_color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default WallCard;
