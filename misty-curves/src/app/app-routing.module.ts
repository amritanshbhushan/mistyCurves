import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { AiPlannerComponent } from './pages/ai-planner/ai-planner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'ai-planner', component: AiPlannerComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
