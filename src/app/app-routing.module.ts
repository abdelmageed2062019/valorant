import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GearsComponent } from './components/gears/gears.component';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'gears', component: GearsComponent, title: 'gears' },
  { path: 'maps', component: MapsComponent, title: 'maps' },
  { path: 'weapons', component: WeaponsComponent, title: 'weapons' },
  { path: 'agents', component: AgentsComponent, title: 'agents' },
  { path: 'agentDetails/:id', component: AgentDetailsComponent, title: 'agents' },

  { path: '**', component: NotFoundComponent, title: 'notfound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
