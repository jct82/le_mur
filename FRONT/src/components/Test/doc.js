import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { viewDoc } from 'src/actions/element.js'
import { toggleEye } from 'src/actions/wall.js'

import './style.scss';


const imgWithClick = { cursor: "pointer" };

const Doc = ({ index, onClick, photo, margin, direction, top, left }) => {
  const dispatch = useDispatch();
  const detailed = useSelector((state) => state.wall.detailed);

  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }
  console.log('onClick',onClick);

  const handleClick = event => {
    console.log('rrrr');
    onClick(event, { photo, index });
  };

  const checkClick = () => {
    console.log('tttttt');

  }

  return (
    <div className={photo.ownerId == photo.user ? "doc owned" : "doc"} style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle} onClick={onClick ? handleClick : null} >
      {photo.id == detailed && <div className="see-btn" panel={photo.getAction} ></div>}
      {photo.type== 'image' && <img src={photo.urlSrc} alt={photo.name}/>}
      {photo.type== 'texte' && <div className="doc-txt">{photo.urlSrc}</div>}
    </div>
  );
};

export default Doc;
