let d=document,n=navigator;
export default function getGeolocation(id){
    let $div=d.getElementById(id),
    options={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    };
    let success=(position)=>{
        $div.innerHTML=`<p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: ${position.coords.latitude}</li>
            <li>Longitud: ${position.coords.longitude}</li>
            <li>Precisión ${position.coords.accuracy} (m)</li>
        </ul>
        <a href='https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z' target='_blank' rel='noopener'>Ver en google maps</a>
        `
    }
    let error=(err)=>{
        $div.innerHTML=`<p><mark>Error ${err.code}: ${err.message}</mark> </p>`
        console.log(err);
    }
    n.geolocation.getCurrentPosition(success,error,options)
}