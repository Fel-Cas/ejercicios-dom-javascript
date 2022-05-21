let d=document;
export default function draw(btn,selector){
    let getWinner=(selector)=>{
        let players=d.querySelectorAll(selector),random=Math.floor(Math.random()*players.length);        
        return players[random].textContent;
    }
    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            let result=getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
    
}

let getWinnerComment=(selector)=>{
    let players=document.querySelectorAll(selector),random=Math.floor(Math.random()*players.length);        
    return players[random].textContent;
}
//getWinnerComment('ytd-comment-thread-renderer #author-text span');