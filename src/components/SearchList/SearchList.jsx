import searchStore from "../../store/search-store";
import DOMPurify from "dompurify";
import { observer } from "mobx-react-lite";
import styles from "./SearchList.module.scss";

export const SesrchList = observer(() => {
  return (
    <>
      <p className={styles.count_result}>
        Результаты поиска :{" "}
        {searchStore.searchInfo ? searchStore.searchInfo.totalhits : 0}
      </p>
      <ul className={styles.results}>
        {searchStore.result
          ? searchStore.result.map((item) => (
              <li className={styles.result} key={item.pageid}>
                <h2>{item.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.snippet),
                  }}
                ></p>
                <a
                  href={`https://ru.wikipedia.org/?curid=${item.pageid}`}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Подробнее
                </a>
              </li>
            ))
          : <div className={styles.loading} />
                }
      </ul>
    </>
  );
});
