import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

import { SlidesModule } from 'nativescript-ng2-slides';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, SlidesModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
