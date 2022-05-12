import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainComponent from './components/MainComponent/MainComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingListApp from './components/ShoppingListApp/ShopingListApp';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*"
          element={
            <main className="text-center">
              <img src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"></img>
            </main>
          }
        />
        {/* ikeliam viska ka norim matyti, neuztenka tik komponento, reikia ir props ir pan */}
        {/* jei norim main kontento, imetam ta kontenta i tuscia slesa */}
        <Route path='/' element={<MainComponent message="Hello !!" text="How are you?" />} />
        <Route path="/app" element={<ShoppingListApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
