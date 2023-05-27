
fetch( 'https://open-weather-map27.p.rapidapi.com/weather')




/* FUNCIÓN JQUERY QUE SE EJCUTA AL FINALIZAR LA CARGA DEL DOM O DOMINIO (PAGÍNA HTML)*/
$(document).ready(function(){


    /* DEFINICIÓN DE MANEJADOR DE VENTO PARA LA ACCIÓN click SOBRE EL ELEMENTO CON ID btnlogin DEL DOM (SOLO SE EJECUTA CUANDO LA ACCIÓN DE HACER CLICK SE REALICÉ) */
    $("#btnlogin").click(function(){
    $("txtcorreo").blur(function(){
            alert("el input de correo ha perdido el foco");
    
        });
    
        /* DECLARATIVA PARA OBTENER EL VALOR DE UN ELEMENTO CON ID txtcorreo DEL DOM Y ASIGNARLO A LA VARIABLE email */
        var email = $("#txtcorreo").val();

        /* DECLARATIVA PARA OBTENER EL VALOR DE UN ELEMENTO CON ID txtclave DEL DOM Y ASIGNARLO A LA VARIABLE email */
        var clave = $("#txtclave").val();

        /* VALIDAR QUE EL email o clave ESTEN VACÍOS */
        if(email == "" || clave == ""){
            
            Swal.fire({
                title: 'Error',
                text: 'Campos Vacios',
                icon: 'error',
            
            }

            );

             //$("#error").removeClass("d-none");
            // INSERTA,AGREGA O INYECTA CONTENIDO HTML EN EL ELEMENTO CON ID error DEL DOM 
            //$("#error").html("<h1>Campos vacíos</h1>");
        }
        /* EN CASO DE NO ESTAR VACIÓS SE REALIZAN LAS SIGUIENTES ACCIONES */
        else{
            /* VALIDAR QUE EL NOMBRE DE USUARIO Y CONTRASEÑAS SON admin y 123 RESPECTIVAMENTE*/
            /* NOTA LA EXPRESIÓN == SOLO COMPARA VALORES Y NO TIPOS DE DATOS DEJANDO A JS EL TRABAJO DE VERIFICACIÓN
               SI QUEREMOS VALIDAR EL VALOR Y EL TIPO DE DATO SE DEBE COLOCAR === . EN ESTE CASO ESTAMO VALIDANDO
               QUE LAS VARIABLES email y clave TENGAN LOS VALORES admin y 123 Y TAMBIÉN VERIFICANDO QUE AMBOS CAMPOS
               SEAN DE TIPO TEXTO */

            if(email === "admin" && clave === "1234"){

                Swal.fire({
                    title: 'Exito!',
                    text: 'Usuario correcto.',
                    icon: 'success',
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                
                }
                );
                
                /* AGREGA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID error DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */    

                $("#error").addClass("d-none");
                /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID correcto DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */        

                $("#correcto").removeClass("d-none");
            }
            /* EN CASO DE QUE LA CONTRASEÑA Y USUARIOS NO SEAN LOS CORRECTOS SE REALIZARÁ LA SIGUIENTE ACCIÓN. */
            else{
                /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID error DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                 
                //$("#error").removeClass("d-none");
                Swal.fire({
                    title: 'Usuario Incorrecto',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  });
    
            
                /* INSERTA,AGREGA O INYECTA CONTENIDO HTML EN EL ELEMENTO CON ID error DEL DOM */
                //$("#error").html("<h1>No existe usuario</h1>");
            }






        }

    });

});