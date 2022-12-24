import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout';
import MainRoutes from './routes';

import { LoginContextProvider } from './context/auth';

import './styles/main.css';
import { createLocalStorage, getAllLocalStorage } from './services/Storage/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <Router>
      <LoginContextProvider>
        <Layout>
            <MainRoutes />
        </Layout>
      </LoginContextProvider>
    </Router>
  )
}

export default App
