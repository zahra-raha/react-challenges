import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      {/* <Content></Content> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;