import ReactECharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import "./chart.scss";

interface IProps {
  value :  string
  min: number;
  max: number;
}


export  const MyGaugeChart = (props : IProps) => {
    // Example data for the gauge chart
    const option = {
        series: [
            {
              type: 'gauge',
              min: props.min,
              max: props.max, 
              axisLine: {
                lineStyle: {
                  width: 20,
                  height : "100%",
                  color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                  ]
                }
              },
              pointer: {
                itemStyle: {
                  color: 'auto',
                }
              },
              axisTick: {
                distance: -30,
                length: 15,
                lineStyle: {
                  color: '#fff',
                  width: 1
                }
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: '#fff',
                  width: 4
                }
              },
              axisLabel: {
                color: 'inherit',
                distance: 40,
                fontSize: 15
              },
              detail: {
                valueAnimation: true,
                formatter: '{value}',
                color: 'inherit'
              },
              data: [
                {
                  value: parseInt(props.value),
                  
                }
              ]
            }
          ]
    };
  
    return (
      <ReactECharts
        option={option}
        style={{ height: '500px', width: '450px', marginTop : "-70px" }}
        echarts={echarts}
      />
    );
  };