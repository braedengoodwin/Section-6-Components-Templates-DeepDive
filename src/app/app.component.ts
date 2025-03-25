import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './dashboard/server-status/status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent
],
})
export class AppComponent {}
