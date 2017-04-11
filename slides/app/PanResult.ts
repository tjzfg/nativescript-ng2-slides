/**
 * Created by Administrator on 2017/4/11.
 */
export  class PanResult{
    private _pEndTime=0;

    previousDeltaX:number;
    deltaX:number=0;
    deltaTime:number=0;
    speed:number=0;
    beginTime:number=0;
    /*get beginTime():number{
        return this._beginTime;
    }
    set beginTime(val:number){
        if(val-this.previousEndTime>500){
            this._beginTime=val;
            this.deltaX=0;
            this.deltaTime=0;
            this.speed=0;
        }
    }*/

    get previousEndTime():number{
        return this._pEndTime;
    }

    setResult(pX:number,pTime:number=-1){
        this.previousDeltaX=pX;
        this.deltaX=pX;
        if(pTime>0){
            this._pEndTime=pTime;

            this.deltaTime+=pTime-this.beginTime;
            if(this.deltaX!=0 && this.deltaTime!=0){
                this.speed=this.deltaX/this.deltaTime;
            }
            this.beginTime=0;
        }
    }

}