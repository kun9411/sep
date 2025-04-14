import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SEPHeaderComponent} from './sepheader/sepheader.component';
import {SepbottomComponent} from './sepbottom/sepbottom.component';
import {StudentFormComponent} from './student-form/student-form/student-form.component';
import {FormsModule} from "@angular/forms";
import {StudentListComponent} from './student-list/student-list/student-list.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {StudentServiceService} from "./Service/student-service.service";
import {StudentSearchComponent} from './student-search/student-search.component';
import {TSAufgabenComponent} from './tsaufgaben/tsaufgaben.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import {LineChartModule, PieChartModule} from "@swimlane/ngx-charts";

@NgModule({ declarations: [
        AppComponent,
        SEPHeaderComponent,
        SepbottomComponent,
        StudentFormComponent,
        StudentListComponent,
        StudentSearchComponent,
        TSAufgabenComponent,
        LinechartComponent,
        PiechartComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule, PieChartModule, LineChartModule], providers: [StudentServiceService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
