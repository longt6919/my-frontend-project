import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentCallbackComponent } from './components/payment-callback/payment-callback.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



@NgModule({
  declarations: [
  
    DetailProductComponent,
       FooterComponent,
       HeaderComponent,
       HomeComponent,
       LoginComponent,
       OrderComponent,
       PaymentCallbackComponent,
       RegisterComponent,
       UserProfileComponent
  ],
  imports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
