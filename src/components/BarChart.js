import { Bar } from "react-chartjs-2";
// import { BarElement,  CategoryScale,Legend, LinearScale,Title, Tooltip } from "chart.js";
import { Chart as ChartJS } from 'chart.js/auto'


const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };
  
  const data = {
    labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun",'July','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: "Product A",
        data: [ 20, 30, 40, 50, 60,70,30,20,10,30,20,10,],
        backgroundColor: "green",
      },
      {
        label:'Product B',
        data: [ 20, 30, 40, 50, 60,70,30,20,10,30,20,10,],
        backgroundColor:'blue'
      },
  
    ],
  
  };
  
  export default function App() {
    return (
      <div className="App">
        <Bar options={option} data={data} />
      </div>
    );
  }