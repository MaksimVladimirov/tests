import ReactDOM from 'react-dom/client';
import { store } from './components/Redux/store';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
