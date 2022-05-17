import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent/MainComponent';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingListApp from './components/ShoppingListApp/ShopingListApp';

function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path="*"     element={
            <main className="text-center">
              <img src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"></img>
            </main>
          }/>
        <Route path='/' element={<MainComponent />} />
        <Route path="/app" element={<ShoppingListApp />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
