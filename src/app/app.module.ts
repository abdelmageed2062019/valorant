import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { GearsComponent } from './components/gears/gears.component';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GearsComponent,
    MapsComponent,
    NavbarComponent,
    WeaponsComponent,
    AgentsComponent,
    NotFoundComponent,
    FooterComponent,
    AgentDetailsComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
