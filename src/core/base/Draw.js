import { foreachDrawMaker, syncDrawMaker, reduceSyncDrawMaker } from './drawMaker';

class Draw {
  constructor(interval, drawFunc, ...drawArgs) {
    this.initDrawMethods(interval, drawFunc, ...drawArgs);

    this.makeDrawInfoList = this.makeDrawInfoList.bind(this);
  }

  initDrawMethods = (interval, drawFunc, ...drawArgs) => {
    // draw at the same time
    this.foreachDraw = foreachDrawMaker(drawFunc, ...drawArgs);

    // draw one by one
    this.syncDrawFunc = syncDrawMaker(interval, drawFunc);
    this.reduceSyncDraw = reduceSyncDrawMaker(this.syncDrawFunc, ...drawArgs);
  }

  /* **************************************************************** */
  /* Abstract functions
  /* Override this function to create drawInfo for drawFunc
  /* **************************************************************** */
  makeDrawInfoList() { throw new Error('makeDrawInfoList is not Implemented!!'); }
  /* *******************End of Abstract functions******************* */

  drawBase = (sync = true, ...makeDrawInfoListArgs) => {
    const dotsCenterCordList = this.makeDrawInfoList(...makeDrawInfoListArgs);

    if (sync) {
      dotsCenterCordList.reduce((this.reduceSyncDraw), Promise.resolve());
    } else {
      dotsCenterCordList.forEach(this.foreachDraw);
    }
  }

  drawSync = (...makeDrawInfoListArgs) => {
    this.drawBase(true, ...makeDrawInfoListArgs);
  }

  draw = (...makeDrawInfoListArgs) => {
    this.drawBase(false, ...makeDrawInfoListArgs);
  }
}

export default Draw;
