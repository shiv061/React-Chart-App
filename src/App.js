import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import Chart from './components/chart';

class App extends Component {
  state = {
    person: [
      {
        id: 1,
        name: 'Shubham',
        start: '01/09/2019',
        end: '07/09/2019'
      },
      {
        id: 2,
        name: 'Shubham',
        start: '26/09/2019',
        end: '28/09/2019'
      },
      {
        id: 3,
        name: 'Vivek',
        start: '09/09/2019',
        end: '12/09/2019'
      },
      {
        id: 4,
        name: 'Priya',
        start: '10/09/2019',
        end: '12/09/2019'
      },
      {
        id: 5,
        name: 'Rohan',
        start: '17/09/2019',
        end: '19/09/2019'
      },
      {
        id: 6,
        name: 'Rohan',
        start: '27/09/2019',
        end: '29/09/2019'
      },
      {
        id: 7,
        name: 'Swati',
        start: '13/09/2019',
        end: '14/09/2019'
      },
      {
        id: 8,
        name: 'Swati',
        start: '29/09/2019',
        end: '29/09/2019'
      },
      {
        id: 9,
        name: 'prakash',
        start: '03/09/2019',
        end: '07/09/2019'
      },
      {
        id: 10,
        name: 'abhishek',
        start: '11/09/2019',
        end: '11/09/2019'
      },
      {
        id: 11,
        name: 'Pradeep',
        start: '09/09/2019',
        end: '13/09/2019'
      },
      {
        id: 12,
        name: 'Pradeep',
        start: '28/09/2019',
        end: '28/09/2019'
      },
      {
        id: 13,
        name: 'suhas',
        start: '20/09/2019',
        end: '23/09/2019'
      },
      {
        id: 14,
        name: 'Vishnu',
        start: '25/09/2019',
        end: '27/09/2019'
      },
      {
        id: 15,
        name: 'neha',
        start: '25/09/2019',
        end: '28/09/2019'
      }
    ],
    showChart: false
  };

  clickHandler = () => {
    const showChart = this.state.showChart;
    this.setState({
      showChart: !showChart
    });
  };

  render() {
    const person = this.state.person.map(p => {
      return <Table key={p.id} i={p.id} n={p.name} s={p.start} e={p.end} />;
    });

    return (
      <div className='App'>
        <h1 className='f1'>TIMELINE</h1>
        <div>
          <div className='pa4'>
            <div className='overflow-auto'>
              <table className='f6 w-100 mw8 center' cellSpacing='0'>
                <thead>
                  <tr className='stripe-dark'>
                    <th className='fw6 pa3 bg-white'>ID</th>
                    <th className='fw6 pa3 bg-white'>Name</th>
                    <th className='fw6 pa3 bg-white'>Start</th>
                    <th className='fw6 pa3 bg-white'>End</th>
                  </tr>
                </thead>
                {person}
              </table>
            </div>
          </div>
        </div>
        <button
          className='ba shadow-3 pa3 ma5 bg-black white lg dim grow'
          onClick={this.clickHandler}
        >
          Check Availibility
        </button>
        {this.state.showChart ? (
          <div className='pa5'>
            <Chart person={this.state.person} />
          </div>
        ) : (
          <h1>Click Above</h1>
        )}
      </div>
    );
  }
}

export default App;
