import './App.css';
import HeaderBar from './Components/HeaderBar';
import MainContent from './Components/MainContent';


function App() {
  return (
    <div className="App">
      {/* Header + Search Bar + Log in Button + FilterRating */}
        <HeaderBar />
      {/* Main Page Movies  */}
        <MainContent />
    </div>
  );
}

export default App;
