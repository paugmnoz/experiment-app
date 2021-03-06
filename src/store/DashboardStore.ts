import { observable, action, computed, flow } from 'mobx';

class DashboardStore {
  @observable atomList = [ '1A', '1B', '2A', '2B', '3A', '3B' ]
  //@observable atomList = [ '1B', '1A', '2B', '2A', '3B', '3A' ]
  @observable atomIndex = 0;
    @observable actualComponentData = { atom: '1A', duration: 0, clicks: 0}

    @observable atomClicks = 0;
    @observable actualAtom = '1A'
//    @observable actualAtom = '1B'
    @observable start = 0;
    @observable end = 0;
    @observable duration = 0;

    @observable isCounting = false;
    @observable data = Array()

    @action handleStart(atom:string) {
        this.start = performance.now();
        console.log(this.start)
        this.isCounting = true;
      }
    @action handleEnd(atom:string) {
        this.isCounting = false;
        this.data = this.data;
        this.actualComponentData = { atom:'', duration: 0, clicks: 0}

        this.end = performance.now();  

        let _atom:string = this.actualAtom;
        let _duration:number = (this.end - this.start)/1000
        let _clicks:number = this.atomClicks;
        this.data.push(this.actualComponentData = { atom: _atom, duration: _duration, clicks: _clicks})

        console.log('data', this.data)

      }
    @action handleNext(atom:string){
      this.atomIndex += 1;
      console.log(this.atomIndex)
      let temp_atom = this.atomList[this.atomIndex]
      this.actualAtom = temp_atom;
      console.log(this.actualAtom)
      this.start = 0;
      this.end = 0;
      this.duration = 0;
      this.atomClicks = 0;
      this.isCounting = false;
    }
}

export const dashboardStore = new DashboardStore();
