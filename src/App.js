import React, {useState, useEffect} from 'react';
import './App.css';
import './templates/Header'
import Header from './templates/Header';
import Article from './templates/Article';
import Aside from './templates/Aside';
import Footer from './templates/Footer';

function App() {
  const [id, setId] = useState(0)
  const [datas, setDatas] = useState([])

  let list_subject=['국어', '영어', '수학', '사회', '과학', '한국사', '기술가정', '정보', '과학탐구실험', '미술','+']

  useEffect( ()=>{
    fetch('https://salty-refuge-71135.herokuapp.com/create/home')
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])

  console.log(datas)

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Aside 
          id = {id}
          list_subject = {list_subject}
          onChangePage={(i)=>{
          setId(i)
          }}>
        </Aside>
        <Article
        id = {id}
        list_subject = {list_subject}
        datas={datas}
        ></Article>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
