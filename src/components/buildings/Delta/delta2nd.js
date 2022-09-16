import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
//import HighchartsMore from "highcharts/highcharts-more";
import React from "react";

//HighchartsMore(Highcharts);

//testing here for custom map
const option2 = {
  chart: {
    height: "60%",
    borderWidth: 1,
    // margin: [0, 100, 100, 10],
  },

  mapNavigation: {
    enabled: true,
    margin: 0,
  },
  title: {
    text: "UHCL Interactive map",
    margin: -90,
  },
  credits: {
    enabled: false,
  },
  subtitle: {
    text: "Delta Building Second Floor",
  },
  // showInLegend: true,

  series: [
    {
      mapData: [],
      data: [],
    },
    {
      type: "map",
      joinBy: "id",
      mapData: [
        {
          id: "id0",
          name: "205",
          path:
            "M25,30,107,30,107,101,136,101L136,116L129,116L6,116,6,69,26,69Z",
          color: "red",
          value: "Open Computer Lab",
        },

        {
          id: "id1",
          name: "205B",
          path: "M25,50L6,50L6,30L25,30Z",
          value: "CONFERENCE ",
        },

        {
          id: "id2",
          name: "205A",
          path: "M6,50L6,69L26,69,25,50Z",
          value: "CONFERENCE",
        },
        {
          id: "id3",
          name: "208-2012",
          path: "M107,44,136,44,136,84,107,84z",
          value: "University Computing and Telecommunication",
        },
        {
          id: "id4",
          name: "213",
          path: "M107,84,107,101,136,101,136,84z",
          value: "Information Desk",
        },
        {
          id: "id5",
          name: "214",
          path: "M136,50,163,50L163,97L136,97,136,84z",
          value: "",
        },
        {
          id: "id6",
          name: "204",
          path: "M7,167,45,167L45,116L6,116z",
          value: "Multidisciplinary Studies Lab",
        },
        {
          id: "id7",
          name: "203",
          path: "M84,167L84,116L45,116L45,167z",
          value: "Multidisciplinary Studies Lab",
        },
        {
          id: "id8",
          name: "202",
          path: "M84,167,122,167,122,116,84,116z",
          value: "Computer And Information Sciences  Computer Lab",
        },
        {
          id: "id9",
          name: "201",
          path: "M122,116,164,116,163,167,122,167z",
          value: "Computer Lab",
        },
        {
          id: "id10",
          name: "240",
          path:
            "M187,134,210,133,210,137L223,137L223,167,189,167L189,149L186,149z",
          value: "CSE Robotics Lab",
        },
        {
          id: "id11",
          name: "241",
          path:
            "M223,167L257,167L262,165,273,154,275,149,275,121L243,121L230,135,230,137L223,137z",
          value: "",
        },
        {
          id: "id12",
          name: "242",
          path:
            "M282,121L311,121L311,124L317,124L317,167,310,167,310,157,294,157,282,145z",
          value: "",
        },
        {
          id: "id13",
          name: "234",
          path:
            "M292,121,292,86,299,85,299,46,215,46,215,29L317,29L317,124L311,124L311,121z",
          value: "",
        },
        {
          id: "id14",
          name: "234",
          path: "M240,71,267,71,266,104,240,104z",
          value: "",
        },
        {
          id: "id15",
          name: "220-232/235/236/238",
          path: "M266,104,267,71L292,71L292,104Z",
        },
        {
          id: "id16",
          name: "238",
          path: "M221,88,240,88,240,104,221,104z",
          value: "",
        },
        {
          id: "id17",
          name: "Restroom",
          path: "M215,46,189,46,189,80,214,80z",
        },
      ],

      data: [
        {
          id: "id0",
          y: 0,
        },
        {
          id: "id1",
          y: 1,
        },
        {
          id: "id2",
          y: 2,
        },
        {
          id: "id3",
          y: 3,
        },
        {
          id: "id4",
          y: 4,
        },
        {
          id: "id5",
          y: 5,
        },
        {
          id: "id6",
          y: 6,
        },
        {
          id: "id7",
          y: 7,
        },
        {
          id: "id8",
          y: 8,
        },
        {
          id: "id9",
          y: 9,
        },
        {
          id: "id10",
          y: 10,
        },
        {
          id: "id11",
          y: 11,
        },
        {
          id: "id12",
          y: 12,
        },
        {
          id: "id13",
          y: 13,
        },
        {
          id: "id14",
          y: 14,
        },
        {
          id: "id15",
          y: 15,
        },
        {
          id: "id16",
          y: 16,
        },
        {
          id: "id17",
          y: 17,
        },
      ],
    },
  ],

  plotOptions: {
    series: {
      states: {
        hover: {
          backgroundColor: "blue",
          enabled: true,
        },
      },
      showInLegend: false,
    },
    map: {
      dataLabels: {
        enabled: true,
        color: "white",

        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          return this.point.name + "<br/>";
        },
      },
      color: "green",
    },
  },

  tooltip: {
    useHTML: true,
    style: {
      pointerEvents: "auto",
    },
    hideDelay: 5000,
    headerFormat: "",
    followPointer: false,
    backgroundColor: "white",
    formatter: function () {
      return "<b>" + this.point.name + "<b>" + "<br/>" + this.point.value;
    },
  },
};
export default function DeltaSecond({ popup }) {
  console.log(`The value I am getting inside of Sidebar is ${popup}`);
  return (
    <>
      <HighchartsReact
        options={option2}
        highcharts={Highcharts}
        constructorType="mapChart"
        // allowChartUpdate={true}

        //containerProps={{ style: { height: "100vh", width: "100vw" } }}
      ></HighchartsReact>
    </>
  );
}
