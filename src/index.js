import React from 'react';
import ReactDOM from 'react-dom/client';


//Nombre del curso
const Header=(props)=>(
  //console.log(props),
  <div><h1>{props.course.name}</h1></div>
)

//Parte
const Part=(props)=>(
  //console.log(props),
  <div><p>{props.parts.name} {props.parts.exercises}</p></div>
)

//Partes y su número de ejercicios
const Content=(props)=>{
  return(
    //console.log(props),
    <div>
      <Part parts={props.parts.parts[0]}/>
      <Part parts={props.parts.parts[1]}/>
      <Part parts={props.parts.parts[2]}/>
    </div> 
  )
}

//Numero total de ejercicios
const Total=(props)=>( 
  //console.log(props),
  <div>
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
  </div>
)


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
        <Header course={course} />
        <Content parts={course} />
        <Total parts={course} />
    </div>
    )
   
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
