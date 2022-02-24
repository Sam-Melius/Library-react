/* eslint-disable indent */

import './App.css';
import DataGrid from 'react-data-grid';
import data from './data';
import { createColumns, barData, pieHash, lineHash } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLine } from 'victory';



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
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
          tickFormat={['1', '2', '3', '4', '5', '6', '7', '8']}

          
          
        />

        <VictoryBar data={barData(data)} 
          x='year' y='owners' 
          style={{ data: { fill: '#c43a31' } }}
          alignment="start"
          barRatio={.75}  
         
          
        />
        
      </VictoryChart>
      </section>
      <section className='pie'>
        <VictoryPie
        
          data={pieHash(data)}
          x='make' y='owners'
        
      />
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
            tickLabels: { fontSize: 5, padding: 10, angle: 30, fill: 'indigo', fontWeight: 'bold' }
          }} />
        <VictoryAxis
          dependentAxis
          tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          tickFormat={['o cust', '1 cust', '2 cust', '3 cust', '4 cust', '5 cust', '6 cust', '7 cust', '8 cust']}

          
          
        />

        <VictoryLine data={lineHash(data)} 
          x='year' y='owners' 
          
         
          
          
         
          
        />
        
      </VictoryChart>
      </section>


    </div>
    

    
    
  );
}

export default App;



