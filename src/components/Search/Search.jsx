import styles from "./Search.module.scss";
import searchStore from "../../store/search-store";
import { observer } from "mobx-react-lite";

export const Search = observer(() => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => searchStore.getResultSearch(e)}
    >
      <input
        type="search"
        placeholder="Что ищем?"
        value={searchStore.search}
        onChange={(e) => searchStore.setSearch(e.target.value)}
      />
    </form>
  );
});
