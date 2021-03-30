

class InfoMusicUp extends HTMLElement {
    constructor() {
      // cuando se trata de una clase que extiende otra clase tenemos que utilizar la palabra clave super para invocar la clase padre
      super();
  
      // creando shadow root
      var shadow = this.attachShadow({ mode: "open" });
      // si mode es "open" quiere decir que que es posible acceder y  manipular el shadow DOM con JavaScript
  
      // Creando la estructura del shadow DOM
      var wrapper = document.createElement("span");
      wrapper.setAttribute("class", "wrapper");
  
      var icon = document.createElement("span");
      icon.setAttribute("class", "icon");
      icon.setAttribute("tabindex", 0);
  
      var info = document.createElement("span");
      info.setAttribute("class", "info");
  
      // Toma el valor del atributo text del popup-info y lo utiliza como text-content de info
      var text = this.getAttribute("text");
      info.textContent = text;
  
      // Añade la imágen para el ícono
      var imgUrl;
      if (this.hasAttribute("img")) {
        imgUrl = this.getAttribute("img");
      } else {
        imgUrl =
          "https://clublecturascifi.files.wordpress.com/2016/10/info-la-wash.png?w=238";
      }
      var img = document.createElement("img");
      img.src = imgUrl;
      icon.appendChild(img);
  
      //Los estilos para el shadow DOM
      var style = document.createElement("style");
  
      style.textContent = `
  .wrapper {
    position: relative;
  }
  
  .info {
    font-size: 0.8rem;
    width: 170px;
    display: inline-block;
    border: 1px solid black;
    padding: 10px;
    background: white;
    border-radius: 10px;
    opacity: 0;
    transition: 0.6s all;
    position: absolute;
    bottom: 20px;
    left: 10px;
    z-index: 3;
  }
  
  img {
    width: 75px;
  }
  
  .icon:hover + .info, .icon:focus + .info {
    opacity: 1;
  }`;
  
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
    }
  }
  
  // Definir el nuevo elemento
  customElements.define("music-info", InfoMusicUp);
  
  // // Una vez definida la nueva clase de elementos, podemos utilizar el nuevo tipo de elementos en el HTML
  
  