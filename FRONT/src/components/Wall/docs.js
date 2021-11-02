import PropTypes from 'prop-types';
import Doc from './doc';

import './style.scss';

const Docs = ( {docs, user, getAction, getInfo} ) => {

  const docListJSX = docs.map((doc) => (
    <Doc
      key={doc.id}
      doc={doc}
      user={user}
      getAction={getAction}
      getInfo={getInfo}
    />
  ));
 
  return (
    <div>
      {docListJSX}
    </div>
  )
};

Docs.propTypes = {
  docs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  user: PropTypes.number.isRequired,
  getInfo: PropTypes.func.isRequired,
  getAction: PropTypes.string.isRequired,
};
export default Docs;
