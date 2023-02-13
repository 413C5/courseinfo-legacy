import React from 'react';
import ReactDOM from 'react-dom/client';


//Nombre del curso
const Header=(props)=>(<div><h1>{props.course}</h1></div>)

//Parte
const Part=(props)=>(<div><p>{props.parts.name} {props.parts.exercises}</p></div>)

//Partes y su número de ejercicios
const Content=(props)=>{
  return(
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}


//Numero total de ejercicios
const Total=(props)=>( 
  <div>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>
)



const App = () => {
  //const definitions
  const course = 'Half Stack application development'
  const parts = [
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
  
  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
    </div>
    )
   
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
