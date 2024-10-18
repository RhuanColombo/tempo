function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferencaMs = dataFutura - agora;

    if (diferencaMs <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const segundosTotais = Math.floor(diferencaMs / 1000);
    const dias = Math.floor(segundosTotais / (60 * 60 * 24));
    const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
    const segundos = segundosTotais % 60;
  
    return { dias, horas, minutos, segundos };
  }

   function atualizarTemporizador(dataFutura) {
    const { dias, horas, minutos, segundos } = calcularTempoRestante(dataFutura);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }

  function iniciarTemporizador(dataFutura) {
    atualizarTemporizador(dataFutura);

    const intervalId = setInterval(() => {
      atualizarTemporizador(dataFutura);

      if (calcularTempoRestante(dataFutura).dias === 0 &&
          calcularTempoRestante(dataFutura).horas === 0 &&
          calcularTempoRestante(dataFutura).minutos === 0 &&
          calcularTempoRestante(dataFutura).segundos === 0) {
        clearInterval(intervalId);
        alert("A contagem regressiva terminou!");
      }
    }, 1000);
  }
  
  const dataFutura = new Date('2024-12-31T23:59:59');

  iniciarTemporizador(dataFutura);