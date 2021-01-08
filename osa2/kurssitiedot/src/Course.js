import React from 'react';

const Header = (props) => {

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {

const partsId = props.course.map(id => id.id)
const partsName = props.course.map(name => name.name)
const partsAssignment = props.course.map(assignment => assignment.assignments)

  return (
    <div>
        <Part key={i} name={name.name} exercises={assignment.assignments} /> 
    </div>
  )
}

const Part = (props) => {

    return (
    <div>
    <p>{props.name} {props.exercises}</p>
    </div>
  )
}


const Total = (props) => {
  const partsAssignment = props.course.map(assignment => assignment.assignments)
  const total = partsAssignment.reduce((s, p) => s + p)

  return (
    <p>Total {total}</p>
  )
}


const Course = (props) => {

return (
    <div>
      <Header course={props.course} />
      <Content course={props.course.parts} />
      <Total course={props.course.parts}/>
    </div>
  )
}

export default Course;
