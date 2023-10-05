import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { GlobalStyles } from './styles/common/GlobalStyle';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'http://agree.iptime.org/api/v1';
axios.defaults.headers['Access-Control-Allow-Origin'] =
  'http://agree.iptime.org:3000';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
