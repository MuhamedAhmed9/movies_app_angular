import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { AuthreversedGuard } from './authreversed.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchComponent } from './search/search.component';
import { TvshowdetailsComponent } from './tvshowdetails/tvshowdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'movies',
    canActivate: [AuthGuard],
    component: MoviesComponent,
    title: 'movies',
  },
  {
    path: 'people',
    canActivate: [AuthGuard],
    component: PeopleComponent,
    title: 'actors',
  },
  {
    path: 'tv',
    canActivate: [AuthGuard],
    component: TvComponent,
    title: 'tv shows',
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    component: AboutComponent,
    title: 'about',
  },
  {
    path: 'network',
    canActivate: [AuthGuard],
    component: NetworkComponent,
    title: 'network',
  },
  //make lazy loading for settings module
  //lazy loading is done by using loadChildren
  //lazy loading is used to load the module only when it is needed
  //lazy loading is used to reduce the initial load time of the application
  //lazy loading is used to reduce the size of the bundle
  //lazy loading is useful in big applications
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'moviedetails/:id',
    canActivate: [AuthGuard],
    component: MoviedetailsComponent,
    title: 'movie details',
  },
  {
    path: 'tvdetails/:id',
    canActivate: [AuthGuard],
    component: TvshowdetailsComponent,
    title: 'tvshow details',
  },
  {
    path: 'actor/:id',
    canActivate: [AuthGuard],
    component: PersondetailsComponent,
    title: 'actor details',
  },
  {
    path: 'search/:term',
    canActivate: [AuthGuard],
    component: SearchComponent,
    title: 'search',
  },
  {
    path: 'login',
    canActivate: [AuthreversedGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [AuthreversedGuard],
    component: RegisterComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
