import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props.props[0].name)
    return (
        <>
        <p>{props.props[0].name} {props.props[0].exercises}</p>
        <p>{props.props[1].name} {props.props[1].exercises}</p>
        <p>{props.props[2].name} {props.props[2].exercises}</p>
        </>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises is {props.exercises1 + props.exercises2 + props.exercises3} </p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content props={course.parts} name={course.parts.name} exercises={course.parts.exercises}/>
            <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))