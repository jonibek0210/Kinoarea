import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Chart: React.FC<any> = (props) => {
   const { voteAverage } = props

   ChartJS.register(ArcElement, Tooltip, Legend);
   let a = voteAverage?.toFixed(1)
   let b = 10

   let c = a - b
   const data = {
      labels: [],
      datasets: [
         {
            labe: '5000',
            data: [a, c],
            backgroundColor: ['green', '#d3080070'],
            border: 'black',
            borderColor: 'transparent'
         }
      ]
   }

   const options = {}

   const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; }, args: any, pluginOptions: any) {
         const { ctx, data } = chart

         ctx.save()
         ctx.font = 'bolder 16px sans-serif'
         ctx.fillStyle = 'white'
         ctx.textAlign = 'center'
         ctx.textBaseLine = 'middle'
         ctx.fillText(data.datasets[0].data[0], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
      }
   }

   return (
      <div className="w-20 h-20 rounded-full mt-5">
         <Doughnut
            data={data}
            options={options}
            plugins={[textCenter]}
         ></Doughnut>
      </div>
   )
}

export default Chart