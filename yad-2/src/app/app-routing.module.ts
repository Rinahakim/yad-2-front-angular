import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { ApartmentsForRentComponent } from '../pages/apartments-for-rent/apartments-for-rent.component';
import { AccountComponent } from '../pages/account/account.component';
import { AccountListComponent } from '../components/account-list/account-list.component';
import { PublishingPageComponent } from '../pages/publishing-page/publishing-page.component';
import { AdTypeSelectionPageComponent } from '../pages/ad-type-selection-page/ad-type-selection-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'apartments-for-rent', component: ApartmentsForRentComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account-list', component: AccountListComponent},
  {path: 'publishing-page', component: PublishingPageComponent},
  {path: 'publish-private-post', component: AdTypeSelectionPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
