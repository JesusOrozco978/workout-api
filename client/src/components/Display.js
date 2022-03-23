import React, { useEffect, useState } from "react";
import WorkOutsData from "./WorkOutsData";
import axios from "axios";
import { useParams } from "react-router-dom";







const Display = () =>{

    const [workout, setWorkouts] = useState([])
    
    
    useEffect(() => {
      const fetchWorkout = async () => {
    const { data } = await axios.get('http://localhost:1338/workOuts')
        setWorkouts(data)
      }
      fetchWorkout()
    },[])

    return(
      <div>
            <h1>Broadway Shows!</h1>
            <WorkOutsData workout= {workout}>
            </WorkOutsData>
        </div>
    )
}

    export default Display