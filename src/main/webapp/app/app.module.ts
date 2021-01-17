import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ProjectsOverviewSharedModule } from 'app/shared/shared.module';
import { ProjectsOverviewCoreModule } from 'app/core/core.module';
import { ProjectsOverviewAppRoutingModule } from './app-routing.module';
import { ProjectsOverviewHomeModule } from './home/home.module';
import { ProjectsOverviewEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { ContactComponent } from './about-us/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    ProjectsOverviewSharedModule,
    ProjectsOverviewCoreModule,
    ProjectsOverviewHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ProjectsOverviewEntityModule,
    ProjectsOverviewAppRoutingModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    ContactComponent,
  ],
  bootstrap: [MainComponent],
})
export class ProjectsOverviewAppModule {}
