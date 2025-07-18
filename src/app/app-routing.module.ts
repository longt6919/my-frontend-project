import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component'; 
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./components/register/register.component";
//import { DetailProductComponent } from "./components/detail-product/detail-product.component";
//import { HeaderComponent } from "./components/header/header.component";
//import { FooterComponent } from "./components/footer/footer.component";
//import{ BannerComponent } from "./components/banner/banner.component";
//import { HomeComponent } from "./components/home/home.component";

const routes: Routes =[
{ path: 'login', component: LoginComponent },
{ path: 'register',component:RegisterComponent },
//{ path: 'detail-product',component:DetailProductComponent },
// { path: 'header',component:HeaderComponent },
// {path:'footer',component:FooterComponent},
// {path:'banner',component:BannerComponent},
// {path:'home',component: HomeComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}