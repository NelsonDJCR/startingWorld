//con opción de TYPE  //tipos de popups: error, success, warning, info, question
$("#btn2").click(function(){
    /*Swal.fire({
        //error
        type: 'error',
        title: 'Error',
        text: '¡Algo salió mal!',        
    });*/
    Swal.fire({        
        type: 'success',
        title: 'Éxito',
        text: '¡Perfecto!',        
    });
});	
//With  image
$("#btn3").click(function(){
    Swal.fire({
        imageUrl: 'img/html5.png',
        imageHeight: 100,
        imageAlt: 'A tall image',
        footer:'<a href="como.php">¿Are you motivate?</a>',
    });
});	

//Con posicionamiento - por defecto es centrada
//Posibles valores: 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.

$("#btn4").click(function(){
    Swal.fire({
        position: 'top-start', //permite "top-end"
        type: 'success',
        title: 'Tú trabajo ha sido grabado',
        showConfirmButton: false,
        timer: 2000 //el tiempo que dura el mensaje en ms
    });    
});

//Animada tiene que ir en la propiedad popup
// popup: 'animated nombreDelEfecto'
$("#btn5").click(function(){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: {
            popup: 'animated swing'
        }
    });
});	

//cambiando el background
$("#btn6").click(function(){
    Swal.fire({
        title: 'Personalizando ancho, padding y background.',
        width: 600,
        padding: '5em',
        type: 'success',
        background: '#fff url(/img/imagen_600x500.png)', //es el fondo de la caja de dialogo
        backdrop: `
rgba(5, 5, 25, 0.4)
url("img/mr.gif")
center left
no-repeat
`
    });
});



//With TIMER
let timerInterval
$("#btn8").click(function(){
    Swal.fire({
        type:'success',
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> seconds.',
        timer: 2000, //tiempo del timer
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
        ) {
            console.log('I was closed by the timer')
        }
    });    
});
