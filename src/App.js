import GlobalStyle from './style/globalStyle.js';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Router from './routes/index.js';


function App() {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        <Router/>
        <Footer/>

    </>
   
  )
}

export default App;
