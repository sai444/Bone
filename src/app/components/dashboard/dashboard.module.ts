import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import {MatCardModule} from '@angular/material/card';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { SelectPlantComponent } from './select-plant/select-plant.component';
import { PlantlineComponent } from './plantline/plantline.component';
import { PlantmachineComponent } from './plantmachine/plantmachine.component';

import { ChartModule } from 'angular-highcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PlanthomeComponent } from './planthome/planthome.component';
import { NoteboardComponent } from './noteboard/noteboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SparkLineComponent } from './plantmachine/spark-line/spark-line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LinemarkComponent } from './plantmachine/linemark/linemark.component';
import { PlantchartdataComponent } from './plantline/plantchartdata/plantchartdata.component';
import { Plantchart1dataComponent } from './plantline/plantchart1data/plantchart1data.component';
import { Plantchart2dataComponent } from './plantline/plantchart2data/plantchart2data.component';
import { Plantchart3dataComponent } from './plantline/plantchart3data/plantchart3data.component';
import { AiDrivenComponent } from './ai-driven/ai-driven.component';
import { PaneloneComponent } from './ai-driven/panelone/panelone.component';
import { PaneltwoComponent } from './ai-driven/paneltwo/paneltwo.component';
import { PanelthreeComponent } from './ai-driven/panelthree/panelthree.component';
import { PanelfourComponent } from './ai-driven/panelfour/panelfour.component';
import { StickyComponent } from './sticky/sticky.component';
import { LinemetaComponent } from './linemeta/linemeta.component';
import { MachmetaComponent } from './machmeta/machmeta.component';
import { ProfilehmetaComponent } from './profilehmeta/profilehmeta.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TrendsComponent } from './trends/trends.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    DefaultComponent,
    ECommerceComponent,
    UniversityComponent,
TrendsComponent,VideoPlayerComponent,
    ServerComponent,
    ProjectComponent, SelectPlantComponent, PlantlineComponent, PlantmachineComponent, PlanthomeComponent, NoteboardComponent, SparkLineComponent, LinemarkComponent, PlantchartdataComponent, Plantchart1dataComponent, Plantchart2dataComponent, Plantchart3dataComponent, AiDrivenComponent, PaneloneComponent, PaneltwoComponent, PanelthreeComponent, PanelfourComponent, StickyComponent, LinemetaComponent, MachmetaComponent, ProfilehmetaComponent
  ],
  imports: [ReactiveFormsModule,
    LeafletModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,

    ChartsModule,
    HighchartsChartModule,
    NgApexchartsModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    CountToModule,
    DashboardRoutingModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    SharedModule,
    NgxDatatableModule
  ],

})
export class DashboardModule { }
