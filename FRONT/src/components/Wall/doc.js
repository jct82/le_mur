import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { viewDoc } from 'src/actions/element.js'
import { toggleEye } from 'src/actions/wall.js'

import './style.scss';

const Doc = ( {doc, user, getAction, getInfo} ) => {
  const dispatch = useDispatch();
  const detailed = useSelector((state) => state.wall.detailed);

  const posterEye = () => {
    doc.id == detailed ? dispatch(toggleEye(-1)) : dispatch(toggleEye(doc.id));
  }

  const seeDoc = (e) => {
    dispatch(viewDoc(doc));
    getInfo(e);
  }
 
  return (
    <div className={doc.ownerId == user ? "doc owned" : "doc"} >
      {doc.id == detailed && <div className="see-btn" panel={getAction} onClick={seeDoc}></div>}
      {doc.type== 'image' && <img src={doc.urlSrc} alt={doc.name} onClick={posterEye}/>}
      {doc.type== 'texte' && <div className="doc-txt">{doc.urlSrc}</div>}
    </div>
  )
};

Doc.propTypes = {
  doc: PropTypes.shape({
    id: PropTypes.number.isRequired,
    urlSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.number.isRequired,
  getInfo: PropTypes.func.isRequired,
  getAction: PropTypes.string.isRequired,
};
export default Doc;
