import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { Page404Component } from "./components/page404/page404.component";

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    Page404Component,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: Page404Component,
      }
    ])
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ],
})

export class CoreModule {}
