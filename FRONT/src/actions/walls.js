export const storeWallPictureAction = (picture) => (
  { type: 'STORE_WALL_PREVIEW_PICTURE', picture: picture}
);

export const storeWallInputValue = (name, value) => (
  { type: 'STORE_WALL_INPUT', name: name, value: value }
);

export const createWallAction = () => (
  { type: 'CREATE_WALL' }
);
