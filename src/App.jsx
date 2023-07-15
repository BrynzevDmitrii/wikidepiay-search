import styles from "./App.module.scss";
import { Search } from "./components/Search/Search";
import { SesrchList } from "./components/SearchList/SearchList";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Search />
        <SesrchList />
      </header>
    </div>
  );
}

export default App;
