import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class chart extends Component {
  render() {
    let check = [];
    let free = [];
    const range = (start, end) => {
      for (let i = start; i <= end; i++) {
        check.push(i);
      }
    };
    let array = [
      [
        { type: 'string', id: 'Term' },
        { type: 'string', id: 'Name' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' }
      ]
    ];
    this.props.person.map(p => {
      const start = p.start.split('/');
      const end = p.end.split('/');
      range(parseInt(start[0]), parseInt(end[0]));
      let final = [
        p.id.toString(),
        p.name,
        new Date(
          parseInt(start[2]),
          parseInt(start[1]) - 1,
          parseInt(start[0])
        ),
        new Date(parseInt(end[2]), parseInt(end[1]) - 1, parseInt(end[0]))
      ];
      return array.push(final);
    });

    for (let i = 1; i <= 30; i++) {
      if (check.includes(i)) {
        continue;
      } else {
        free.push(i);
      }
    }
    return (
      <div>
        <Chart
          width={'1366px'}
          height={'665px'}
          chartType='Timeline'
          loader={<div>Loading Chart</div>}
          data={array}
          rootProps={{ 'data-testid': '2' }}
          options={{
            timeline: {
              groupByRowLabel: false
            }
          }}
        />
        {free.map(f => {
          return <h3 key={f}>Available on September {f} 2019</h3>;
        })}
      </div>
    );
  }
}

export default chart;
