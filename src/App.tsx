import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout';
import MainRoutes from './routes';

import { LoginContextProvider } from './context/auth';

import './styles/main.css';

function App() {
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
