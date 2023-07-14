import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import axios from 'axios';

function App() {
const [search, setSearch] = useState('')
const [result, setResult] = useState([])
const [searchInfo, setSearchInfo] = useState({})

useEffect(()=>{

}, [])

const handleSearch = async e =>{
  e.preventDefault();
  if(search === '') return;

  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${search}`;

  try {
    const response = (await axios.get(endpoint)).data
    setResult(response.query.search)
    setSearchInfo(response.query.searchinfo)
    return response;
  } catch (error) {
    console.error(error.massage)
  }

  const response = await axios.get(endpoint)
  if (!response.ok){
    throw Error(response.statusText)
  }

  // const result = response.data.search
  console.log(response);
}

  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.title}>Поиск по Википедии</h1>
        <form className={styles.form} onSubmit={ handleSearch }>
            <input type='search'
             placeholder='Что ищем?'
             value={search}
             onChange={e=>setSearch(e.target.value)}/>
        </form>
        <p className={styles.count_result}>
          Результаты поиска : {searchInfo.totalhits?searchInfo.totalhits : 0}
        </p>
        <div className={styles.results}>
          <div className={styles.result}>
            <h2>titles</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <a href='#'>Read more</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
