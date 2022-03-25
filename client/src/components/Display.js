import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkOutsData from "./WorkOutsData";

const Display = () =>{
const [workouts, setWorkouts] = useState([])
const [searchWorkout, setSearchWorkout] = useState([]);


useEffect(() => {
  const fetchWorkout = async () => {
    const {data}= await axios.get("http://localhost:1338/workOuts");
    setWorkouts(data);
  };
  fetchWorkout();
}, []);
console.log(workouts)

useEffect(() => {
  setSearchWorkout(workouts.filter((work) => work.workoutName.toUpperCase().includes(work.workoutName.toUpperCase())))
}, [workouts])

return (
  <div>
  <h1>Workout Names!</h1>
  <WorkOutsData
   workout={searchWorkout}/>
</div>
);


}

    export default Display