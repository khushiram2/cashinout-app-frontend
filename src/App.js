import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator/calculator';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AllKhata } from './pages/AdminpannelCompoenents/AllKhata/AllKhata';
import { NewKhata } from './pages/AdminpannelCompoenents/newentryform/NewKhata';
import { Register } from './pages/Auth/Register';
import { Login } from './pages/Auth/Login';
import SingleKhata from './pages/AdminpannelCompoenents/SingleKhata/SingleKhata';

function App() {
  return (
    <Layout>
<Routes>
  <Route path='/' element={<Calculator/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>} />  
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/allkhata' element={<AllKhata/>}/>
    <Route path='/newkhata' element={<NewKhata/>}/>
    <Route path='/singlekhata' element={<SingleKhata/>}/>

</Routes>
    </Layout>

  );
}

export default App;
