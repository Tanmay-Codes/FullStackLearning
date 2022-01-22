import React from 'react';
import './AddGoal.css'

export default function AddGoal() {

    const addGoalHandler = () => {
        const newGoal = {
            id: Math.random().toString(),
            text : "My new goal"
        };
        console.log(newGoal);

    }
  return(
      <form className='addgoal' onSubmit={addGoalHandler}>
          <input type="text" />
          <button>Submit</button>
      </form>
  );
}
