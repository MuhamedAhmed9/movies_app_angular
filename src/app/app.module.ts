import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { WatchPipe } from './watch.pipe';
import { SlicepartPipe } from './slicepart.pipe';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { TvshowdetailsComponent } from './tvshowdetails/tvshowdetails.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    MoviedetailsComponent,
    WatchPipe,
    SlicepartPipe,
    SearchPipe,
    SearchComponent,
    TvshowdetailsComponent,
    PersondetailsComponent,
    AboutComponent,
    NetworkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
