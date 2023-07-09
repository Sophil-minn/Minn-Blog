
export const STATE = {
  WAIT_ONLINE: 'WAIT_ONLINE',
  NEW: 'NEW',
  HOT: 'HOT'
};
export const STATE_TEXT = {
  WAIT_ONLINE: 'WAIT',
  NEW: 'NEW',
  HOT: 'HOT'
};

export  const clsMap: Record<string, string> = {
  [STATE.WAIT_ONLINE]: 'wait_online',
  [STATE.HOT]: 'hot',
  [STATE.NEW]: 'new',
};
export const colorMap: Record<string, string> = {
  [STATE.WAIT_ONLINE]: 'gold',
  [STATE.HOT]: 'red',
  [STATE.NEW]: 'green',
};
