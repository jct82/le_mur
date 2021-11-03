import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Doc from './doc';
import { arrayMove } from 'react-sortable-hoc';
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import './style.scss';

const SortablePhoto = SortableElement(item => <Doc key={item.id} {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));


const Docs = ( {docs, user, getAction, getInfo} ) => {

  const tabDoc = []
  for (const doc of docs) {
    tabDoc.push({...doc, user: user, getAction: getAction, getInfo: getInfo, src:'', width:2, height:3});
  }

  // const [items, setItems] = useState(photos);
  // console.log(items);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    tabDoc = arrayMove(items, oldIndex, newIndex);
  };
 
  return (
    <div>
      <SortableGallery items={tabDoc} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  )
};

export default Docs;
