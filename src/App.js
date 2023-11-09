
import './App.css';
import Navbar from './Components/Navbar';
import SecondPage from './Components/SecondPage';
import Third from './Components/Third'
import ImageGallery from './Components/ImageGallery';
import Testimonials from './Components/Testimonials';
import NewsEvents from './Components/NewsEvents';
import ReservationContact from './Components/Reservation';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SecondPage/>
     <Third/>
     <ImageGallery/>
     <Testimonials/>
     <NewsEvents/>
     <ReservationContact/>
    </div>
  );
}

export default App;
