import './App.css';

import Mounting from './Life_Cycle_methods/componentDidMount';
import Updating from './Life_Cycle_methods/componentDidUpdate';
import ShouldComponent from './Life_Cycle_methods/shouldComponentUpdate';
import Unmount from './Life_Cycle_methods/componentWillUnmount/componentWillUnmount';

function App() {
  return (
    <div className="App">
    <h2>Life Cycle Methods</h2>
      <Mounting/>
      <Updating/>
      <ShouldComponent/>
      <Unmount/>
    </div>
  );
}

export default App;
