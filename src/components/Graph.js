import React from 'react';
import Chart from 'react-apexcharts';

const Graph = () => {

  const options = {
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: '#d53a3a',
              fill: {
                  colors: ['#d53a3a', '#d53a3a']
              }
            }
          }
        },
        grid: {
          show: false
        },
        yaxis: {
          show: false
        },
        markers: {
          size: 0
        },
        stroke: {
          show: true,
          width: 0,
          colors: ['#141414'],
          dashArray: 0
        },
        fill: {
          colors: ['#141414'],
          opacity: .8
        },
        dataLabels: {
          style: {
            fontSize: '1.5rem',
            colors: ['gainsboro'],
            fontFamily: 'open-sans, sans-serif',
          },
        },
        tooltip: {
          enabled: false
        },
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            blur: 2,
            left: 1,
            top: 1
          },
        },
        labels: ['React', 'Javascript', 'HTML', 'Sass', 'Adobe', 'Jest', 'Redux', 'Jquery', 'Django', 'Python']
      }

    const series = [{
      data: [90, 80, 80, 80, 70, 60, 60, 60, 40, 20],
    }]

    return (
        <div className="graph">
          <span className="graph__title">Interesting Chart:</span>
          <Chart options={options} series={series} type="radar" height="400" width="400" />
        </div>
      );
    }

  export default Graph;