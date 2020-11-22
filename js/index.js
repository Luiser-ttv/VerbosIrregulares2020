
        var tiempoElegido = 0;
        var verboElegido = 0;
        var jugando = 0;
        var marcador = 0;

        function comprueba() {
            if (jugando == 0) {
                jugando = 1;

                var verboLeido = document.getElementById('caja').value;

                document.getElementById('botonResultado').classList.remove('btn-dark');
                document.getElementById('botonResultado').classList.remove('btn-success');
                document.getElementById('botonResultado').classList.remove('btn-danger');

                if (verbos[verboElegido][tiempoElegido] == verboLeido) {
                    marcador++;
                    document.getElementById('botonResultado').classList.add('btn-success');
                    document.getElementById('botonResultado').innerText = "Correcto";
                } else {
                    marcador= 0;
                    document.getElementById('botonResultado').classList.add('btn-danger');
                    document.getElementById('botonResultado').innerText = verbos[verboElegido][tiempoElegido];
                }

            } else {
                document.getElementById('botonResultado').classList.add('btn-dark');
                document.getElementById('botonResultado').innerText = "Comprobar";
                jugando = 0;
                eligeVerbo();
            }
            document.getElementById('marcador').innerText = marcador;

        }


        function eligeVerbo() {
            verboElegido = Math.floor(Math.random() * verbos.length);
            tiempoElegido = Math.floor(Math.random() * 3);

            document.getElementById("castellano").innerHTML = verbos[verboElegido][3];

            if (tiempoElegido == 0) {
                document.getElementById("boton1").innerHTML = '<input id="caja" class="form-control">';
            } else {
                document.getElementById("boton1").innerHTML = '<button class="btn btn-block btn-secondary">' + verbos[verboElegido][0] + '</button>';

            }

            if (tiempoElegido == 1) {
                document.getElementById("boton2").innerHTML = '<input id="caja" class="form-control">';
            } else {
                document.getElementById("boton2").innerHTML = '<button class="btn btn-block btn-secondary">' + verbos[verboElegido][1] + '</button>';
            }

            if (tiempoElegido == 2) {
                document.getElementById("boton3").innerHTML = '<input id="caja" class="form-control">';
            } else {
                document.getElementById("boton3").innerHTML = '<button class="btn btn-block btn-secondary">' + verbos[verboElegido][2] + '</button>';

            }


        }

        eligeVerbo();


