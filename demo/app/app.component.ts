import {Component, ViewChild} from "@angular/core";
import {ScrollView} from "ui/scroll-view";
import {PanGestureEventData} from "ui/gestures";
import * as platform from 'platform';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(){
        setTimeout(()=>this.nums=[8,6,4,2,1],5)
    }
    pageWidth=platform.screen.mainScreen.widthDIPs;
    nums=[9,10];
    ngAfterViewInit(){
        
    }
    ngAfterContentChecked(){
        
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
