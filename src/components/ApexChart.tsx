import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
  cases: any;
  deaths: any;
  recovered: any;
}

const ApexChart: React.FC<Props> = ({ cases, deaths, recovered }) => {
  const [selection, setSelection] = useState<string>("one_year");

  useEffect(() => {
    updateData(selection);
  }, [selection]);

  const updateData = (timeline: string) => {
    setSelection(timeline);

    const chart: any = document.querySelector("#area-datetime");

    if (!chart) {
      return;
    }

    const instance = chart.chart;

    switch (timeline) {
    }
  };

  const options: any = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      events: {
        dataPointMouseEnter: (event: any, chartContext: any, config: any) => {
          chartContext.updateOptions({
            dataLabels: {
              enabled: true,
            },
          });
        },
        dataPointMouseLeave: (event: any, chartContext: any, config: any) => {
          chartContext.updateOptions({
            dataLabels: {
              enabled: false,
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false, 
        format: "yyyy", 
      },
    },
  };

  const series = [
    {
      name: "Cases",
      data: cases,
      fill: {
        colors: ["rgba(22, 19, 170, 0.8)"],
      },
    },
    {
      name: "recovered",
      data: recovered,
      fill: {
        colors: ["rgba(6, 165, 27, 0.8)"],
      },
    },
    {
      name: "deaths",
      data: deaths,
      fill: {
        colors: ["rgba(181, 34, 34, 0.8)"],
      },
    },
  ];

  return (
    <div id="chart">
      <div className="toolbar">
      </div>

      <div id="chart-timeline">
        <ReactApexChart options={options} series={series} type="area" height={500} />
      </div>
    </div>
  );
};

export default ApexChart;
