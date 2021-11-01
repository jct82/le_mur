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
export default Docs;
