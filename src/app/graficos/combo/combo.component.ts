import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {

    this.chart = new Chart("Mix-1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: [['367', '467'], '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'rgb(54, 162, 235,0.5)'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'rgb(0,255,0,0.5)'
          },
          {
            label: "Evolução",
            type: "line",
            fill: false,
            borderColor: "black",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            //backgroundColor: 'red'
          },

        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Gráfico misto'
          }
        }
      }

    });

    this.chart = new Chart("Mix-2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },


      options: {
        aspectRatio: 2.5
      }

    });

    this.chart = new Chart("Mix-3", {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          backgroundColor: 'green'
        }, {
          label: 'Line Dataset',
          data: [50, 50, 50, 50],
          type: 'line',
          borderColor: 'blue'
        }],
        labels: ['January', 'February', 'March', 'April']
      },
    });

    this.chart = new Chart("Mix-4", {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          backgroundColor: 'green',
          order: 2
        }, {
          label: 'Line Dataset',
          data: [20, 20, 20, 20],
          type: 'line',
          borderColor: 'blue',
          order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
      },
    });

    this.chart = new Chart("Mix-5", {
      type: 'line',
      data: {
        datasets: [{
          label: 'Line 1',
          data: [10, 20, 30, 40],
          backgroundColor: 'green',
          yAxisID: 'first-y-axis'
        }, {
          label: 'Line 2',
          data: [20, 20, 20, 20],
          backgroundColor: 'blue',
          yAxisID: 'second-y-axis'
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        responsive: true,
        scales: {
          'first-y-axis':{
            type: 'linear'
          },
          'second-y-axis':{
            type: 'linear'
          }
        
          /* yAxes: [{
            id: 'first-y-axis',
            type: 'linear'
          }, {
            id: 'second-y-axis',
            type: 'linear'
          }] */
        }


      },
      
    });

    this.chart = new Chart("Mix-6", {
      type: 'line',
      data: {
        datasets: [{
          data: [10, 20, 30, 40, 50, 60]
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June']
      },
      options: {
        scales: {
          /* xAxes: [{
            ticks: {
              min: 'March'
            }
          }] */
        }
      }
    });

    this.chart = new Chart("Mix-7", {
      type: 'line',
      data: {
        datasets: [{
          label: 'First dataset',
          data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          /* yAxes: [{
            ticks: {
              suggestedMin: 50,
              suggestedMax: 100
            }
          }] */
        }
      }
    });





  }

}
