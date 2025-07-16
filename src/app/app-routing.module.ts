import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

const routes: Routes =[



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}