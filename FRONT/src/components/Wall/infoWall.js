import { useSelector, useDispatch } from 'react-redux';
import { changePanel } from 'src/actions/wall.js';
import usersData from 'src/data/user.js'

import './style.scss';

const InfoWallForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.id);
  const { dateStart, dateChange, title, description, photo, users, admin } = useSelector((state) => state.wall);

  const adminName = usersData.find((user) => admin == user.id);

  const changeForm= () => {
    const fadeElem = document.querySelector('.fade-elem')
    fadeElem.classList.add('on');
    setTimeout(() => {
      dispatch(changePanel('changeWallPanel'));
    }, 500);
    setTimeout(() => {
      fadeElem.classList.remove('on');
    }, 1000);
  }

  return (
    <div className="form-info">
      <h2 className="form-title">Info Document</h2>
      <div className="info-block date flex">
        <div className="left">
          <label>Créé le :</label>
          <p>{dateStart}</p>
        </div>
        <div className="right">
          <label>Modifié le :</label>
          <p>{dateChange}</p>
        </div>
      </div>
      <div className="info-block">
        <label>Nom :</label>
        <p>{title}</p>
        <img src={photo} />
      </div>
      <div className="info-block">
        <label>Description :</label>
        <p>{description}</p>
      </div>
      <div className="info-block">
        <label>Admin :</label>
        <p>{adminName.name}</p>
      </div>
      <div className="info-block">
        <label>Participants :</label>
        <ul className="link-list">
          {users.map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </div>
      {user == admin && 
        <div className="user-btn-block">
          <button className="btn btn-change-txt" type="button" onClick={changeForm}>Modifier</button>
        </div>
      }
    </div>
  )
};
export default InfoWallForm;
