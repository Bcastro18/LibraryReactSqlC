import './App.css';
import Layout from "./components/shared/Layout";
import AllTotal from './pages/AllTotal';
import { Route, Routes } from 'react-router-dom';
import AddLib from './pages/AddLib';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<AllTotal></AllTotal>}></Route>
      </Routes>
      
      <Routes>
          <Route path="/add-library" element={<AddLib></AddLib>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
