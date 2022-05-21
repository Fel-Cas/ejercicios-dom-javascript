export default function Hamburguer(panelBtn,panel,menuLink){
    let d=document;
    d.addEventListener('click',(e)=>{
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){
            let $panel=d.querySelector(panel);
            $panel.classList.toggle('is-active')
            d.querySelector(panelBtn).classList.toggle('is-active');
        }
        if(e.target.matches(menuLink)){
            let $panel=d.querySelector(panel);
            $panel.classList.remove('is-active')
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });
}