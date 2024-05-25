document.addEventListener('DOMContentLoaded', () => {
    // Clonar y agregar el encabezado del footer
    const footerTemplate = document.getElementById('footer-template');
    const footerClone = footerTemplate.content.cloneNode(true);
    const footerHeader = footerClone.querySelector('.footer__header');
    footerHeader.classList.add('centered-logo'); // Agrega la clase para centrar el logo
    document.querySelector('.footer').appendChild(footerClone);
  
    // Agregar imagen al encabezado
    const image = document.createElement('img');
    image.width = 40;
    image.height = 40;
    image.src = "../assets/images/logo_color.png";
    image.alt = "Logo Banco Pichincha";
    image.classList.add('responsive-logo'); // Agrega la clase para hacer el logo responsive
    footerHeader.appendChild(image);
  
    // Generar el contenido dinámico del footer
    const container = document.getElementById("footer-container");
    const template = document.getElementById("footer-content-template");
    const content = template.content.cloneNode(true);
    const sectionTitles = ["Sección 1", "Sección 2", "Sección 3", "Sección 4"];
  
    sectionTitles.forEach((title, index) => {
      const section = content.querySelector(".footer-section").cloneNode(true);
      section.querySelector(".section-title").textContent = title;
  
      if (index === 0) {
        const footerContact = document.createElement("div");
        footerContact.classList.add("footer__contact");
        footerContact.innerHTML = `
          <div class="footer__contact__button">
            <img width="30" height="30" src="https://www.pichincha.com/content/published/api/v1.1/assets/CONT8141D47E18844B23AF604B7F4561EDCE/native?cb=_cache_95e1&amp;channelToken=712a6518832146c488cdf196228d8c00" alt="Encuentra tu Banco">
            <div class="footer__contact__button__label">
              <span class="footer__contact__button__text">Encuentra tu Banco</span>
            </div>
          </div>
          <div class="footer__contact__block">
            <span class="footer__content__text">Banca telefónica</span>
            <div class="contact__block__link">
              <img width="24" height="24" src="https://www.pichincha.com/content/published/api/v1.1/assets/CONT370A385506664A11B36AB94B4C7136AB/native?cb=_cache_95e1&amp;channelToken=712a6518832146c488cdf196228d8c00" alt="Teléfono">
              <span>(02) 2999 999</span>
            </div>
          </div>
          <div class="footer__contact__block">
            <span class="footer__content__text">WhatsApp</span>
            <div class="contact__block__link">
              <img width="24" height="24" src="https://www.pichincha.com/content/published/api/v1.1/assets/CONT11CA6D196AEE41E2875ACB10DE74C1EA/native?cb=_cache_95e1&amp;channelToken=712a6518832146c488cdf196228d8c00" alt="WhatsApp">
              <span>096 299 2999</span>
            </div>
          </div>
        `;
        section.appendChild(footerContact);
      } else if (index === 1) {
        const footerLinks = document.createElement("div");
        footerLinks.classList.add("footer__content__items", "footer__content__items--vertical");
        footerLinks.innerHTML = `
          <a href="/banca-web" target="_self" class="footer__content__text">Banca Web</a>
          <a href="/banca-movil" target="_self" class="footer__content__text">Banca Móvil</a>
          <a href="/mi-vecino" target="_self" class="footer__content__text">Mi vecino</a>
          <a href="/deuna" target="_self" class="footer__content__text">Deuna!</a>
          
        `;
        section.appendChild(footerLinks);
      } else if (index === 2) {
        const footerLinks = document.createElement("div");
        footerLinks.classList.add("footer__content__items", "footer__content__items--vertical");
        footerLinks.innerHTML = `
          <a href="/servicio-1" target="_self" class="footer__content__text">Servicio 1</a>
          <a href="/servicio-2" target="_self" class="footer__content__text">Servicio 2</a>
          <a href="/servicio-3" target="_self" class="footer__content__text">Servicio 3</a>
          <a href="/servicio-4" target="_self" class="footer__content__text">Servicio 4</a>
         
        `;
        section.appendChild(footerLinks);
      } else if (index === 3) {
        const footerLinks = document.createElement("div");
        footerLinks.classList.add("footer__content__items", "footer__content__items--vertical");
        footerLinks.innerHTML = `
          <a href="/producto-1" target="_self" class="footer__content__text">Producto 1</a>
          <a href="/producto-2" target="_self" class="footer__content__text">Producto 2</a>
          <a href="/producto-3" target="_self" class="footer__content__text">Producto 3</a>
          <a href="/producto-4" target="_self" class="footer__content__text">Producto 4</a>
          
        `;
        section.appendChild(footerLinks);
      }
  
      container.appendChild(section);
    });
  
    // Clonar el contenido personalizado del footer
    const customFooterTemplate = document.getElementById('custom-footer-template');
    const customFooterClone = customFooterTemplate.content.cloneNode(true);
  
    // Insertar el contenido personalizado del footer al final del contenido dinámico
    const secondFooter = document.querySelectorAll('.footer')[1];
    secondFooter.appendChild(customFooterClone);
  });
  
  
  function initializeFooter() {
    document.addEventListener('DOMContentLoaded', function() {
      // Obtener plantillas del DOM
      const socialIconsTemplate = document.getElementById('social-icons-template').content;
      const legalInfoTemplate = document.getElementById('legal-info-template').content;
      
      // Clonar contenido de las plantillas
      const socialIconsClone = socialIconsTemplate.cloneNode(true);
      const legalInfoClone = legalInfoTemplate.cloneNode(true);
  
      // Insertar clones en el footer y remover las plantillas
      const footer = document.querySelector('.mi-footer');
      footer.appendChild(socialIconsClone);
      footer.appendChild(legalInfoClone);
  
      // Opcional: remover las plantillas después de su uso
      footer.querySelectorAll('template').forEach(template => template.remove());
    });
  }
  
  // Llamar a la función para inicializar el footer
  initializeFooter();
  
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener el contenido del template del DOM
    const template = document.getElementById('main-content-template').content;
    
    // Clonar el contenido del template
    const clone = template.cloneNode(true);
    
    // Insertar el contenido clonado en el main
    const main = document.getElementById('main-template');
    main.appendChild(clone);
  });
  