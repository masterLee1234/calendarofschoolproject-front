import React from 'react'
import axios from 'axios'

function Add(props) {
    let lists = []
    let i
    for (i = 0; i < props.list_subject.length - 1; i++) {
        lists.push(
            <option key={i} value={props.list_subject[i]}>{props.list_subject[i]}</option>
        )
    }
    return (
        <div className="Add">
            <form method='post' action="/api/formdata" onSubmit={function (e) {
                e.preventDefault();
                props.onSubmit(
                    e.target.date.value,
                    e.target.title.value,
                    e.target.subject.value
                );
                axios
                    .post('https://salty-refuge-71135.herokuapp.com/create', {
                        date: e.target.date.value,
                        title: e.target.title.value,
                        subject: e.target.subject.value
                    })
                    .then(() => console.log('data Created'))
                    .catch(err => {
                        console.error(err);
                    });
                alert('Submit!!!!!');
                window.location.href = "/";
            }}
            >
                <label htmlFor="date">날짜:</label><br></br>
                <input type="Date" id="date" name="date"></input><br></br>
                <label htmlFor="title">제목:</label><br></br>
                <input type="text" id="title" name="title"></input><br></br>
                <label htmlFor="subjects">과목:</label><br></br>
                <select name="subject" id="subject">
                    {lists}
                </select><br></br><br></br>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Add