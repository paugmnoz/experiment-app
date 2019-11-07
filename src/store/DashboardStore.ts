import { observable, action, computed, flow } from 'mobx';

class DashboardStore {
  @observable atomList = Array();
  //@observable atomList = [ '1B', '1A', '2B', '2A', '3B', '3A' ]
  @observable atomIndex = 0;
  @observable actualComponentData = { atom: '1A', duration: 0, clicks: 0, mousePos: Array() }

  @observable atomClicks = 0;
  @observable actualAtom = '';
  @observable start = 0;
  @observable end = 0;
  @observable duration = 0;
  @observable displayWheelAtom = false;
  @observable isCounting = false;
  @observable data = Array();
  possibleArrays = [
    ['1B', '1A', '2A', '2B', '3A', '3B'],
    ['1A', '1B', '2B', '2A', '3B', '3A'],
    ['3A', '3B', '1A', '1B', '2A', '2B'],
    ['3B', '3A', '1A', '1B', '2B', '2A'],
    ['2A', '2B', '3A', '3B', '1A', '1B'],
    ['2B', '2A', '3B', '3A', '1B', '1A'],
    ['1B', '1A', '2A', '2B', '3A', '3B'],
    ['1A', '1B', '2B', '2A', '3B', '3A'],
    ['3A', '3B', '1A', '1B', '2A', '2B'],
    ['3B', '3A', '1A', '1B', '2B', '2A'],
    ['2A', '2B', '3A', '3B', '1A', '1B'],
    ['2B', '2A', '3B', '3A', '1B', '1A']
  ]
  
  constructor() {
    let index = Math.floor((Math.random() * 12))
    console.log(index, 'random')
    this.atomList = this.possibleArrays[index]
    this.actualAtom = this.atomList[0]
    if (this.actualAtom === '1B') { this.displayWheelAtom = true }
  }
  @observable mousePosArray = Array();

  @action setMousePos(x: any, y: any) {
    if (this.isCounting) {
      this.mousePosArray.push({ mouseX: x, mouseY: y });
      //console.log('x', x);
      //console.log(this.mousePosArray)
    }
  }

  @action handleStart(atom: string) {
    this.start = performance.now();
    console.log(this.start)
    this.isCounting = true;
  }

  @action handleEnd(atom: string) {
    this.isCounting = false;
    this.data = this.data;
    this.actualComponentData = { atom: '', duration: 0, clicks: 0, mousePos: this.mousePosArray }

    this.end = performance.now();

    let _atom: string = this.actualAtom;
    let _duration: number = (this.end - this.start) / 1000
    let _clicks: number = this.atomClicks;
    this.data.push(this.actualComponentData = { atom: _atom, duration: _duration, clicks: _clicks, mousePos: this.mousePosArray })
    console.log('data', this.data)

  }

  @action setWheelDisplay() {
    this.displayWheelAtom = true;
  }
  @action handleNext(atom: string) {

    this.atomIndex += 1;
    console.log(this.atomIndex)
    let temp_atom = this.atomList[this.atomIndex]
    this.actualAtom = temp_atom;
    if (this.actualAtom === '1B') {
      console.log('')
    } else {
      this.displayWheelAtom = false;
    }
    this.start = 0;
    this.end = 0;
    this.duration = 0;
    this.atomClicks = 0;
    this.mousePosArray = [];
    this.isCounting = false;
  }
  @action shuffleAtoms() {
    let index = (Math.random() * 7)
    this.atomList = this.possibleArrays[index]
  }
}

export const dashboardStore = new DashboardStore();
