import React, {useState} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './App.scss';

function App() {
  // Ag-grid section starts
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);
  // Ag-grid section ends

  // Highcharts section starts
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My Highchart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
  // Highcharts section ends

  return (
    <div className="App">
      <h1 className="title">Hello React with TypeScript</h1>
      <button className="ui button">Click Me</button>

      {/* Ag-grid section starts */}
      <div className="ag-theme-alpine" style={{height: 400, width: 605}}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}>
        </AgGridReact>
       </div>
      {/* Ag-grid section ends */}

      {/* Highcharts section starts */}
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      {/* Highcharts section ends */}
      </div>
  );
}

export default App;
