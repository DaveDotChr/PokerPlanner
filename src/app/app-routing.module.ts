import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/Overview/Overview.component';
import { PlanningComponent } from './components/Planning/Planning.component';

const routes: Routes = [{path: "components/Planning", component: PlanningComponent},
                        {path: "components/Overview", component: OverviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
