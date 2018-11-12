import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './shared/components/container/container.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';

import { BreedClassificationService } from './services/breed-classification.service';
import { BlogService } from './services/blog.service';

import { BaseUrl } from './shared/constants';
import { RestangularConfigFatory } from './shared/restConfig';
import { RestangularModule } from 'ngx-restangular';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    RestangularModule.forRoot(RestangularConfigFatory)
  ],
  providers: [
    BreedClassificationService,
    BlogService,
    {provide: 'BaseUrl', useValue: BaseUrl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
