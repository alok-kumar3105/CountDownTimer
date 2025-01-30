const endTime = new Date("Feb 01 2025 00:00:00").getTime();
const stTime = new Date().getTime();
function update(){

    const currTime=new Date().getTime()
    const completedTime=currTime-stTime;
    const leftover=endTime-currTime;

    const milliDay = 24*60*60*1000
    const milliHr = 60*60*1000
    const milliMin = 60*1000
    const milliSec = 1000

    const day=Math.floor(leftover/milliDay)
    const hr=Math.floor((leftover%milliDay)/milliHr)
    const min=Math.floor((leftover%milliHr)/milliMin)
    const sec=Math.floor((leftover%milliMin)/milliSec)
    
    const total_time=endTime-stTime;
    const per=(completedTime/total_time)*100;
    const element = document.getElementById('bar_comp');
    element.style.width=per+"%";

    document.getElementById('days_val').innerHTML=day;
    document.getElementById('hours_val').innerHTML=hr;
    document.getElementById('minutes_val').innerHTML=min;
    document.getElementById('seconds_val').innerHTML=sec;


    if(leftover<0){
        document.getElementById('days_val').innerHTML="0";
        document.getElementById('hours_val').innerHTML="0";
        document.getElementById('minutes_val').innerHTML="0";
        document.getElementById('seconds_val').innerHTML="0";
        // document.getElementById('bar_total').style.backgroundColor="rgb(57, 218, 57)";
        element.style.width="100"+"%";
    }    

}

setInterval(update, 1000)