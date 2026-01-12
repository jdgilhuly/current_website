import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import { AppRoutes } from './routes/AppRoutes';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
