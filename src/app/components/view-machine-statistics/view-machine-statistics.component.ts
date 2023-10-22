import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-view-machine-statistics',
  templateUrl: './view-machine-statistics.component.html',
  styleUrls: ['./view-machine-statistics.component.css']
})
export class ViewMachineStatisticsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  machines: any
  machineFrequency: any; 
  isLoading:boolean = true
  barChartLabels: string[] = [];
  barChartData: any[] = [];
  barChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true
  };

  constructor(private ptService: PersonalTrainerService) {}

  ngOnInit() {
    this.isLoading = true
    this.ptService.getGymMachines().subscribe((data: any) => {
      this.machines = Object.keys(data).map((key)=>{ return data[key]})
    });
    this.ptService.getMachinesUsage().subscribe((data: any) => {
      this.machineFrequency = new Map(Object.entries(data));
      console.log(this.machineFrequency)
      this.prepareBarChartData();
    });
  }

  prepareBarChartData() {
    this.machineFrequency.delete('-1')
    this.barChartLabels = Array.from(this.machineFrequency.keys())
      .map((machineId: any) => {
        const machine = this.machines.find((m: { id: any; }) => m.id === parseInt(machineId));
        return machine ? machine.name : 'N/A';
      });

    this.barChartData.push({
      data: Array.from(this.machineFrequency.values()),
      label: 'Frequency'
    });
    this.isLoading = false
  }
}
