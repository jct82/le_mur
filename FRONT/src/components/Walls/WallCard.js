import './walls.scss';
import PropTypes from 'prop-types';
import deleteIcon from 'src/assets/icons/file-erase.png';
import { Link } from 'react-router-dom';
import UserTag from './UserTag';

const WallCard = ({ titleColor, title, photo, users, description, id }) => (
  <div className="wallcard">
    <div className="wallcard__deleteBtn">
      <img className="wallcard__deleteBtn__deleteIcon" src={deleteIcon} alt="delete file" />
    </div>
    <Link className="wallcard__imgContainer" to={{ pathname: '/wall', state: { wallId: id, wallTitle: title } }}>
      <div className="wallcard__imgContainer__img" style={{ backgroundImage: `url('${photo}')` }} />
    </Link>
    <div className="wallcard__description">
      <div className="wallcard__description__title" style={{ backgroundColor: `${titleColor}` }}>{title}</div>
      <p>{description}</p>
    </div>
    <div className="wallcard__coworkers">
      {
        users && users.map((user) => (
          <UserTag pseudo={user} key={user} />
        ))
      }
    </div>
  </div>
);

WallCard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  titleColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WallCard;
