let d=document,ls=localStorage;
export default function darkTheme(btn, classDark){
    let $themeButton=d.querySelector(btn),$selectors=d.querySelectorAll('[data-dark]');
    let moon='🌙';
    let sun='☀️';
    let lightMode=()=>{
        $selectors.forEach(element=>{
            element.classList.remove(classDark);
        });
        $themeButton.textContent=sun;
    }
    let darkMode=()=>{
        $selectors.forEach(element=>{
            element.classList.add(classDark);
        });
        $themeButton.textContent=moon;
    }
    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            if($themeButton.textContent==moon){
                lightMode();
                ls.setItem('theme','light');
            }else{
                darkMode();
                ls.setItem('theme','dark');
            }
        }
    });
    d.addEventListener('DOMContentLoaded',(e)=>{
        if((ls.getItem('theme'))===null){
            ls.setItem('theme','light');
        }
        if(ls.getItem('theme')==='light'){
            lightMode();
        }
        if(ls.getItem('theme')==='dark'){
            darkMode();
        }
    });
}