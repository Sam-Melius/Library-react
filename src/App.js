/* eslint-disable indent */

import './App.css';
import DataGrid from 'react-data-grid';
import data from './data';
import { createColumns, barData } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from 'victory';
import { colors } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


function App() {
  
  return (
    <div>
      <section>
        <DataGrid
        columns={createColumns(data)}
        rows={data} />
      </section>
      
      <section>
        <VictoryChart 
        theme={VictoryTheme.material}
        domainPadding={{ x: 15, y: 15 }}
      >
      
        <VictoryAxis 
         
          style={{ 
            axis: { stroke: ' #E0F2F1' },
            axisLabel: { fontSize: 20 },
            tickLabels: { fontSize: 5, padding: 10, angle: 30, fill: 'gray', fontWeight: 'bold' }
          }} />
        <VictoryAxis
          dependentAxis
          tickValues={[10, 20, 30, 40, 50, 60, 70]}
          tickFormat={['10yrs', '20yrs', '30yrs', '40yrs', '50yrs', '60yrs', '70yrs']}

          
          
        />

        <VictoryBar data={barData(data)} 
          x='color' y='averageAge' 
          style={{ data: { fill: '#c43a31' } }}
          alignment="start"
          barRatio={.75}  
         
          
        />
        
      </VictoryChart>
      </section>
      <section className='pie'>
        <VictoryPie
        colorScale={['black', 'maroon', 'violet', 'blue', 'green',
         'gold', 'black', 'khaki', 'teal', 'pink',
          'indigo', 'orange', 'black', 'turquoise',
           'aquamarine', 'crimson', 'red', 'purple', 'yellow']}
          data={barData(data)}
          x='color' y='averageAge'
          
          
          
        
      />
      </section>


    </div>
    

    
    
  );
}

export default App;
