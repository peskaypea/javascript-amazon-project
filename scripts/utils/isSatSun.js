import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



export function isSatSun(date){
  if(date === 'Saturday' || 'Sunday'){
    console.log("It's the weeekend")
  } else{
    console.log("It's a weekday")
  }
}
