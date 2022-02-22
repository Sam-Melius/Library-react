
import './App.css';
import DataGrid from 'react-data-grid';
import data from './data';
import { createColumns, barData } from './data-utils';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from 'victory';
import { colors } from '@material-ui/core';


function App() {
  
  return (
    <div>
      <DataGrid
        columns={createColumns(data)}
        rows={data} />
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

      <VictoryPie
        data={[
          { x: 'Cats', y: 35 },
          { x: 'Dogs', y: 40 },
          { x: 'Birds', y: 55 }
        ]}
      />
    </div>
    

    
    
  );
}

export default App;
