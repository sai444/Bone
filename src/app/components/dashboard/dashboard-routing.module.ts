import { StickyComponent } from './sticky/sticky.component';
import { MachineprofileComponent } from './../configs/machineprofile/machineprofile.component';
import { NoteboardComponent } from './noteboard/noteboard.component';
import { PlanthomeComponent } from './planthome/planthome.component';
import { PlantlineComponent } from './plantline/plantline.component';
import { SelectPlantComponent } from './select-plant/select-plant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';

import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { PlantmachineComponent } from './plantmachine/plantmachine.component';
import { AlertsimgconfigComponent } from '../configs/alertsimgconfig/alertsimgconfig.component';
import { AiDrivenComponent } from './ai-driven/ai-driven.component';
import { MachmetaComponent } from './machmeta/machmeta.component';
import { LinemetaComponent } from './linemeta/linemeta.component';
import { ProfilehmetaComponent } from './profilehmeta/profilehmeta.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: SelectPlantComponent,
        data: {
          title: "Plant",
          breadcrumb: "Plant"
        }
      },
      {
        path: 'metaprofile',
        component: ProfilehmetaComponent,
        data: {
          title: "Meta Profile",
          breadcrumb: "Meta Profile"
        }
      },
      {
        path: 'metaline',
        component: LinemetaComponent,
        data: {
          title: "Mach Profile",
          breadcrumb: "Mach Profile"
        }
      },
      {
        path: 'trends',
        component: TrendsComponent,
        data: {
          title: "Trends",
          breadcrumb: "Trends"
        }
      },
      {
        path: 'metamech',
        component: MachmetaComponent,
        data: {
          title: "Mach Profile",
          breadcrumb: "Mach Profile"
        }
      },
      {
        path: 'aidriven',
        component: AiDrivenComponent,
        data: {
          title: "AI Driven Line",
          breadcrumb: "AI on Line"
        }
      },

      {
        path: 'alertconf',
        component: AlertsimgconfigComponent,
        data: {
          title: "alertconf",
          breadcrumb: "alertconf"
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: "E-commerce",
          breadcrumb: "E-commerce"
        }
      },
      {
        path: 'note',
        component: NoteboardComponent,
        data: {
          title: "note",
          breadcrumb: "note"
        }
      },
      {
        path: 'plantselect',
        component: SelectPlantComponent,
        data: {
          title: "Plant",
          breadcrumb: "Plant"
        }
      },
      {
        path: 'planthome',
        component: PlanthomeComponent,
        data: {
          title: "Home",
          breadcrumb: "Home"
        }
      },
      {
        path: 'sticky',
        component: StickyComponent,
        data: {
          title: "Home",
          breadcrumb: "Home"
        }
      },
      {
        path: 'plantline',
        component: PlantlineComponent,
        data: {
          title: "Plant Line",
          breadcrumb: "Plant Line"
        }
      },
      {
        path: 'plantmach',
        component: PlantmachineComponent,
        data: {
          title: "Plant Machine",
          breadcrumb: "Plant Machine"
        }
      },
      {
        path: 'university',
        component: UniversityComponent,
        data: {
          title: "University",
          breadcrumb: "University"
        }
      },

      {
        path: 'server',
        component: ServerComponent,
        data: {
          title: "Server",
          breadcrumb: "Server"
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
