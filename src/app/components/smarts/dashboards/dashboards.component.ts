import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})


export class DashboardsComponent implements OnInit {
  cards = [10, 12, 14, 66, 22, 666]


  constructor() {
  }

  ngOnInit(): void {

  }



}
