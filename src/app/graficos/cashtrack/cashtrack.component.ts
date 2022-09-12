import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cashtrack',
  templateUrl: './cashtrack.component.html',
  styleUrls: ['./cashtrack.component.scss']
})
export class CashtrackComponent implements OnInit {

  public chart: any;

  constructor() { }

  ngOnInit(): void {

    this.criarGraficosVendas();
    this.criarGraficosGastos();
    this.criarGraficosConsolidados();
  }


  criarGraficosVendas() {
    this.chart = new Chart("ReceitaTotal", {
      type: 'bar',

      data: {// values on X-Axis
        labels: ['Recebido', 'A receber'],
        datasets: [
          {
            data: ['180950', '15306'],
            backgroundColor: ['#312564', '#555A24']

          },
        ],
      },
      options: {
        elements: {
          bar: {
            borderRadius: 10,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'y',
        responsive: true,
        scales:{
          x: {
            grid: {
              display: true,
              borderDash:[5],
              //drawBorder: true,
              //drawOnChartArea: true,
              //drawTicks: true,
            }
          },
          y: {
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Receita total ${180950 + 15306}`,
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
          }

        }
      }

    });
  };













  criarGraficosGastos() {

  };














  criarGraficosConsolidados() {

  };




}
