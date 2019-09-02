import React from 'react';
import { render } from 'react-dom';
import App from './App';


const groceries =[

{name: 'banana',
id: 1,
purhcased: false
},

{name: 'apple',
id: 2,
purhcased: false
},

]


render(<App />, document.getElementById('root'));


