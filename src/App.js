import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/side-menu.js'
import Form1 from './components/first-form.js'
import Form2 from './components/second-form.js';
import Form3 from './components/third-form.js'
import Form4 from './components/fourth-form.js';
import { store } from './state/store.js'
import { Provider } from 'react-redux';
import FinalForm from './components/fifth-form.js';


function App() {
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
    </Routes>

    </Router>

    </Provider>
    </div>
  );
}

export default App;
