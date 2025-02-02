import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
