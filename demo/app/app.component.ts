import {Component, ViewChild} from "@angular/core";
import {ScrollView} from "ui/scroll-view";
import {PanGestureEventData} from "ui/gestures";
import * as platform from 'platform';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    pageWidth=platform.screen.mainScreen.widthDIPs;
    nums=[9,10];
    ngAfterViewInit(){
        if(!this.scroll) return;
        let _scroll:ScrollView=this.scroll.nativeElement;
        _scroll.android.requestDisallowInterceptTouchEvent(false);
        _scroll.on("pan",(args:PanGestureEventData)=>{
            console.log("scrollView:"+args.state);
        })
        console.log("enabled scroll gesture");
    }
    public counter: number = 16;
    @ViewChild("scroll") scroll;
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
