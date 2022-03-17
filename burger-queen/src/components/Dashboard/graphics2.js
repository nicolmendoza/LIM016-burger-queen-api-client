import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from "chart.js";
import { Doughnut  } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);


export default function StatusChart({rankingStatus}) {
  console.log(rankingStatus)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useMemo(function () {
    const labels2=rankingStatus.map(x=>x.nombre)
    const scores2=rankingStatus.map(x=>x.numero)
    console.log( labels2)
    return {
      datasets: [
        {
          label: "Status Ranking",
          tension: 0.3,
          data: rankingStatus.map(x=>x.numero),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        },
      ],
      labels:rankingStatus.map(x=>x.nombre),

    };
  }, []);

  return (
    <div className="App" style={{width:'250px'}}>
    <Doughnut data={data}/>
    </div>
  );
}