import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course';

const App = () => 
{
    const courses = [
    {
        name: 'Half Stack -sovelluskehitys',
        id: 1,
        parts:
        [
        {
            name: 'Reactin perusteet',
            assignments: 10,
            id: 1
        },
        {
            name: 'Tiedonvälitys propseilla',
            assignments: 7,
            id: 2
        },
        {
            name: 'Komponenttien tila',
            assignments: 14,
            id: 3
        }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
        {
            name: 'Routing',
            assignments: 3,
            id: 1
        },
        {
            name: 'Middlewaret',
            assignments: 7,
            id: 2
        }
        ]
    }
    ]

    return (
        <div>
            <h1>Fullstack kokonaisuus</h1>
            {courses.map(course => 
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));