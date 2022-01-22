import React from 'react';
import './Appstyle.css'
import Goallist from './components/Goallist';
import NewGoalList from './components/NewGoalList';
import AddGoal from './components/AddGoal'
// This is a functional component

const App = () => {
  // lets add an array of elemets in the app here
  const NewCourseGoals = [
    {id: 'cg1', text: 'First Goal'},
    {id: 'cg2', text: 'Second Goal'},
    {id: 'cg3', text: 'Third Goal'},
  ]

  // here it renders only the jsx syntax written in the h1 tag
  return (
    <div className='goal'>
      <h1 title="THis is how I adda tool tip">This is new React App that I edited</h1>
      <h2>MY Goals here:-</h2>
      <AddGoal />
      <Goallist />
      <NewGoalList goals={NewCourseGoals} />
    </div>
  );
};

export default App;



// The above can be also written as the class component as follows:

// class App extends React.Component {
//   render(){
//     return <h1>Hi I am a Class Component</h1>;
//   }
// }

// export default App;


// But note that we dont use the class component, mostly we use the funcional components
// using functional components is the modern way of using the react.