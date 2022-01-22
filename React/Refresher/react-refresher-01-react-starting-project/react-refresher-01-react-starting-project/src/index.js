import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// Notice here in the tags <App/> is used instead of <app/>
// THis is so that the react understand that the App is not the build in html tag
// so App with capital 'A' shows that it is a custom components 