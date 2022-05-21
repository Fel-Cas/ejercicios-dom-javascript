let d=document;
let x=0,y=0;
export function shortcuts(e){
    if(e.key==='a' && e.altKey){
        alert('Haz lanzado un alerta con el teclado');
    }
    if(e.key==='c' && e.ctrlKey){
        confirm('Haz lanzado un confirm con el teclado');
    }
    if(e.key==='p' && e.altKey){
        prompt('Haz lanzado un aviso con  el teclado');
    }
}
export function moveBall(e,ball,stage){
    let $ball=d.querySelector(ball),$stage=d.querySelector(stage), $limitsBall=$ball.getBoundingClientRect(),$limitsStage=$stage.getBoundingClientRect();
    switch(e.keyCode){
        case 38:
            y-=1;           
            if($limitsBall.top<$limitsStage.top){
                e.preventDefault();
                y+=1;
            }
            break;
        case 40:
            y+=1           
            if($limitsBall.bottom>$limitsStage.bottom){
                e.preventDefault();
                y-=1;
            }
            break;
        case 37:
            x-=1;            
            if($limitsBall.left<$limitsStage.left){
                e.preventDefault();
                x+=1;
            }
            break;
        case 39:
            x+=1;
           
            if($limitsBall.right>$limitsStage.right){
                e.preventDefault();
                x-=1;
            }
            break;
        default:
            break;
    }
    $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
    
}