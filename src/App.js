import './assets/scss/App.scss';
import initInterceptor from './interceptor';
import Header from './components/Header';

function App() {
  initInterceptor();
  return (  
    <Header></Header>
  );
}

export default App;
