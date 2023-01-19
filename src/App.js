import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Problem1 from './components/Problem-1';
import Problem2 from './components/Problem-2';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Menu />}>
        <Route path="problem-1" element={<Problem1 />} />
        <Route path="problem-2" element={<Problem2 />} />
      </Route>
    </Routes>
  );
}

export default App;
