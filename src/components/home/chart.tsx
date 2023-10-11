import { FunctionComponent } from 'react';

interface Props {
  data: number[];
  type: {
    heading: string;
    subHeading: string;
  };
}

export const EEGChart: FunctionComponent<Props> = ({ data, type }) => {
  const options: Highcharts.Options & {
    chart: {
      zoomType: string;
    };
  } = {
    chart: {
      zoomType: 'x',
      zooming: {
        singleTouch: true,
      },
      height: 200,
    },

    title: {
      text: type?.heading,
    },

    subtitle: {
      text: type?.subHeading,
    },

    tooltip: {
      valueDecimals: 2,
      shared: true,
    },

    xAxis: {
      labels: {
        enabled: true,
      },
      crosshair: false,
      scrollbar: {
        enabled: true,
      },
      tickLength: 0,
      zoomEnabled: true,
    },

    yAxis: {
      title: {
        text: null,
      },
      crosshair: false,
    },

    series: [
      {
        type: 'line',
        data,
        lineWidth: 0.5,
        showInLegend: false,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts.Chart} options={options} />;
};
