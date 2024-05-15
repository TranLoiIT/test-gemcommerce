// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface PropsChartPie {
//     dataChart: number[],
//     labels?: string[],
//     titleTooltip?: string,
//     backgroundColor: string[],
// }

// const ChartPie: React.FC<PropsChartPie> = ({
//     dataChart = [],
//     labels = [],
//     titleTooltip = '',
//     backgroundColor = []
// }) => {

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: titleTooltip,
//                 data: dataChart,
//                 backgroundColor,
//             },
//         ],
//       };

//     const options = {
//         elements: {
//             arc: {
//               borderWidth: 0
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false,
//             },
//             colors: {
//                 forceOverride: true
//             },
//             tooltips: {
//                 callbacks: {
//                     label: function(tooltipItem: any) {
//                         return tooltipItem.yLabel;
//                     }
//                 }
//             },
//         },
//     }

//     return (
//         <div className='h-[220px] w-[220px]'>
//             <Pie data={data} options={options} />
//         </div>
//     );
// }

// export default ChartPie;
