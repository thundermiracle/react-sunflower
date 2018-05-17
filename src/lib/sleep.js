const sleep = (millisec) => {
  return new Promise(resolve => setTimeout(resolve, millisec));
};

export const sleepMaker = (interval = 50) => {
  return (func) => {
    return sleep(interval).then(func);
  };
};

export const sleep10 = sleepMaker(10);
export const sleep50 = sleepMaker();

export default sleep;
