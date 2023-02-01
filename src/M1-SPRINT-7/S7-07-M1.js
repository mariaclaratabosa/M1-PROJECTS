document.getElementById('interruptor').addEventListener('click', (event) => {
  const lampada = document.getElementById('lampada')
  if(lampada.classList.contains('off')){
    lampada.classList.add('on')
    lampada.classList.remove('off')
    interruptor.classList.add('interruptorOn')
    interruptor.classList.remove('interruptorOff')
  } else {
    lampada.classList.add('off')
    lampada.classList.remove('on')
    interruptor.classList.add('interruptorOff')
    interruptor.classList.remove('interruptorOn')
  }
})
