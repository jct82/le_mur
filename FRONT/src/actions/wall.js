export const UPDATE_DOC_PROPS = 'UPDATE_DOC_PROPS';
export const POST_LINK = 'POST_LINK';

export const updateDocName = (name, prop) => ({
  type: UPDATE_DOC_PROPS,
  name: name,
  prop: prop,
});

export const postLink = (link) => ({
  type: POST_LINK,
  link: link,
});
