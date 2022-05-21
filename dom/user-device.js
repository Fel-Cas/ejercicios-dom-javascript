let d=document,n=navigator,ua=n.userAgent;
export default function userDeviceInfo(id){
    let $div=d.getElementById(id),
    isMobile={
        android:()=> ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=> ua.match(/windows phone/i),
        any:function(){
            return this.android()|| this.ios()||  this.windows();
        }
    },
    isDesktop={
        linux:()=> ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=> ua.match(/windows nt/i),
        any:function(){
            return this.linux()|| this.mac()|| this.windows()
        }
    },
    isBrowser={
        chrome:()=> ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/m|sie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        brave:()=>ua.match(/isbrave/i),
        any:function(){
            return this.chrome()||this.edge()|| this.firefox()|| this.safari() || this.opera() || this.ie()|| this.brave()
        }
    };
    $div.innerHTML=`
    <ul>
    <li>User Agent <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;
    /* Contenido exclusivo**/
    if(isBrowser.chrome())$div.innerHTML+=`<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    if(isBrowser.firefox()) { $div.innerHTML+=`<p><mark>Este contenido solo se ve en FireFox</mark></p>`};
    if(isBrowser.edge()) { $div.innerHTML+=`<p><mark>Este contenido solo se ve en Edge</mark></p>`};

    if(isDesktop.windows())$div.innerHTML+=`<p><mark>Descarga nuestro Software para Windows</mark></p>`
    if(isDesktop.linux())$div.innerHTML+=`<p><mark>Descarga nuestro Software para Linux</mark></p>`
    if(isDesktop.mac())$div.innerHTML+=`<p><mark>Descarga nuestro Software para Mac OS</mark></p>`

    /** Redirecciones **/
    if(isMobile.android()) window.location.href='https://jonmircha.com';
    
}