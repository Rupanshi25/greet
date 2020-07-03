import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let curDate= new Date();
curDate = curDate.getHours();
let greeting= '';
const cssStyle= {};

if(curDate >=1 && curDate < 12)
{
  greeting="Good Morning";
  cssStyle.color='Red';
}
else if(curDate >= 12 && curDate < 19)
{
  greeting= "Good Afternoon";
  cssStyle.color='Blue';
}
 else
{
  greeting= "Good Night";
  cssStyle.color='black';
}
ReactDOM.render(
  <>
 <div>
  <h1>Hello sir, <span style={cssStyle}>{ greeting }</span></h1>
  </div>
  </>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
