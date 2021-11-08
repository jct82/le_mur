export const CHANGE_PANEL = 'CHANGE_PANEL';
export const TOGGLE_EYE = 'TOGGLE_EYE';
export const POST_USER = 'POST_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_DOC_PROPS = 'UPDATE_DOC_PROPS';
export const DISPLAY_MODE = 'DISPLAY_MODE';
export const REDIRECT_PDF = 'REDIRECT_PDF';
export const STORE_NEW_WALL = 'STORE_NEW_WALL';
export const DELETE_WALL_ACTION = 'DELETE_WALL_ACTION';
export const DELETE_WALL_FROM_STORE = 'DELETE_WALL_FROM_STORE';

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

export const displayMode = (displaysquare) => ({
  type: DISPLAY_MODE,
  displaysquare: displaysquare,
});

export const redirectPDF = () => ({
  type: REDIRECT_PDF,
});

export const storeNewWall = (wallData) => (
  { type: 'STORE_NEW_WALL', newWall: wallData.newWall, id:wallData.result.wall_id }
);

export const deleteWallAction = (wallId) => (
  { type: 'DELETE_WALL_ACTION', wallId }
);

export const deleteWallFromStore = (wallId) => (
  { type: 'DELETE_WALL_FROM_STORE', wallId }
)

