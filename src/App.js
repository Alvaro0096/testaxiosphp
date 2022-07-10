import './App.css';
import TestAxios from './components/TestAxios';

function App() {
  return (
    <>
      <h1>Ahora estoy en etapa: {process.env.NODE_ENV}</h1>
      <h1>{process.env.REACT_APP_TEST_TEXT}</h1>
      <TestAxios />
    </>
  );
}

export default App;
