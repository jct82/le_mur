export const CHANGE_PANEL = 'CHANGE_PANEL';
export const TOGGLE_EYE = 'TOGGLE_EYE';

export const changePanel = (panel) => ({
  type: CHANGE_PANEL,
  panel: panel,
});

export const toggleEye = (detailed) => ({
  type: TOGGLE_EYE,
  detailed: detailed
});
