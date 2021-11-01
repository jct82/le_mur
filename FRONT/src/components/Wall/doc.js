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
      {doc.type== 'texte' && <div>{doc.urlSrc}</div>}
    </div>
  )
};
export default Doc;
