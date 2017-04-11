// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import trace=require("trace");
trace.enable();
trace.addCategories("tns-ng2-slides");
platformNativeScriptDynamic().bootstrapModule(AppModule);
