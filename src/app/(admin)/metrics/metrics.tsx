'use client'
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Metrics() {
    return(
        <div className="flex flex-col gap-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl pb-4">Vendas por Produto</h2>
                <div className="h-[300px] w-full">
                    <Bar 
                        data={{
                            labels: ['pog', 'champ'],
                            datasets: [{
                                label: "Nro. Vendas",
                                data: [22,13],
                            }]
                        }} 
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
              </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl pb-4">Receita por Produto</h2>
                <div className="h-[300px] w-full">
                    <Bar 
                        data={{
                            labels: ['pog', 'champ'],
                            datasets: [{
                                label: "R$",
                                data: [22,13],
                            }]
                        }} 
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
              </div>
            </div>
        </div>
    )
}