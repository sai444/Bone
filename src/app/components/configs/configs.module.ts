import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigsRoutingModule } from './configs-routing.module';
import { ConfigsComponent } from './configs.component';
import { EmpComponent } from './emp/emp.component';
import { RoleComponent } from './role/role.component';
import { DeptComponent } from './dept/dept.component';
import { ThingtempComponent } from './thingtemp/thingtemp.component';
import { ThingComponent } from './thing/thing.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { ProcesstempComponent } from './processtemp/processtemp.component';
import { ProcessComponent } from './process/process.component';
import { CompanyComponent } from './company/company.component';
import { ThingshapeComponent } from './thingshape/thingshape.component';
import { ProcessshapeComponent } from './processshape/processshape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlxUiDatatableModule,FlxUiDataTable } from 'flx-ui-datatable' ;
import { MatMenuModule } from '@angular/material/menu';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubthingshapeComponent } from './thingshape/subthingshape/subthingshape.component'; // <-- import the module
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridsterModule } from 'angular-gridster2';
import { PlantComponent } from './plant/plant.component';
import { DashboardsComponent } from './plant/dashboards/dashboards.component';
import { BoardconfigComponent } from './boardconfig/boardconfig.component';
import { MainprocesstempComponent } from './mainprocesstemp/mainprocesstemp.component';
import { AlertsimageComponent } from './alertsimage/alertsimage.component';
import { AlertsimgconfigComponent } from './alertsimgconfig/alertsimgconfig.component';
import { MachineprofileComponent } from './machineprofile/machineprofile.component';
import { CompnameComponent } from './compname/compname.component';
import { CompplantComponent } from './compplant/compplant.component';
import { LinedashboardComponent } from './linedashboard/linedashboard.component';
import { MachdashboardComponent } from './machdashboard/machdashboard.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { MaintrendsComponent } from './maintrends/maintrends.component';
import { Treand1Component } from './maintrends/treand1/treand1.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { Treand2Component } from './maintrends/treand2/treand2.component';
import { Treand3Component } from './maintrends/treand3/treand3.component';
import { Treand4Component } from './maintrends/treand4/treand4.component';
@NgModule({
  declarations: [ConfigsComponent, EmpComponent, RoleComponent, DeptComponent, ThingtempComponent, ThingComponent, ProcesstempComponent,
    ProcessComponent, CompanyComponent, ThingshapeComponent, ProcessshapeComponent, SubthingshapeComponent, PlantComponent, DashboardsComponent, BoardconfigComponent, MainprocesstempComponent, AlertsimageComponent, AlertsimgconfigComponent, MachineprofileComponent, CompnameComponent, CompplantComponent, LinedashboardComponent, MachdashboardComponent, MaintrendsComponent, Treand1Component, Treand2Component, Treand3Component, Treand4Component],
  imports: [
    GridsterModule,
    CommonModule,
    DragDropModule,
    ConfigsRoutingModule,
    NgApexchartsModule,
    NgSelectModule,

    NgxPaginationModule,
    DragulaModule.forRoot(),
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    Ng2SearchPipeModule ,
    MatToolbarModule,
    FlxUiDatatableModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ]
  ,
  providers:[
    FlxUiDataTable
  ]
})
export class ConfigsModule { }
