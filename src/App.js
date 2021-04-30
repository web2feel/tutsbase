import './App.scss';
import Layout from "./Components/Layout"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Aside from "./Components/Aside"

function App() {

  return (
    <div className="App">
            <Layout>
              <Header />
              <Main />
              <Aside />
            </Layout>
    </div>
  );
}

export default App;
