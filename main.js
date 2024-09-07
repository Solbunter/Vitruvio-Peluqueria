// servicios nueva
document.addEventListener('DOMContentLoaded', () => {
    const servicios = [
        {
          icon: 'scissors',
          name: 'Barbería',
          description: 'Servicios de barbería completos',
          longDescription: 'Cortes y arreglos personalizados para hombres con atención a cada detalle.',
          prices: [
            { name: 'Corte', price: '$7,000' },
            { name: 'Mechas + Corte', price: '$30,000' },
            { name: 'Color global + Corte', price: '$30,000' },
            { name: 'Corte + Cejas', price: '$9,000' },
            { name: 'Corte + Barba', price: '$10,000' },
            { name: 'Cejas', price: '$3,000' },
            { name: 'Barba', price: '$4,000' },
          ]
        },
        {
          icon: 'cut',
          name: 'Corte',
          description: 'Corte y servicios complementarios',
          longDescription: 'Desde cortes simples hasta tratamientos de lavado con hidratación.',
          prices: [
            { name: 'Corte', price: '$10,000' },
            { name: 'Lavado y secado', price: '$8,000' },
            { name: 'Lavado con hidratación', price: '$10,000' },
          ]
        },
        {
          icon: 'droplet',
          name: 'Tratamientos',
          description: 'Tratamientos avanzados para el cabello',
          longDescription: 'Tratamientos de alisado, hidratación y técnicas avanzadas como keratina y botox.',
          prices: [
            { name: 'Brushing y plancha', price: '$15,000' },
            { name: 'Alisado con o sin formol', price: '$30,000' },
            { name: 'Botox o Keratina desde', price: '$20,000' },
            { name: 'Rulos permanentes desde', price: '$35,000' },
            { name: 'Color + hidratación desde', price: '$35,000' },
          ]
        },
        {
          icon: 'palette',
          name: 'Coloración',
          description: 'Servicios de coloración profesional',
          longDescription: 'Desde raíces hasta técnicas avanzadas como balayage y decoloración completa.',
          prices: [
            { name: 'Color desde', price: '$20,000' },
            { name: 'Mechas con o sin papel desde', price: '$40,000' },
            { name: 'Reflejos desde', price: '$35,000' },
            { name: 'Raíces desde', price: '$20,000' },
            { name: 'Color global desde', price: '$30,000' },
            { name: 'Bloque de color desde', price: '$25,000' },
            { name: 'Deco completa desde', price: '$40,000' },
            { name: 'Balayage/desgaste desde', price: '$45,000' },
          ]
        },
        {
          icon: 'hand',
          name: 'Manicuría',
          description: 'Manicuras y diseños personalizados',
          longDescription: 'Consulta los precios y servicios de manicura por WhatsApp.',
          prices: [
            { name: 'Semi liso', price: '$7,000' },
            { name: 'Kapping liso', price: '$9,500' },
            { name: 'Esculpidas lisas', price: '$15,000' },
            { name: 'Soft-gel lisas', price: '$12,000' },
          ]
        },
        {
          icon: 'zap',
          name: 'Depilación Definitiva',
          description: 'Sistema avanzado de depilación definitiva',
          longDescription: 'Consulta por WhatsApp para obtener más información sobre los turnos y servicios.',
          prices: [
            { name: 'Consulta por turnos y precios', price: '' }
          ]
        },
      ];
      
  
    function crearServicioHTML(servicio) {
      return `
        <div class="servicios__item">
          <div class="servicios__header">
            <i data-lucide="${servicio.icon}" class="servicios__icon"></i>
            <div>
              <h3 class="servicios__nombre">${servicio.name}</h3>
              <p class="servicios__descripcion">${servicio.description}</p>
            </div>
            <i data-lucide="chevron-down" class="chevron"></i>
          </div>
          <div class="servicios__contenido">
            <p class="servicios__descripcion-larga">${servicio.longDescription}</p>
            <h4>Precios:</h4>
            <ul class="servicios__precios">
              ${servicio.prices.map(price => `
                <li>
                  <span>${price.name}</span>
                  <span>${price.price}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }
    
      
  
    const container = document.querySelector('.servicios__grid');
    container.innerHTML = servicios.map(crearServicioHTML).join('');
  
    container.addEventListener('click', (e) => {
      if (e.target.closest('.servicios__header')) {
        const item = e.target.closest('.servicios__item');
        const contenido = item.querySelector('.servicios__contenido');
        const chevron = item.querySelector('.chevron');
  
        // Toggle contenido expandido
        if (contenido.classList.contains('expandido')) {
          contenido.classList.remove('expandido');
          chevron.classList.remove('expandido');
        } else {
          document.querySelectorAll('.servicios__contenido').forEach(c => c.classList.remove('expandido'));
          document.querySelectorAll('.chevron').forEach(c => c.classList.remove('expandido'));
          contenido.classList.add('expandido');
          chevron.classList.add('expandido');
        }
      }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const serviciosGrid = document.querySelector('.servicios__grid');
    serviciosGrid.innerHTML = servicios.map(crearServicioHTML).join('');
  
    serviciosGrid.addEventListener('click', (e) => {
      const header = e.target.closest('.servicios__header');
      if (header) {
        const item = header.closest('.servicios__item');
        const contenido = item.querySelector('.servicios__contenido');
        const chevron = item.querySelector('.chevron');
  
        contenido.classList.toggle('expandido');
        chevron.classList.toggle('expandido');
      }
    });
  });



// carousel
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Función para avanzar al siguiente elemento
function goToNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Función para retroceder al elemento anterior
function goToPrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Configurar el intervalo para que avance automáticamente
let interval = setInterval(goToNext, 5000); // Cambia 5000 a la cantidad de milisegundos que quieras

// Opcional: Detener el intervalo cuando se haga clic en los botones
next.addEventListener('click', function () {
    goToNext();
    clearInterval(interval); // Detiene el carrusel automático
    interval = setInterval(goToNext, 5000); // Reinicia el intervalo
});

prev.addEventListener('click', function () {
    goToPrev();
    clearInterval(interval); // Detiene el carrusel automático
    interval = setInterval(goToNext, 5000); // Reinicia el intervalo
});



