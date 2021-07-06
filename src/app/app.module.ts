import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NetworkPageComponent } from './components/network-page/network-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { FriendListPageComponent } from './components/friend-list-page/friend-list-page.component';
import { OrderComponent } from './components/order/order.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/shared/cart/cart.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { OrderStatusComponent } from './components/tracking/order-status/order-status.component';
import { AddressComponent } from './components/settings-page/address/address.component';
import { PaymentComponent } from './components/settings-page/payment/payment.component';
import { SearchPipe } from './pipes/search.pipe';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'friends', component: FriendListPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'network', component: NetworkPageComponent },
  { path: 'order', component: OrderComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'address', component: AddressComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'cart', component: OrderDetailComponent },
  { path: 'tracking/:id', component: OrderStatusComponent },
  { path: '**', component: PageNotFoundComponent }
  //,{ path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard] },

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    NetworkPageComponent,
    SettingsPageComponent,
    FriendListPageComponent,
    OrderComponent,
    TrackingComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CartComponent,
    OrderDetailComponent,
    OrderStatusComponent,
    AddressComponent,
    PaymentComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
