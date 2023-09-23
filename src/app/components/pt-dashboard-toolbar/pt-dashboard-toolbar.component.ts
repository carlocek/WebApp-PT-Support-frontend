import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pt-dashboard-toolbar',
  templateUrl: './pt-dashboard-toolbar.component.html',
  styleUrls: ['./pt-dashboard-toolbar.component.css']
})

export class PtDashboardToolbarComponent {
  @Input() isDashboard: any
  @Input() personalTrainer: any
}
