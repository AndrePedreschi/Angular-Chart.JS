import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
      plugins: [ChartDataLabels],
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
            borderRadius: 4,
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
              borderColor:'black',
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'end',
            offset:10,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
              // add linhas e verificar se o value é zero, se for add label "--"
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Receita total ${180950 + 15306}`,
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });





    this.chart = new Chart("VendasPorDiaDaSemana", {
      type: 'bar',


      data: {// values on X-Axis
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        datasets: [
          {
            data: ['0', '42689', '28901', '45765', '26022', '38367','4935'],
            backgroundColor: ['#AEAEB2','#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']

          },
        ],
      },
      plugins: [ChartDataLabels],
      
      options: {
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales:{
          x: {
            grid: {
              display: false,
              borderColor:'black',
              
            }
          },
          y: {
            
            
            //'https://www.google.com/search?q=dont+show+axys+chart+js&oq=dont+show+axys+chart+js&aqs=chrome..69i57j33i10i160l4.13643j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_bdEgY-blGJnI1sQP0-y6iA0_29'
            beginAtZero: true,
            ticks:{
              display: false
            },
            //display:false,
            grid: {
              display: true,
              drawTicks: false,
              drawOnChartArea:true,
              borderDash:[5],
              
              
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'top',
            offset:1,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Vendas por Dia da Semana',
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },

          /* subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          } */

        },
        
        
      }



    });
  };













  criarGraficosGastos() {

    this.chart = new Chart("GastosTotais", {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {// values on X-Axis
        labels: ['Recebido', 'A receber'],
        datasets: [
          {
            data: ['180950', '15306'],
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        elements: {
          bar: {
            borderRadius: 4,
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
              borderColor:'black',
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'end',
            offset:10,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
              // add linhas e verificar se o value é zero, se for add label "--"
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Gastos totais ${180950 + 15306}`,
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });





    this.chart = new Chart("GastosPorDiaDaSemana", {
      type: 'bar',


      data: {// values on X-Axis
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        datasets: [
          {
            data: ['0', '42689', '28901', '45765', '26022', '38367','4935'],
            backgroundColor: ['#AEAEB2','#C0D237', '#312564', '#794FF1', '#555A24', '#C6BBF4', '#B5C04E']

          },
        ],
      },
      plugins: [ChartDataLabels],
      
      options: {
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales:{
          x: {
            grid: {
              display: false,
              borderColor:'black',
              
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              borderDash:[5],
              
              
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'top',
            offset:1,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Gastos por Dia da Semana',
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },

          /* subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          } */

        },
        
        
      }



    });

  };














  criarGraficosConsolidados() {

    this.chart = new Chart("ReceitaTotal(A)", {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {// values on X-Axis
        labels: ['Recebido', 'A receber'],
        datasets: [
          {
            data: ['180950', '15306'],
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        elements: {
          bar: {
            borderRadius: 4,
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
              borderColor:'black',
            }
          },
          y: {
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'end',
            offset:10,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
              // add linhas e verificar se o value é zero, se for add label "--"
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `(A) RECEITA TOTAL: ${180950 + 15306}`,
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });





    this.chart = new Chart("ReceitaTotal(B)", {
      type: 'bar',
      plugins: [ChartDataLabels],
      data: {// values on X-Axis
        labels: ['Recebido', 'A receber'],
        datasets: [
          {
            data: ['180950', '15306'],
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        elements: {
          bar: {
            borderRadius: 4,
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
              borderColor:'black',
            }
          },
          y: {
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels:{
            anchor:'end',
            align:'end',
            offset:10,
            formatter: function(value){
              if(value == 0){
                return '--'
              }else{
                return value
              }
            }
            /* formatter: function(value) {
              return 'line1\nline2\n' + value;
              // eq. return ['line1', 'line2', value]
              // add linhas e verificar se o value é zero, se for add label "--"
            } */
            //formatter: (value, context)=>context.dataIndex === 2 ? value: '0'
            /* https://www.youtube.com/watch?v=OJH9R0vX7uY&ab_channel=ChartJS */
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `(B) RECEITA TOTAL: ${180950 + 15306}`,
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },
            font:{
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });
  };




}
