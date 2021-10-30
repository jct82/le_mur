export const storeWallInputValue = (name, value) => (
  { type: 'STORE_WALL_INPUT', name: name, value: value }
);

export const createWallAction = (picture) => (
  { type: 'CREATE_WALL', picture }
);
