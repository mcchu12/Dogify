import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

// Angular Materials
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './shared/components/container/container.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// Services
import { BreedClassificationService } from './services/breed-classification.service';
import { BlogService } from './services/blog.service';
import { SidenavToggleService } from './services/sidenav-toggle.service';

// Others
import { BaseUrl } from './shared/constants';
import { CustomRouteReuse } from './shared/routeReuse';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRoute, faBone, faHome, faSuitcaseRolling, faPaw, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faGooglePlusSquare, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    BreedsComponent,
    BlogComponent,
    HeaderComponent,
    ContainerComponent,
    BlogArticleComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressBarModule,
    FontAwesomeModule,
  ],
  providers: [
    BreedClassificationService,
    BlogService,
    SidenavToggleService,
    {provide: RouteReuseStrategy, useClass: CustomRouteReuse},
    {provide: 'BaseUrl', useValue: BaseUrl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(
      faRoute, faBone, faHome, faSuitcaseRolling, faPaw, faArrowAltCircleRight,
      faFacebookSquare, faInstagram, faGooglePlusSquare, faYoutubeSquare, faTwitterSquare
    );
  }

 }
