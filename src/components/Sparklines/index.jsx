import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import './Sparklines.scss';

function Sparklines({ type, data, height, width, options }) {
  const sparkOptions = {
    chart: {
      height: height,
      width: width,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    ...options,
  };

  return (
    <Chart
      className="sparkline-chart"
      style={{ display: 'inline-block' }}
      type={type}
      height={height}
      width={width}
      options={sparkOptions}
      series={data}
    />
  );
}

Sparklines.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.object,
};

Sparklines.defaultProps = {
  type: 'bar',
  height: 20,
  width: 50,
};

export default Sparklines;
