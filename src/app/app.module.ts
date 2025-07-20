import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule,Routes } from '@angular/router'; 
import{AppRoutingModule } from './app-routing.module'; 
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component'; 
import { HttpClientModule } from '@angular/common/http';
import { OrderedProductComponent } from './components/ordered-product/ordered-product.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { EditUserInfoComponent } from './components/edit-user-info/edit-user-info.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent,BannerComponent,HomeComponent,FooterComponent,OrderedProductComponent,OrderComponent,UserProfileComponent, OrderHistoryComponent,OrderHistoryComponent, UserMenuComponent, EditUserInfoComponent  ],
  imports: [BrowserModule,
    AppRoutingModule,//
    CommonModule,HttpClientModule
  ],
  exports: [EditUserInfoComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
