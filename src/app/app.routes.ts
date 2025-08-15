import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminSettingsComponent } from './pages/admin-settings/admin-settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogsActivityComponent } from './pages/log-activity/log-activity.component';
import { MultiDbConnectionComponent } from './pages/multi-db-connection/multi-db-connection.component';
import { QueryExecutionComponent } from './pages/query-execution/query-execution.component';
import { QueryExecutionMultiComponent } from './pages/query-execution-multi/query-execution-multi.component';
import { QueryHistoryComponent } from './pages/query-history/query-history.component';
import { ResultComparisonComponent } from './pages/result-comparison/result-comparison.component';
import { SavedQueriesComponent } from './pages/saved-queries/saved-queries.component';
import { SingleDbConnectionComponent } from './pages/single-db-connection/single-db-connection.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'adminSettings',
        component:AdminSettingsComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        // canActivate:[AuthGuard]
    },
    {
        path:'logActivity',
        component:LogsActivityComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'multiDBConnection',
        component:MultiDbConnectionComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'queryExecution',
        component:QueryExecutionComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'queryExecutionMulti',
        component:QueryExecutionMultiComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'queryHistory',
        component:QueryHistoryComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'resultComparison',
        component:ResultComparisonComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'savedQueries',
        component:SavedQueriesComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'singleDbConnection',
        component:SingleDbConnectionComponent,
        canActivate:[AuthGuard]
    },
    {
        path:'**',
        component:LoginComponent,
        canActivate:[AuthGuard]
    }
];
