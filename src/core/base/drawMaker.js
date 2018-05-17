import { sleepMaker } from 'lib/sleep';

export const syncDrawMaker = (interval, drawFunc) => (...args) => {
  return sleepMaker(interval)(drawFunc(...args));
};

export const reduceSyncDrawMaker = (syncDrawFunc, ...args) => {
  return (prevPromise, drawInfo) => {
    return prevPromise.then(() => syncDrawFunc(...args, drawInfo));
  };
};

export const foreachDrawMaker = (drawFunc, ...args) => {
  return (drawInfo) => {
    drawFunc(...args, drawInfo);
  };
};
