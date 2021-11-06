export const UPDATE_CONTENT = 'UPDATE_CONTENT';

export const updateContents = (contents, delta) => ({
  type: UPDATE_CONTENT,
  contents:contents,
  delta, delta,
});
