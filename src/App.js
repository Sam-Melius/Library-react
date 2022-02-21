
import './App.css';
import DataGrid from 'react-data-grid';
import data from './data';
import { createColumns, barData } from './data-utils';
import { VictoryBar } from 'victory';


function App() {
  
  return (
    <div>
      <DataGrid
        columns={createColumns(data)}
        rows={data} />
      
    </div>

    
    
  );
}

export default App;
