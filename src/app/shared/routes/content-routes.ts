import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: "Dashboard"
    }
  },
  {
    path: 'base',
    loadChildren: () => import('../../components/base/base.module').then(m => m.BaseModule),
    data: {
      breadcrumb: "Base"
    }
  },

  {
    path: 'config',
    loadChildren: () => import('../../components/configs/configs.module').then(m => m.ConfigsModule),
    data: {
      breadcrumb: "Advance"
    }
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule),
    data: {
      breadcrumb: "Icons"
    }
  },






  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/to-do/to-do.module').then(m => m.ToDoModule),
    data: {
      breadcrumb: "To-do"
    }
  },



  {
    path: 'social-app',
    loadChildren: () => import('../../components/social-app/social-app.module').then(m => m.SocialAppModule),
    data: {
      breadcrumb: "Social-app"
    }
  },



  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/support-ticket/support-ticket.module').then(m => m.SupportTicketModule),
    data: {
      breadcrumb: "Support-Ticket"
    }
  },


  {
    path: 'search-result',
    loadChildren: () => import('../../components/search-result/search-result.module').then(m => m.SearchResultModule),
    data: {
      breadcrumb: "Search-Result"
    }
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
    data: {
      breadcrumb: "Sample-Page"
    }
  },
  {
    path: 'map',
    loadChildren: () => import('../../components/map/map.module').then(m => m.MapModule),
    data: {
      breadcrumb: "Map"
    }
  },
  {
    path: 'ui-elements',
    loadChildren: () => import('../../components/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
    data: {
      breadcrumb: "UI-Elements"
    }
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
    data: {
      breadcrumb: "Widgets"
    }
  },


  {
    path: 'to-do-firebase',
    loadChildren: () => import('../../components/to-do-firebase/to-do-firebase.module').then(m => m.ToDoFirebaseModule),
    data: {
      breadcrumb: "To-do"
    }
  },
];
