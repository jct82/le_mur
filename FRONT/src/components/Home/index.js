import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import subscribe from 'src/assets/icons/subscribe.png';
import science from 'src/assets/icons/science.png';
import share from 'src/assets/icons/share.png';
import Button from '../RegisterForm/Button';
import './styles.scss';

const Home = () => {
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="home">
      {logged && <Redirect to="/walls" />}
      <div className="left_container">
        <div className="inner_container">
          <h1 className="app_title">LE <br /> MUR.</h1>
          <div className="white-triangle" />
          <div className="separator">
            <div className="triangle" />
            <hr />
          </div>
          <div className="presentation">
            <p className="app_resume">Le Mur est un espace de mise en commun d'idées visuelles qui vise à reproduire à distance
              l'expérience physique de la rencontre entre plusieurs créatifs
            </p>
            <div className="steps">
              <div>
                <div className="steps__step  subscribe">
                  <img className="steps__icon" src={subscribe} alt="subscribe" />
                </div>
                <p>INSCRIPTION</p>
              </div>
              <div className="gg-shape-triangle" />
              <div>
                <div className="steps__step create">
                  <img className="steps__icon" src={science} alt="create"/>
                </div>
                <p>CREATION</p>
              </div>
              <div className="gg-shape-triangle" />
              <div>
                <div className="steps__step share">
                  <img className="steps__icon" src={share} alt="share" />
                </div>
                <p>PARTAGE</p>
              </div>
            </div>
            <blockquote className="citation">
              <p className="citationTexte">"La vraie collaboration, c'est quand l'idée ne peut plus être attribué à une seule personne."</p>
            </blockquote>
            <figcaption className="citation_author">Simon Sinek</figcaption>
          </div>
        </div>
      </div>

      <div className="right_container">
        <Button />
      </div>
    </div>

  );
};
export default Home;
