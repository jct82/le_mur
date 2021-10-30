export const storeWallInputValue = (name, value) => (
  { type: 'STORE_WALL_INPUT', name: name, value: value }
);

export const deleteCoworker = (user) => (
  { type: 'DELETE_COWORKER', user: user }
);

export const createWallAction = (picture) => (
  { type: 'CREATE_WALL', picture }
);
