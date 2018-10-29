import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PageContentComponent } from './shared/components/page-content/page-content.component';

import { BreedClassificationService } from './services/breed-classification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    BreedsComponent,
    BlogComponent,
    HeroComponent,
    HeaderComponent,
    PageContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  exports: [
    MatIconModule
  ],
  providers: [
    BreedClassificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
