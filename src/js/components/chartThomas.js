import React, { Component } from 'react';

import Chart from 'grommet/components/Chart';

export default class chartThomas extends Component {
  render () {
    return (
      <Chart type="bar" max={100} threshold={0} xAxis={[
        {"label": "Approachability", "value": 8},
        {"label": "Cleanliness", "value": 7},
        {"label": "Community", "value": 6},
        {"label": "Cost of Living", "value": 5},
        {"label": "Crime", "value": 4},
        {"label": "Culture", "value": 3},
        {"label": "Police", "value": 2},
        {"label": "Public Safety", "value": 1}
      ]} units="%" series={[
        {
          "label": "Male",
          "values": [[8, 10], [7, 20], [6, 30], [5, 20], [4, 30], [3, 30], [2, 20], [1, 40]],
          "colorIndex": "graph-1"
        },
        {
          "label": "Female",
          "values": [[8, 40], [7, 20], [6, 30], [5, 40], [4, 30], [3, 0], [2, 10], [1, 0]],
          "colorIndex": "graph-2"
        }
      ]} legend={{"position": "after"}} a11yTitleId="tileChart2Title" a11yDescId="tileChart2Desc" />
    );
  }
};


