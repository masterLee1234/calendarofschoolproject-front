import React from 'react';
import './style.css'
import Add from './Add'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

function Article(props) {
  var html = []
  let datas = []
  let events = []
  let i
  for(i=0;i<props.datas.length;i++){
    if(props.list_subject[props.id] === props.datas[i].subject){
      events.push(
        {date:props.datas[i].date, title:`${props.datas[i].subject}: ${props.datas[i].title}`}
      )
    }
  }
  console.log(events)
  if (props.list_subject[props.id] === '+') {
    html.push(
      <Add
        key='Add' list_subject={props.list_subject}
        onSubmit={function (date, title, subject) {
          // add content to this.state.contents
          datas.push({ date: date, title: title, subject: subject })
          console.log(datas);
        }}
        datas={datas}
      ></Add>
    )
  }
  else {
    html.push(
      <FullCalendar
      key = 'Calendar'
      plugins={[dayGridPlugin]}
      events={events}
    />
    )
  }
  return (
    <article className="Article">
      {html}
    </article>
  );
}

export default Article;