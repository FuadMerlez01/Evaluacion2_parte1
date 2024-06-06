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

function alertButton() {
   alert("Do you like this?");
   console.log("Alerted");
}
