import { STATE } from "../../config/const";

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