import React from 'react';
import './App.css';
let curDate= new Date();
curDate = curDate.getHours();
let greeting= '';
const cssStyle= {};

function App()
{


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
return (<>
  <div>
   <h1>Hello sir, <span style={cssStyle}>{ greeting }</span></h1>
   </div>
   </>);
}

export default App ;