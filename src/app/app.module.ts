import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { CarCategoryComponent } from '../components/header/car-category/car-category/car-category.component';
import { AdvertisingComponent } from '../components/advertising/advertising/advertising.component';
import { HomepageCategoryComponent } from '../components/home-page-category/homepage-category/homepage-category.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { SelectorCategoryComponent } from '../components/selector-category/selector-category.component';
import { PopularSearchesComponent } from '../components/popular-services/popular-services.component';
import { SearchesComponent } from '../components/searches/searches.component';
import { GetJobComponent } from '../components/get-job/get-job.component';
import { BusinessComponent } from '../components/business/business.component';
import { ServicesMenuComponent } from '../components/services-menu/services-menu.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarCategoryComponent,
    AdvertisingComponent,
    HomepageCategoryComponent,
    HomepageComponent,
    SelectorCategoryComponent,
    PopularSearchesComponent,
    SearchesComponent,
    GetJobComponent,
    BusinessComponent,
    ServicesMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
