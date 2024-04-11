import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
