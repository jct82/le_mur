export const UPDATE_DOC_PROPS = 'UPDATE_DOC_PROPS';
export const POST_LINK = 'POST_LINK';
export const DELETE_LINK = 'DELETE_LINK';
export const VIEW_DOC = 'VIEW_DOC';
export const EMPTY_FORM = 'EMPTY_FORM';

export const updateDocName = (name, prop) => ({
  type: UPDATE_DOC_PROPS,
  name: name,
  prop: prop,
});

export const postLink = (link) => ({
  type: POST_LINK,
  link: link,
});

export const deleteLink = (link) => ({
  type: DELETE_LINK,
  link: link,
});

export const viewDoc = (doc) => ({
  type: VIEW_DOC,
  doc: doc,
});

export const emptyForm = (doc) => ({
  type: EMPTY_FORM,
  doc: doc,  
})
