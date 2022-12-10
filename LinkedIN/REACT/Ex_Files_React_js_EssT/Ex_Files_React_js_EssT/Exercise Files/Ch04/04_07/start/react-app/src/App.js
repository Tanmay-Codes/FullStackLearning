import "./App.css";
import Checked from "./components/Checked";
import CustomHook from "./components/CustomHook";
import Emotion from "./components/Emotion";
import Fetchingdata from "./components/Fetchingdata";
import Splitscreen from "./components/Splitscreen";

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
  const Lefthandcomponent = () => {
    return <h1 style={{ backgroundColor: "orange" }}>Left</h1>;
  };
  const Righthandcompanent = () => {
    return <h2 style={{ backgroundColor: "yellow" }}>Right</h2>;
  };
  return (
    <>
      <Emotion />
      <Checked />
      <CustomHook />
      <Fetchingdata />
      <Splitscreen lweight={1} rweight={4}>
        <Lefthandcomponent />
        <Righthandcompanent />
      </Splitscreen>
    </>
  );
}

export default App;
