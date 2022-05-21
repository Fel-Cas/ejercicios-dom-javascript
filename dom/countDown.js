let d=document;
export default function countDown(date,paragraph,message){
    let $paragraph=d.querySelector(paragraph);
    let count,countDownDate=new Date(date).getTime();
    count=setInterval(()=>{
        let now=new Date().getTime()
        let limitTime=countDownDate-now;
        let days,hours,minutes,seconds;
        days=Math.floor(limitTime/(1000*60*60*24));
        hours=("0"+Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2);
        minutes=("0"+Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2);
        seconds=("0"+Math.floor((limitTime%(1000*60))/(1000))).slice(-2)
        if(limitTime<0){
            $paragraph.textContent=message;
            clearInterval(count);
            return
        }
        $paragraph.textContent=`Faltan: ${days} días, ${hours} horas, minutos ${minutes} y ${seconds} segundos`
    },1000);
    
    
}