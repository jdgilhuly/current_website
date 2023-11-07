import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component"
import {AboutComponent} from "./components/about/about.component"
import {DesignComponent} from "./components/design/design.component"
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component"
import {BlogComponent} from "./components/blog/blog.component"

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path:"about", component: AboutComponent},
  {path:"design", component: DesignComponent},
  {path:"blog", component:BlogComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
