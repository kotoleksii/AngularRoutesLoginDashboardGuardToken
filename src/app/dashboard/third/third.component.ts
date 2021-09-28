import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import HPie from 'highcharts/modules/variable-pie';

HPie(Highcharts);

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})

export class ThirdComponent {

  Highcharts = Highcharts;
  public chart: Highcharts.Chart | undefined;
  public chartOptions ={};

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'variablepie'
      },
      accessibility: {
        description: 'A variable radius pie chart'
      },
      title: {
        text: 'Countries compared by population density and total area.'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Population density (people per square km): <b>{point.z}</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        data: [{
          name: 'Spain',
          y: 505370,
          z: 92.9
        }, {
          name: 'France',
          y: 551500,
          z: 118.7
        }, {
          name: 'Poland',
          y: 312685,
          z: 124.6
        }, {
          name: 'Czech Republic',
          y: 78867,
          z: 137.5
        }, {
          name: 'Italy',
          y: 301340,
          z: 201.8
        }, {
          name: 'Switzerland',
          y: 41277,
          z: 214.5
        }, {
          name: 'Germany',
          y: 357022,
          z: 235.6
        }]
      }]
    }
  }
}
