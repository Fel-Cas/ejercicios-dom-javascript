 let d=document;
 export default function searchFilter(input, selector){
    d.addEventListener('keyup',e=>{
        if(e.key==='Escape'){
            e.target.value='';
        }
        if(e.target.matches(input)){
            d.querySelectorAll(selector).forEach(element=>{
                element.textContent.toLowerCase().includes(e.target.value.toLowerCase())?element.classList.remove('filter'):element.classList.add('filter');
            })
        }
    });
 }