/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um cronômetro de duas formas.
 *  1. Armazenar os milisegundos, segundos, minutos e horas e incrementar
 *     cada uma destas unidades quando necessário. Lembre-se que se milisegundos
 *     exceder 999 você deve incrementar uma unidade em segundos e assim continua.
 *  2. Você pode armazenar somente os milisegundos e incrementá-lo quando necessário.
 *     Após isso, você consegue obter horas minutos e segundos usando simples fórmulas
 *     matemáticas.
 *
 *  Depois de computar os valores de milisegundos, segundos, minutos e horas,
 *  atualize o HTML chamando o método updateVisualization(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML dos elementos retornados.
 *
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;

function start() {
  timer();
  interval = setInterval(timer,1);
}

function reset() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  milliseconds = 0;
  hours = 0;
  start();
}
function stop() {
  clearInterval(interval);
  
}

function timer() {

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("milliseconds").innerHTML = milliseconds;

  milliseconds++;
  if (milliseconds == 1000){
    seconds++;
    milliseconds = 0;
  }
  if (seconds == 60){
    minutes++;
    seconds = 0;
  }
  if (minutes == 60){
    hours++;
    minutes = 0;
  }
  
}
