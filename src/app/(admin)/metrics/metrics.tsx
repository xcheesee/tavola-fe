'use client'
import { Bar, Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,

    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useQuery } from "@tanstack/react-query";
import { getCategoriaTotais, getCategoriaVendas, getReceitaTotais, getVendasTotais } from "@/utils/api/produtos";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export default function Metrics() {
    const receitaTotais = useQuery({
        queryKey: ['receitaTotais'],
        queryFn: () => getReceitaTotais(),
    })

    const vendidoTotais = useQuery({
        queryKey: ['vendidoTotais'],
        queryFn: () => getVendasTotais()
    })
    const categoriaTotais = useQuery({
        queryKey: ['categoriaTotais'],
        queryFn: () => getCategoriaTotais()
    })
    const categoriaVendas = useQuery({
        queryKey: ['categoriaVendas'],
        queryFn: () => getCategoriaVendas()
    })
    const vendidoLabels = vendidoTotais?.data?.map( (entry: any) => entry.produto)
    const vendidoVals = vendidoTotais?.data?.map( (entry: any) => entry.pedidos)
    const receitaLabels = receitaTotais?.data?.map( (entry: any) => entry.nomeDoProduto)
    const receitaVals = receitaTotais?.data?.map( (entry: any) => entry.valorTotalVendido)
    const catTotaisLabel = categoriaTotais?.data?.map( (entry: any) => entry.categoria.nome )
    const catTotais = categoriaTotais?.data?.map( (entry: any) => entry.valorTotal )
    const catVendasLabel = categoriaVendas?.data?.map( (entry: any) => entry.categoria.nome)
    const catVendas = categoriaVendas?.data?.map( (entry: any) => entry.quantidadeTotalPedidos)
    return(
        <div className="flex flex-col gap-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl pb-4">Vendas por Produto</h2>
                <div className="h-[300px] w-full">
                    <Bar 
                        data={{
                            labels: vendidoLabels,
                            datasets: [{
                                label: "Nro. Vendas",
                                data: vendidoVals,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(255, 159, 64, 0.5)',
                                    'rgba(255, 205, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                ],
                                borderColor: [
                                  'rgb(255, 99, 132)',
                                  'rgb(255, 159, 64)',
                                  'rgb(255, 205, 86)',
                                  'rgb(75, 192, 192)',
                                  'rgb(54, 162, 235)',
                                  'rgb(153, 102, 255)',
                                  'rgb(201, 203, 207)'
                                ],
                                borderWidth: 2,
                                borderRadius: 10
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
                            labels: receitaLabels,
                            datasets: [{
                                label: "R$",
                                data: receitaVals,
                                backgroundColor: [
                                    'rgba(255, 205, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)',
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(255, 159, 64, 0.5)',
                                ],
                                borderColor: [
                                  'rgb(255, 205, 86)',
                                  'rgb(75, 192, 192)',
                                  'rgb(54, 162, 235)',
                                  'rgb(153, 102, 255)',
                                  'rgb(201, 203, 207)',
                                  'rgb(255, 99, 132)',
                                  'rgb(255, 159, 64)',
                                ],
                                borderWidth: 2,
                                borderRadius: 10
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
            <div className="flex gap-4">

            <div className="card w-1/2 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl pb-4">Receita Por Categoria</h2>
                <div className="h-[300px] w-full">
                    <Pie 
                        data={{
                            labels: catTotaisLabel,
                            datasets: [{
                                label: "R$",
                                data: catTotais,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(255, 159, 64, 0.5)',
                                    'rgba(255, 205, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                ],
                                borderColor: [
                                  'rgb(255, 99, 132)',
                                  'rgb(255, 159, 64)',
                                  'rgb(255, 205, 86)',
                                  'rgb(75, 192, 192)',
                                  'rgb(54, 162, 235)',
                                  'rgb(153, 102, 255)',
                                  'rgb(201, 203, 207)'
                                ],
                                borderWidth: 2,
                                //borderRadius: 10
                            }]
                        }} 
                        //options={{
                        //    scales: {
                        //        y: {
                        //            beginAtZero: true
                        //        }
                        //    },
                        //    maintainAspectRatio: false
                        //}}
                    />
                </div>
              </div>
            </div>
            <div className="card w-1/2 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl pb-4">Vendas Por Categoria</h2>
                <div className="h-[300px] w-full">
                    <Pie 
                        data={{
                            labels: catVendasLabel,
                            datasets: [{
                                label: "Un",
                                data: catVendas,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(255, 159, 64, 0.5)',
                                    'rgba(255, 205, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                ],
                                borderColor: [
                                  'rgb(255, 99, 132)',
                                  'rgb(255, 159, 64)',
                                  'rgb(255, 205, 86)',
                                  'rgb(75, 192, 192)',
                                  'rgb(54, 162, 235)',
                                  'rgb(153, 102, 255)',
                                  'rgb(201, 203, 207)'
                                ],
                                borderWidth: 2,
                                //borderRadius: 10
                            }]
                        }} 
                        //options={{
                        //    scales: {
                        //        y: {
                        //            beginAtZero: true
                        //        }
                        //    },
                        //    maintainAspectRatio: false
                        //}}
                    />
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}