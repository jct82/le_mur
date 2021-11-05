export const CHANGE_PANEL = 'CHANGE_PANEL';
export const TOGGLE_EYE = 'TOGGLE_EYE';
export const POST_USER = 'POST_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_DOC_PROPS = 'UPDATE_DOC_PROPS';

export const changePanel = (panel) => ({
  type: CHANGE_PANEL,
  panel: panel,
});

export const toggleEye = (detailed) => ({
  type: TOGGLE_EYE,
  detailed: detailed
});

export const postUser = (user) => ({
  type: POST_USER,
  users: user,
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  user: user,
});

export const updateDocName = (name, prop) => ({
  type: UPDATE_DOC_PROPS,
  name: name,
  prop: prop,
});

export const storeNewWall = (wallData) => (
  { type: 'STORE_NEW_WALL', newWall: wallData.newWall }
);

export const deleteWallAction = (wallId) => (
  { type: 'DELETE_WALL_ACTION', wallId }
);
