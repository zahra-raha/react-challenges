import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar className={css.Sidebar} />
    </div>
  );
}

export default App;