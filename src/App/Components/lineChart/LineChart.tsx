import ReactECharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


interface IProps {
    posNumber : number
}


export const LineChart = (props: IProps) => {
   const  localMaxMemoryOne = JSON.parse(localStorage.getItem("maxMemory1") || "[]") || [];
   const  localMaxMemoryTwo = JSON.parse(localStorage.getItem("maxMemory2") || "[]") || [];



   const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.posNumber ===1 ? localMaxMemoryOne : localMaxMemoryTwo,
        type: 'line',
        areaStyle: {color: "#67e0e3"}
      }
    ]
    
  };

      return (
        <ReactECharts
        option={option}
        style={{ height: '400px', width: '750px', marginTop : "-80px"}}
        echarts={echarts}
      />
      )
}