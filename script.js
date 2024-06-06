   let message = 'Este es el mensaje por defecto';
   let title = 'Título del Offcanvas';

   // Función para actualizar el mensaje y el título
   const updateContent = () => {
      message = document.getElementById('datoTexto').value || 'Este es el mensaje por defecto';
      title = document.getElementById('datoTitulo').value || 'Título del Offcanvas';
      document.getElementById('my-popover').innerText = message; // Actualiza el contenido del popover
      document.getElementById('offcanvasScrollingLabel').innerText = title; // Actualiza el título del offcanvas
      document.getElementById('offcanvasContent').innerText = message; // Actualiza el contenido del offcanvas
   };

   // Mostrar Alerta
   const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
   const appendAlert = (message, type) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
         `   <div>${message}</div>`,
         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
         '</div>'
      ].join('');
      alertPlaceholder.append(wrapper);
   };

   const alertTrigger = document.getElementById('liveAlertBtn');
   if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
         appendAlert(message, 'success');
      });
   }

   // Mostrar Popover
   $(document).ready(function() {
      $('[data-bs-toggle="popover"]').popover({
         placement: 'top',
         trigger: 'hover',
         html: true,
         content: function() {
               return message;
         }
      });
   });

   // Mostrar Toast
   function launch_toast() {
      const desc = document.getElementById('desc');
      desc.innerText = message;

      var x = document.getElementById("toast");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
   }

   // Evento para actualizar el mensaje y el título al hacer clic en el botón
   document.getElementById('updateTextBtn').addEventListener('click', updateContent);
