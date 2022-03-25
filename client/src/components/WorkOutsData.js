import React from "react";
import { NavLink } from "react-router-dom";


const WorkOutsData = (props) =>{
  const {workout} = props
  return (
    <div> 
    <h2>Select a workout to get full description</h2>
    <div className="workoutNameList">
      {workout.map((workouts, i) => <ul  key={i}><NavLink to={`/workouts/${workouts.workoutName}`}>{workouts.workoutName}</NavLink></ul>)}
      </div>
    </div>
  )
};


export default WorkOutsData