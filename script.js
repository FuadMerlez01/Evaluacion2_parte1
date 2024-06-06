const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

$(document).ready(function(){
   $('[data-bs-toggle="popover"]').popover({
      placement: 'top',
      trigger: 'hover',
      html: true, // Permite que el contenido sea HTML
      content: function() {
          // Devuelve el contenido del popover desde el elemento especificado en data-bs-content
            return $($(this).data("bs-content")).html();
      }
   });
});

function launch_toast() {
   var x = document.getElementById("toast")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

