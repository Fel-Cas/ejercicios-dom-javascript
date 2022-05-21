let d=document,w=window;
export default function speechReader(){
    let $speechSelect=d.getElementById('speech-select'),
    $speechTextArea=d.getElementById('speech-text'),
    $speechBtn=d.getElementById('speech-btn');
    let speechMessage=new SpeechSynthesisUtterance();
    let voices=[];
    d.addEventListener('DOMContentLoaded',(e)=>{
        w.speechSynthesis.addEventListener('voiceschanged',(e)=>{
            voices=w.speechSynthesis.getVoices();
            voices.forEach(voice=>{
                let $option=d.createElement('option');
                $option.value=voice.name;
                $option.textContent=`${voice.name} - ${voice.lang}`;
                $speechSelect.appendChild($option);
            })
        });
    });
    d.addEventListener('change',e=>{
        if(e.target===$speechSelect){
            speechMessage.voice=voices.find(voice=>voice.name===e.target.value);
            //console.log(speechMessage)
        }
    });
    d.addEventListener('click',e=>{
        if(e.target===$speechBtn){
            speechMessage.text=$speechTextArea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
}