import React from 'react';
import './AddGoal.css'

export default function AddGoal(props) {

    const addGoalHandler = Event => {
        Event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text : "My new goal"
        };
        // console.log(newGoal);
        props.onAddGoal(newGoal);
        // console.log("NEw Goal Added");

    }
  return(
      <form className='addgoal' onSubmit={addGoalHandler}>
          <input type="text" />
          <button>Submit</button>
      </form>
  );
}
