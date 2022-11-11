import './App.css';
import News from './components/News/News';
import Search from './components/Search';
import Billboard from './components/Billboard';
import Weather from './components/Weather';
import Popular from './components/Popular/Popular';
import TVprogramm from './components/TV/TVprogramm';
import BroadCast from './components/Broadcast/Broadcast';

let backImage = {img: "https://img.youtube.com/vi/qCauA503AdE/0.jpg", alt: "Форсаж:Хоббс и Шоу"};
let weather = {icon: "https://www.iconninja.com/files/413/758/397/onedrive-icon.png", alt: "Облака", text: "+17C"};


function App() {
  return (
  <div className="App">
   <News/>
   <Search/>
   <Billboard props={backImage}/>
   <div className="widgets">
   <Weather props={weather}/>
   <Popular/>
   <TVprogramm/>
   <BroadCast/>
   </div>
   </div>
  );
}

export default App;
