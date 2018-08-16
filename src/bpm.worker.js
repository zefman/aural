let interval
onmessage = (evt) => {
  if (evt.data.command === 'start') {
    console.log('Hellooo')
    postMessage('tick')
    interval = setInterval(() => { postMessage({}) }, evt.data.interval)
  } else if (evt.data.command === 'stop') {
    clearInterval(interval)
  }
}
