import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component'; 
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./components/register/register.component";
import { DetailProductComponent } from "./components/detail-product/detail-product.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import{ BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";
import { OrderComponent } from "./components/order/order.component";    
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { OrderedProductComponent } from "./components/ordered-product/ordered-product.component";
import { OrderHistoryComponent } from "./components/order-history/order-history.component";

const routes: Routes =[
{ path: 'login', component: LoginComponent },
{ path: 'register',component:RegisterComponent },
{ path: 'detail-product',component:DetailProductComponent },
{ path: 'header',component:HeaderComponent },
{path:'footer',component:FooterComponent},
{path:'banner',component:BannerComponent},
{path:'home',component: HomeComponent},
{path: 'order', component: OrderComponent },
{path: 'user-profile', component: UserProfileComponent },
{path:'ordered-product', component: OrderedProductComponent },  
{path: 'order-history', component: OrderHistoryComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}