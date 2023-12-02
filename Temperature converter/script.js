function convert() {
  const celsius = Number(document.getElementById('celsiusVal').value)
  // console.log(celsius)
  // console.log(typeof celsius)
  const farenheit = (celsius * 9/5) + 32
  // console.log(farenheit)
  // console.log(typeof farenheit)
  document.getElementById('displayResult').textContent = `Temperature is ${farenheit} F`
}

// to farenheit 

function farenheit() {
  const farenheit = Number(document.getElementById('farenheitVal').value)
  const celsius = (farenheit - 32) * 5/9
  document.getElementById('displayResult').textContent = `Temperature is ${celsius.toFixed(2)} C`
  
}

