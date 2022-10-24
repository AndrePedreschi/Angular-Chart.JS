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
    const canvasBackgroundColor = {
      id: 'canvasBackgroundColor',
      beforeDraw: (chart: any) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#FAFAFF';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };


    const quebraDeLinha = {  
      id: 'quebraDeLinha',
        beforeInit: function (chart: any) {
          chart.data.labels.forEach(function (value:any, index:any, array:any) {
            var a = [];
            a.push(value.slice(0, 11));
            var i = 1;
            while (value.length > (i * 11)) {
              a.push(value.slice(i * 11, (i + 1) * 11));
              i++;
            }
            array[index] = a;
          })
        }
    }



    //Gráfico =  Receita Total
    let dadosReceitaTotal = ['180950', '15306'];
    let labelsReceitaTotal = ['Recebido', 'A receber'];
    this.chart = new Chart("ReceitaTotal", {
      type: 'bar',
      plugins: [ChartDataLabels, canvasBackgroundColor],

      data: {// values on X-Axis
        labels: labelsReceitaTotal,
        datasets: [
          {
            data: dadosReceitaTotal,
            backgroundColor: ['#312564', '#555A24']

          },
        ],
      },
      options: {

        layout: {
          padding: {
            right: 50,
            left: 20,
            top: 20,
            bottom: 20,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: true,
              borderDash: [4],
              borderColor: '#000000',
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
            },

          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },

          },

        },
        plugins: {

          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 10,
            /* font: {
              lineHeight:10 ,
            } , */
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                //console.log(Number(value).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }));
                return Number(value).toLocaleString('pt-BR')

              } else {
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
            text: `Receita total: ${(180950 + 15306).toLocaleString('pt-BR')}`,
            font: {
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
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }

      }

    });



    //Gráfico =  Vendas por dia da semana
    let dadosVendasPorDiaDaSemana = ['0', '42689', '28901', '45765', '26022', '38367', '4935'];
    let labelsVendasPorDiaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
    this.chart = new Chart("VendasPorDiaDaSemana", {
      type: 'bar',
      data: {// values on X-Axis
        labels: labelsVendasPorDiaDaSemana,
        datasets: [
          {
            data: dadosVendasPorDiaDaSemana,
            backgroundColor: ['#AEAEB2', '#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']
          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor],

      options: {

        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {


            //'https://www.google.com/search?q=dont+show+axys+chart+js&oq=dont+show+axys+chart+js&aqs=chrome..69i57j33i10i160l4.13643j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_bdEgY-blGJnI1sQP0-y6iA0_29'
            beginAtZero: true,
            ticks: {
              display: false
            },
            //display:false,
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],


            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            /* font: {
              lineHeight:10 ,
            } , */
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                //console.log(Number(value).toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' }));
                //return ` ${100}%\n`+Number(value).toLocaleString('pt-BR')
                return Number(value).toLocaleString('pt-BR')

              } else {
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
            text: 'Vendas por Dia da Semana',
            font: {
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





    //Gráfico =  Melhores clientes
    let dadosMelhoresClientes = [78502, 58877, 39251, 19626]
    let labelsMelhoresClientes = ['Pedro', 'João', 'Maria', 'Joana'];
    let totalMelhoresClientes = dadosMelhoresClientes.reduce((acumulador: any, numero: any) => {
      return acumulador + numero;
    })
    this.chart = new Chart("MelhoresClientes", {
      type: 'bar',
      data: {
        labels: labelsMelhoresClientes,
        datasets: [
          {
            data: dadosMelhoresClientes ,
            backgroundColor: ['#AEAEB2', '#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']
          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],

      options: {

        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return ` ${((value / totalMelhoresClientes) * 100).toFixed(0)}%\n` + Number(value).toLocaleString('pt-BR')
              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Melhores Clientes',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },
        },
      }
    });




    
    //Gráfico =  Vendas por linha de Receita
    let dadosVendasPorLinhasDeReceita = [12295, 16932, 1345, 3840, 10121, 151723]; 
    let labelsVendasPorLinhasDeReceita = ['Caixa Manhã', 'Caixa Tarde', 'Encomenda', 'Entre empresas (Check up)', 'Ifood', 'Recebimento Cartão'];
    let totalVendasPorLinhasDeReceita = dadosVendasPorLinhasDeReceita.reduce((acumulador: any, numero: any) => {
      return acumulador + numero;
    })
    this.chart = new Chart("VendasporLinhaDeReceita", {
      type: 'bar',
      data: {
        labels: labelsVendasPorLinhasDeReceita, 
        datasets: [
          {
            data: dadosVendasPorLinhasDeReceita, 
            backgroundColor: ['#AEAEB2', '#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']
          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],

      options: {

        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return `   ${((value / totalVendasPorLinhasDeReceita) * 100).toFixed(0)}%\n` + Number(value).toLocaleString('pt-BR')
              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Vendas por Linha de Receita',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },
        },
      }
    });




  };













  criarGraficosGastos() {
    //plugins criados
    const canvasBackgroundColor = {
      id: 'canvasBackgroundColor',
      beforeDraw: (chart: any) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#FAFAFF';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    const quebraDeLinha = {
      
      id: 'quebraDeLinha',
        beforeInit: function (chart: any) {
          chart.data.labels.forEach(function (value:any, index:any, array:any) {
            var a = [];
            a.push(value.slice(0, 11));
            var i = 1;
            while (value.length > (i * 11)) {
              a.push(value.slice(i * 11, (i + 1) * 11));
              i++;
            }
            array[index] = a;
          })
        }
    }





    //Gráfico =  Gastos totais
    let dadosGastosTotais = ['180950', '15306'];
    let labelsGastosTotais = ['Recebido', 'A receber'];
    this.chart = new Chart("GastosTotais", {
      type: 'bar',
      plugins: [ChartDataLabels, canvasBackgroundColor],
      data: {// values on X-Axis
        labels: labelsGastosTotais,
        datasets: [
          {
            data: dadosGastosTotais,
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 50,
            left: 20,
            top: 20,
            bottom: 20,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: true,
              borderDash: [5],
              borderColor: '#000000',
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
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Gastos totais ${(180950 + 15306).toLocaleString('pt-BR')}`,
            font: {
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
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });



    

    //Gráfico = Gastos por dia da Semana
    let dadosGastosPorDiaDaSemana = ['0', '42689', '28901', '45765', '26022', '38367', '4935'];
    let labelsGastosPorDiaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    this.chart = new Chart("GastosPorDiaDaSemana", {
      type: 'bar',


      data: {// values on X-Axis
        labels: labelsGastosPorDiaDaSemana,
        datasets: [
          {
            data: dadosGastosPorDiaDaSemana,
            backgroundColor: ['#AEAEB2', '#C0D237', '#312564', '#794FF1', '#555A24', '#C6BBF4', '#B5C04E']

          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor],


      options: {
        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],


            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Gastos por Dia da Semana',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },
        },
      }
    });




    //Gráfico = Maiores fornecedores
    let dadosMelhoresClientes = [78502, 58877, 39251, 19626]
    let totalMelhoresClientes = dadosMelhoresClientes.reduce((acumulador: any, numero: any) => {
      return acumulador + numero;
    })
    this.chart = new Chart("MaioresFornecedores", {
      type: 'bar',
      data: {
        labels: ['Pedro', 'João', 'Maria', 'Joana'],
        datasets: [
          {
            data: dadosMelhoresClientes ,
            backgroundColor: ['#AEAEB2', '#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']
          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],

      options: {

        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '#000000',
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return ` ${((value / totalMelhoresClientes) * 100).toFixed(0)}%\n` + Number(value).toLocaleString('pt-BR')
              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Maiores Fornecedores',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },
        },
      }
    });




    //Gráfico = Maiores gastos
    let dadosVendasPorLinhasDeReceita = [12295, 16932, 1345, 3840, 10121, 151723];
    let totalVendasPorLinhasDeReceita = dadosVendasPorLinhasDeReceita.reduce((acumulador: any, numero: any) => {
      return acumulador + numero;
    })
    this.chart = new Chart("MaioresGastos", {
      type: 'bar',
      data: {
        labels: ['Caixa Manhã', 'Caixa Tarde', 'Encomenda', 'Entre empresas (Check up)', 'Ifood', 'Recebimento Cartão'], //Tenho que passar esses dados
        datasets: [
          {
            data: ['12295', '16932', '1345', '3840', '10121', '151723'], //Tenho que passar esses dados
            backgroundColor: ['#AEAEB2', '#312564', '#9C88EE', '#555A24', '#C0D237', '#C6BBF4', '#E8ECB6']
          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],

      options: {

        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              display: false
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return `   ${((value / totalVendasPorLinhasDeReceita) * 100).toFixed(0)}%\n` + Number(value).toLocaleString('pt-BR')
              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Maiores Gastos',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 25,
            },
          },
        },
      }
    });





  };














  criarGraficosConsolidados() {
    const canvasBackgroundColor = {
      id: 'canvasBackgroundColor',
      beforeDraw: (chart: any) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#FAFAFF';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    const quebraDeLinha = {
      
      id: 'quebraDeLinha',
        beforeInit: function (chart: any) {
          chart.data.labels.forEach(function (value:any, index:any, array:any) {
            var a = [];
            a.push(value.slice(0, 11));
            var i = 1;
            while (value.length > (i * 11)) {
              a.push(value.slice(i * 11, (i + 1) * 11));
              i++;
            }
            array[index] = a;
          })
        }
    }


    //Gráfico = ReceitaTotal(A)
    let dadosReceitaTotalA = ['180950', '15306'];
    let labelsReceitaTotalA = ['Recebido', 'A receber'];
    this.chart = new Chart("ReceitaTotal(A)", {
      type: 'bar',
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],
      data: {
        labels: labelsReceitaTotalA,
        datasets: [
          {
            data: dadosReceitaTotalA,
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 50,
            left: 20,
            top: 20,
            bottom: 20,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: true,
              borderDash: [5],
              borderColor: '	#000000',
            }
          },
          y: {
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `(A) RECEITA TOTAL: ${(180950 + 15306).toLocaleString('pt-BR')}`,
            font: {
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
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });




    //Gráfico = ReceitaTotal(B)
    let dadosReceitaTotalB = ['180950', '15306'];
    let labelsReceitaTotalB = ['Recebido', 'A receber'];
    this.chart = new Chart("ReceitaTotal(B)", {
      type: 'bar',
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],
      data: {// values on X-Axis
        labels: labelsReceitaTotalB,
        datasets: [
          {
            data: dadosReceitaTotalB,
            backgroundColor: ['#C0D237', '#794FF1']

          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 50,
            left: 20,
            top: 20,
            bottom: 20,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: {
            grid: {
              display: true,
              borderDash: [5],
              borderColor: '#000000',
            }
          },
          y: {
            grid: {
              display: false,
            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `(B) RECEITA TOTAL: ${(180950 + 15306).toLocaleString('pt-BR')}`,
            font: {
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
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }

    });




    //Gráfico = Saldo(A-B)
    /* this.chart = new Chart("Saldo(A-B)", {
      type: 'bar',


      data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            data: [[46433, -23378],[46569,-12800],[48815,-10000],[36295,-5000],[22243,-3000]],
            backgroundColor: ['#AEAEB2', '#C0D237' , '#312564', '#794FF1', '#555A24', '#C6BBF4', '#B5C04E']

          },
        ],
      },
      plugins: [ChartDataLabels, canvasBackgroundColor, quebraDeLinha],


      options: {
        layout: {
          padding: {
            right: 30,
            left: 30,
            top: 30,
            bottom: 30,
          }
        },
        elements: {
          bar: {
            borderRadius: 4,
          }
        },
        aspectRatio: 1.5,
        indexAxis: 'x',
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            suggestedMin: 0,
            grid: {
              display: false,
              borderColor: '	#000000',
            }
          },
          y: {
            beginAtZero: true,
            suggestedMin: 0,
            ticks: {
              display: true
            },
            grid: {
              display: true,
              drawTicks: false,
              color: 'rgba(0, 0, 0, 0.2)',
              drawOnChartArea: true,
              borderDash: [4],


            }
          },
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 1,
            formatter: function (value) {
              if (value == 0) {
                return '--'
              }
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Saldo(A-B): ${0}`,

            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 5,
            },
          },
          subtitle:{
            display: true,
            text: `(${'Redução de X em relação ao mês anterior'})`,
            font: {
              size: 12,
              weight: 'bold',
              family: 'Arial',
            },
            padding: {
              bottom: 35,
            },
          },
        },
      }
    }); */




  };




}
