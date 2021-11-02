import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import docs from 'src/data/element';
import user from 'src/data/user';
import { emptyForm } from 'src/actions/element.js'
import { changePanel, toggleEye } from 'src/actions/wall.js'
import Docs from './docs';
import AddDocForm from './addDoc';
import InfoDocForm from './infoDoc';
import ChangeWallForm from './changeWall';
import InfoWallForm from './infoWall';
import { useLocation } from 'react-router-dom';

import './style.scss';

const Wall = () => {
  // pour passer les infos du mur depuis la page Walls
  const location = useLocation();
  const { wallTitle, wallId } = location.state;

  const dispatch = useDispatch();
  const { panel } = useSelector((state) => state.wall);

  const slidePanel = () => {
    document.querySelector('.main').classList.add('on');
  }

  const closePanel = () => {
    document.querySelector('.main').classList.remove('on');
    setTimeout(() => {
      dispatch(emptyForm({nameF: '', descriptionF: '', typeF : '', linkF: [], urlSrcF: '', currentLinkF: ''}));
    },500);
  }

  const displayPanel = (e) => {
    dispatch(changePanel(e.target.getAttribute('panel')));
    slidePanel();
  }

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if(!e.target.parentNode.classList.contains('doc')) dispatch(toggleEye(-1));
    });
  },[]);


  const wallDoc = docs;
  const currentUser = 1;

  return (
    <div className="wall">
      <div className="sub-header">
        <h1>{ wallTitle }</h1>
      </div>
      <div className="main">
        <div className="dashboard">
          <div className="close-panel" onClick={closePanel}></div>
          <div className="fade-elem"></div>
          {panel == 'infoWallPanel' && <InfoWallForm />}
          {panel == 'changeWallPanel' && <ChangeWallForm />}
          {panel == 'infoDocPanel' && <InfoDocForm />}
          {panel == 'addDocPanel' && <AddDocForm />}
        </div>
        <div className="menu-bar">
          <div className="icon info" panel="infoWallPanel" onClick={displayPanel}></div>
          <div className="icon add" panel="addDocPanel" onClick={displayPanel}></div>
        </div>
        <div className="board-wrapper">
          <div className="board">
            <Docs docs={wallDoc} user={currentUser} getAction="infoDocPanel" getInfo={displayPanel} />
          </div>
        </div>
      </div>
    </div>
  )
};
export default Wall;
