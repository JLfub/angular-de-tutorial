import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        AppComponent
    ],
    providers: [],
})
export class AppModule { }
