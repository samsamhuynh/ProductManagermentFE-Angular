import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";

import { LayoutsComponent } from "./layouts.component";
import { HeaderModule } from "./header/header.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [LayoutsComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    HeaderModule,
  ],
  exports: [
    LayoutsComponent,
    SidebarComponent,
    FooterComponent,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
  ],
})
export class LayoutsModule {}
