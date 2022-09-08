import './App.scss';
import PageHeader from './components/headings/PageHeader/PageHeader.jsx'
import MainContainer from './container/main_container/MainContainer.jsx';
import team from './data/team';
import imgs from './data/backgroundImages';

function App() {
  return (
    <div className="app">
      <PageHeader />
      <MainContainer team = {team} imgs = {imgs}/>
    </div>
  );
}

export default App;
