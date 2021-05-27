import { MaintrendsComponent } from './maintrends/maintrends.component';

import { LinedashboardComponent } from './linedashboard/linedashboard.component';
import { CompplantComponent } from './compplant/compplant.component';
import { CompnameComponent } from './compname/compname.component';
import { CompanyComponent } from './company/company.component';
import { AlertsimageComponent } from './alertsimage/alertsimage.component';
import { MainprocesstempComponent } from './mainprocesstemp/mainprocesstemp.component';
import { PlantComponent } from './plant/plant.component';
import { ProcessComponent } from './process/process.component';
import { ProcesstempComponent } from './processtemp/processtemp.component';
import { ThingComponent } from './thing/thing.component';
import { ThingtempComponent } from './thingtemp/thingtemp.component';
import { ThingshapeComponent } from './thingshape/thingshape.component';
import { RoleComponent } from './role/role.component';
import { EmpComponent } from './emp/emp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { ProcessshapeComponent } from './processshape/processshape.component';
import { MachdashboardComponent } from './machdashboard/machdashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: 'emp',
    component: EmpComponent
  },

  {
    path: 'treands',
    component: MaintrendsComponent
  },
  {
    path: 'compplant',
    component: CompplantComponent
  },
  {
    path: 'lineconfig',
    component: LinedashboardComponent
  },
  {
    path: 'mechiconfig',
    component: MachdashboardComponent
  },
  {
    path: 'compname',
    component: CompnameComponent
  },

  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'company',
    component: RoleComponent
  },
  {
    path: 'dept',
    component: DeptComponent
  },

  {
    path: 'thingshape',
    component: ThingshapeComponent
  },

  {
    path: 'thingtemp',
    component: ThingtempComponent
  },
  {
    path: 'thing',
    component: ThingComponent
  },
  {
    path: 'mprocess',
    component: MainprocesstempComponent
  },
  {
    path: 'processhape',
    component: ProcessshapeComponent
  },
  {
    path: 'alertimg',
    component: AlertsimageComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },

  {
    path: 'processtemp',
    component: ProcesstempComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigsRoutingModule { }
