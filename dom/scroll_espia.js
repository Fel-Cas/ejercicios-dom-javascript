let d=document;
export default function scrollSpy(){
    let $sections=d.querySelectorAll('section[data-scroll-spy]')
    let cb=(entries)=>{
        entries.forEach(entry=>{
            let id=entry.target.getAttribute('id')
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')
            }
        });
    };
    let observer= new IntersectionObserver(cb,{
        //root
        //rootMargin:"-250px"
        threshold:[0.5, 0.75]
    });
    $sections.forEach(element=>{
        observer.observe(element)
    })
}