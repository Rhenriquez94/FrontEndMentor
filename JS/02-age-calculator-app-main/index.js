const calcularEdad = ()=>{
  const dia = parseInt(document.getElementById('day').value);
  const mes = parseInt(document.getElementById('month').value);
  const anio = parseInt(document.getElementById('year').value);

  const errorDia = document.getElementById('errorDay');
  const errorMes = document.getElementById('errorMonth');
  const errorAnio = document.getElementById('errorYear');

  errorDia.textContent = '';
  errorMes.textContent = '';
  errorAnio.textContent = '';

  errorDia.style.display = 'none';
  errorMes.style.display = 'none';
  errorAnio.style.display = 'none';


  if (Number.isNaN(dia) || !Number.isInteger(dia) || dia < 1 || dia > 31) {
    errorDia.textContent ='Ingrese Dia correcto';
    errorDia.style.display = 'block';
    return; // detener la ejecución si el día no es válido
  }

  if(Number.isNaN(mes) || !Number.isInteger(mes) || mes < 1 || mes > 12 ){
    errorMes.textContent= 'Debe ingresar Mes del 1 al 12';
    errorMes.style.display = 'block'
    return
  }

  if(Number.isNaN(anio) || !Number.isInteger(anio) || anio >= 2100){
    errorAnio.textContent= 'Debe ingresar año correcto';
    errorAnio.style.display = 'block'
    return
  }


  const today = new Date();
  const birthDate = new Date(`${anio}-${mes}-${dia}`);

  const diffInMilliseconds = Math.abs(today - birthDate);
  const ageDate = new Date(diffInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById('resultadoAnios').textContent = years;
  document.getElementById('resultadoMes').textContent = months;
  document.getElementById('resultadoDias').textContent = days;



};




//   function calcularDiferencia() {
//     const fechaInput = document.getElementById('fechaInput').value;
    
//     Verificar si la fecha tiene el formato correcto dd/mm/yyyy
//     const regex = /^\d{2}\/\d{2}\/\d{4}$/;
//     if (!regex.test(fechaInput)) {
//         alert('Por favor, ingrese una fecha en el formato dd/mm/yyyy.');
//         return;
//     }

//     const partesFecha = fechaInput.split('/');
//     const dia = parseInt(partesFecha[0], 10);
//     const mes = parseInt(partesFecha[1], 10) - 1; // Restar 1 al mes porque en JavaScript los meses van de 0 a 11
//     const anio = parseInt(partesFecha[2], 10);




//     const fechaIngresada = new Date(anio, mes, dia);
//     const fechaActual = new Date();

//     const diferenciaMilisegundos = fechaActual - fechaIngresada;

//     const unAnioEnMilisegundos = 1000 * 60 * 60 * 24 * 365.25; // Aproximación a un año en milisegundos considerando años bisiestos
//     const unMesEnMilisegundos = unAnioEnMilisegundos / 12; // Aproximación a un mes en milisegundos

//     const diferenciaAnios = Math.floor(diferenciaMilisegundos / unAnioEnMilisegundos);
//     const diferenciaMeses = Math.floor(diferenciaMilisegundos / unMesEnMilisegundos);
//     const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

//     const resultado = document.getElementById('resultado');
//     resultado.innerHTML = `
//         Diferencia en años: ${diferenciaAnios} año(s)<br>
//         Diferencia en meses: ${diferenciaMeses} mes(es)<br>
//         Diferencia en días: ${diferenciaDias} día(s)
//     `;
// }