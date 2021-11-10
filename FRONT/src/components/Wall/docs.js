import { useState } from "react";
import Gallery from "react-photo-gallery";
import Doc from './doc';
import { arrayMove } from 'react-sortable-hoc';
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import './style.scss';

const SortablePhoto = SortableElement((item)  => <Doc {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={ props => {
    return <SortablePhoto index={props.index} {...props} />
  }  } />
));

const Docs = ( {docs, user, getAction, getInfo} ) => {

  const [items, setItems] = useState(docs);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
 
  return (
    <div className="board">
      <SortableGallery distance={2} items={docs.map((doc) => ({...doc, user: user, getAction: getAction, getInfo: getInfo}))} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  )
};

export default Docs;
