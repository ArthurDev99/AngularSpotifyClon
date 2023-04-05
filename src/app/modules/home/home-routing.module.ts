import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';

const routes: Routes = [{
  path: 'dashboard',
  component: SidebarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
