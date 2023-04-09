import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

interface IChartProps {
   voteAverage: number
}

const Chart: React.FC<IChartProps> = ({ voteAverage }) => {
   const [rate, setRate] = useState<any>('');
   const [rateBG, setRateBG] = useState<any>('');

   ChartJS.register(ArcElement, Tooltip, Legend);

   const a: number = +voteAverage.toFixed(1)
   const b: number = 10
   const c: number = a - b

   useEffect(() => {
      if (a <= 10 && a > 7) {
         setRate(`#28FF04`)
         setRateBG(`#28FF0440`)
      } else if (a <= 7 && a > 5) {
         setRate(`#78CB36`)
         setRateBG(`#78CB3640`)
      } else if (a <= 5 && a > 3) {
         setRate(`#CB6C36`)
         setRateBG(`#CB6C3640`)
      } else if (a <= 3) {
         setRate(`#FF0000`)
         setRateBG(`#FF000040`)
      }
   }, [a])

   const data = {
      labels: [],
      datasets: [
         {
            labe: '5000',
            data: [a, c],
            backgroundColor: [`${rate}`, `${rateBG}`],
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