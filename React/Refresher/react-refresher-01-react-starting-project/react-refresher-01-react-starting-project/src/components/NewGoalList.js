import React from 'react';
export default function NewGoalList(props) {
    return (<div className='goallist'>
        {
            props.goals.map(goal =>{
                return <li key={goal.id}>{goal.text}</li>;
            })
        }
    </div>);
}
