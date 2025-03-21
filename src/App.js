import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/side-menu'
import Form1 from './components/first-form'
import Form2 from './components/second-form';
import Form3 from './components/third-form'
import Form4 from './components/fourth-form';
import { Navigate } from 'react-router-dom';
import { store } from './state/store'
import { Provider } from 'react-redux';
import FinalForm from './components/fifth-form';

function App() {

  useEffect(() => {
    if (window.location.hash !== "#/") {
      window.location.hash = "#/";
    }
  }, []); // Runs once on mount

  return (
    <div id="App">

<Provider store={store}>
    <Router>
    <Header />

    <Routes>
    <Route path = '/' element = {<Form1 />} />
    <Route path = '/form2' element = {<Form2 />} />
    <Route path = '/form3' element = {<Form3 />}/>
    <Route path = '/form4' element = {<Form4 />}/>
    <Route path= '/form5' element={<FinalForm />} />
    <Route path='*' element={<Navigate to="/" />} />

    </Routes>
    </Router>

    </Provider>
    </div>
  );
}

export default App;
