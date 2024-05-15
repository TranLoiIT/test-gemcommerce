import React, { ReactNode } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface PropsFontStyleChart {
    size: number,
    weight: string
}

interface PropsChartArea {
    labels: string[],
    data: number[],
    colorChart?: string,
    minScale?: number,
    maxScale?: number,
    step?: number,
    datasetsCustom?: object,
    fontStyleX?: PropsFontStyleChart,
    fontStyleY?: PropsFontStyleChart,
    colorLabels?: string,
    colorLineGrid?: string,
}

const ChartArea: React.FC<PropsChartArea> = ({
    labels,
    data,
    colorChart = '0, 100, 255',
    datasetsCustom = {},
    minScale = 0,
    maxScale = 1000,
    step = 4,
    fontStyleX = {
        size: 14,
        weight: '400',
    },
    fontStyleY = {
        size: 14,
        weight: '400',
    },
    colorLabels = 'rgba(84, 89, 106, 1)',
    colorLineGrid = 'rgba(188, 214, 235, 1)',
}) =>  {
    const dataChart = {
        labels,
        datasets: [
            {
                data,
                fill: "start",
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx || {};
                    const chartArea = context.chart?.chartArea
                    const gradient = ctx.createLinearGradient(0, chartArea?.top || 0, 0, chartArea?.bottom || 320);
                    //step change background color
                    //scale - step size = 0.2
                    for (let index = 0; index < 4; index++) {
                        gradient.addColorStop(index * 0.25, `rgba(${colorChart}, ${1-(0.35*index)})`);
                    }
                    return gradient;
                },
                borderColor: `rgba(${colorChart}, 1)`,
                borderWidth: 2,
                pointBackgroundColor: `rgba(${colorChart}, 0)`,
                ...datasetsCustom
            },
        ],
    };

    // Chart options
    const options = {
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: true,
                    drawBorder: false,
                    tickColor: '#FFF',
                },
                border:{
                    display: false,
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    color: colorLabels,
                    font: fontStyleX,
                },
            },
            y: {
                grid: {
                    drawBorder: true,
                    color: colorLineGrid,
                    drawOnChartArea: true,
                    lineWidth: 1,
                    drawTicks: true,
                    tickColor: '#FFF',
                },
                border:{
                    display:false
                },
                beginAtZero: true,
                min: minScale,
                max: maxScale,
                ticks: {
                    stepSize: () => maxScale/step,
                    color: colorLabels,
                    font: fontStyleY,
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            colors: {
                forceOverride: true
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem: any) {
                        return tooltipItem.yLabel;
                    }
                }
            },
        },
        elements:{
            point:{
                radius: 0,
            }
        }
    };

    return (
        <Line data={dataChart} options={options} />
    );
}

export default ChartArea;