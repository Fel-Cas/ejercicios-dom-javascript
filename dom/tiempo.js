export  function DigitalClock(panel,iniciarReloj,pararReloj){
    let d=document;
    let $panel=d.getElementById(panel);
    let reloj;
    d.addEventListener('click',(e)=>{
        
        if(e.target.matches(iniciarReloj)){
            reloj=setInterval(()=>{
                $panel.textContent= (new Date).toLocaleTimeString();
            },1000);
            e.target.disabled=true;
        }
        if(e.target.matches(pararReloj)){
            $panel.textContent='';
            clearInterval(reloj);
            d.querySelector(iniciarReloj).disabled=false;
        }
    });
}
 export function Alarm(alarm,iniciarAlarma,pararAlarma){
    let d=document;
    let alarmTempo;
    let $alarm=d.createElement('audio');
    $alarm.src=alarm;
    d.addEventListener('click',(e)=>{
        if(e.target.matches(iniciarAlarma)){
            alarmTempo=setTimeout(() => {
                $alarm.play();
            },1000);
        }
        if(e.target.matches(pararAlarma)){
            clearTimeout(alarmTempo)
        }
    });
 }