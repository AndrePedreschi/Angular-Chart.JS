import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {

    this.chart = new Chart("MyChart-1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: [['367','467'], '576', '572', ['79','99'], '92',
              '574', '573', '576'],
            backgroundColor: 'rgb(54, 162, 235)',
            order:1,
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'rgb(0,255,0)',
            order:2,
          },
          {
            label: "Evolução",
            type:"line",
            fill: false,
            borderColor: "black",
            data: ['327','327','327','327','327','327','327','327',],
            //backgroundColor: 'red',
            order: 0,
          },

        ]
      },
      options: {
        aspectRatio: 2.5,
        
        plugins: {
          title: {
              display: true,
              text: 'Gráfico misto',
          },
          
      }
      }

    });



    this.chart = new Chart("MyChart-2", {
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





  }
}
