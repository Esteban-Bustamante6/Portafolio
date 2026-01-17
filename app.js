window.onload = function() {
            alert("¡Bienvenido a mi portafolio, espero que disfrutes de mis proyectos!");
        };

        // Variable global para guardar el texto original
        const textoOriginal = "Hello, I'm Esteban Bustamante, I'm 21 years old. I like technology. I'm intrigued to know how these applications work, and I had the opportunity to develop an API. When I developed this API, I became quite interested in programming. In fact, I'm studying a technology in Software Analysis and Development at the Sena educational institution.";
        let esTextoNuevo = false;

        // Función para interactuar con el texto (alternar contenido)
        function interactuarTexto() {
            const parrafo = document.querySelector('.esteban');
            
            if (parrafo) {
                if (!esTextoNuevo) {
                    // Ponemos el mensaje de agradecimiento
                    parrafo.innerHTML = "<strong>gracias por interactuar estoy aprendiendo java script</strong>";
                    parrafo.style.color = "antiquewhite";
                    parrafo.style.fontSize = "1.2em";
                    esTextoNuevo = true;
                } else {
                    // Restauramos el texto original
                    parrafo.innerHTML = textoOriginal;
                    parrafo.style.color = ""; // Restaura color por defecto del CSS
                    parrafo.style.fontSize = ""; // Restaura tamaño por defecto
                    esTextoNuevo = false;
                }
            }
        }