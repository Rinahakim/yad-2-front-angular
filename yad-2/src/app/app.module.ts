import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
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
import { LoginComponent } from '../pages/login/login.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { LoginBackgroundComponent } from '../components/login-background/login-background.component';
import { CarCategoryComponent } from '../components/header/car-category/car-category/car-category.component';
import { Yad2CategoryComponent } from '../components/header/yad2-category/yad2-category.component';
import { JobsCategoryComponent } from '../components/header/jobs-category/jobs-category.component';
import { BusinessCategoryComponent } from '../components/header/business-category/business-category.component';
import { AnimalsCategoryComponent } from '../components/header/animals-category/animals-category.component';
import { ProfessionalsCategoryComponent } from '../components/header/professionals-category/professionals-category.component';
import { RealEstateCategoryComponent } from '../components/header/real-estate-category/real-estate-category.component';
import { ApartmentsForRentComponent } from '../pages/apartments-for-rent/apartments-for-rent.component';
import { SearchApartmentComponent } from '../components/search-apartment/search-apartment.component';
import { ApartmentPage2Component } from '../components/apartment-page2/apartment-page2.component';

import { ApartmentServiceService } from '../services/apartment-service.service';
import { AuthenticationService } from '../services/authentication.service';

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
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    LoginBackgroundComponent,
    Yad2CategoryComponent,
    JobsCategoryComponent,
    BusinessCategoryComponent,
    AnimalsCategoryComponent,
    ProfessionalsCategoryComponent,
    RealEstateCategoryComponent,
    ApartmentsForRentComponent,
    SearchApartmentComponent,
    ApartmentPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    ApartmentServiceService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
