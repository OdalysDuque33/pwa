// Declaración de un custom element que hereda de HTMLElement
class PMuscial extends HTMLElement {
    constructor() {
      // Siempre debe llamarse primero al constructor padre
      super();
  
      // Se crea el shadow root
      var shadow = this.attachShadow({mode: 'open'});
  
      // Se crea un elemnto img y se asignan sus atributos.
      var img = document.createElement('img');
      img.alt = this.getAttribute('data-name');
      img.src = this.getAttribute('data-img');
      img.width = '120';
      img.height = '120';
      img.className = 'platmusic-img';
  
      // Añadir la imagen al shadow root.
      shadow.appendChild(img);
  
      // Añadir un elemento de escucha a la imagen.
      img.addEventListener('click', () => {
        window.location = this.getAttribute('data-url');
      });
  
      // Crear un enlace al producto.
      var link = document.createElement('a');
      link.innerText = this.getAttribute('data-name');
      link.href = this.getAttribute('data-url');
      link.className = 'platmusic-name';
  
      // Añadir el enlace al shadow root.
      shadow.appendChild(link);
    }
  }
  
  // Definir el nuevo elemento.
  customElements.define('p-musical', PMuscial);
  