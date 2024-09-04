<<<<<<< HEAD
function mensajeWhatsap(){
let mensaje = document.getElementById('Mensaje').value;
            if (mensaje === "") {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Escriba el mensaje antes de enviarlo",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                var url = `https://api.whatsapp.com/send?phone=50246079366&text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
            }

=======
function mensajeWhatsap(){
let mensaje = document.getElementById('Mensaje').value;
            if (mensaje === "") {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Escriba el mensaje antes de enviarlo",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                var url = `https://api.whatsapp.com/send?phone=50246079366&text=${encodeURIComponent(mensaje)}`;
                window.open(url, '_blank');
            }

>>>>>>> 07d2acad4d0a5c1fa084b46467bfa481c690cfcd
}