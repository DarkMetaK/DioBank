import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './components/Layout';
import Conta from './pages/Conta';
import Home from './pages/Home';

import './styles/main.css';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/conta/:id' element={<Conta />}/>
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
