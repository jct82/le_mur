import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Form from '../RegisterForm/Form';
import Button from '../RegisterForm/Button';
import './styles.scss';
import { populateLoggedInfosIFLogged } from '../../actions/users';


const Home = () => {
  // const dispatch = useDispatch();
  // if(localStorage.name) {
  //   const name = localStorage.name;
  //   const lastname = localStorage.lastname;
  //   const userId = localStorage.userId;
  //   dispatch(populateLoggedInfosIFLogged(name, lastname, userId));
  // }
  // on bloque si le user n'est pas loggedIn
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="home">
      {logged && <Redirect to="/walls" />}
      <div className="white-triangle"></div>
      <div className="left_container">
        <div className="inner_container">
          <h1 className="app_title">LE <br></br> MUR.</h1>
          <div className="presentation">
          <div className="triangle"></div>
            <h2 className="page_title">Un espace de travail collaboratif</h2>
            <p className="app_resume">Le Mur est un espace de mise en commum d'idées visuelles qui vise à reproduire à distance l'expérience physique de la rencontre entre plusieurs créatifs, qui épingleraient sur un mur des images d'inspiration.</p>

            <blockquote className="citation">
              <p className></p>
              <p className="citationTexte">"La vraie collaboration, c'est quand l'idée ne peut plus être attribué à une seule personne."</p></blockquote>
            <figcaption className="citation_author">Simon Sinek</figcaption>
          </div>
        </div>
      </div>

      <div className="right_container">
        <Button />
      </div>
    </div>

  )
};
export default Home;
