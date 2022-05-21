let d=document;
export default function resposiveTester(form,closebtn){
    let $form=d.getElementById(form),
    tester;
    d.addEventListener('submit',e=>{
        if(e.target===$form){
            e.preventDefault();
            tester=window.open($form.url.value,'Tester',$form.ancho.value,$form.alto.value)
        }
    });
    d.addEventListener('click',e=>{
        if(e.target===$form.cerrar){
            tester.close()
        }
    })
}