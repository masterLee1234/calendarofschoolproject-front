import React from 'react';
import './style.css'

function Aside(props) {
  var lists = [];
  var i = 0;
  while (i < props.list_subject.length) {
    if(Number(props.id)===i){
      lists.push(
        <li className="Aside-li on" 
        key={i}
        data-id={i}
        onClick={(e)=>{
          e.preventDefault()
          props.onChangePage(e.target.dataset.id)
        }}
        >
          { props.list_subject[i]}
        </li>
      );
    }
    else{
      lists.push(
        <li className="Aside-li" 
        key={i}
        data-id={i}
        onClick={(e)=>{
          e.preventDefault()
          props.onChangePage(e.target.dataset.id)
        }}
        >
          { props.list_subject[i]}
        </li>
      );
    }
    i = i + 1;
  }
  return (
    <aside className="Aside">
      <ul>  
        {lists}
      </ul> 
    </aside>
  );
}

export default Aside;