/*
Intenta reescribirlo utilizando un solo operador async

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

*/

async function getProcessedData (url){
    try {
        const data = await downloadData(url)
        const processedData = await processDataInWorker(data)
        return processedData
    } catch (err) {
        console.log(`Ocurrió un error al procesar los datos: ${err}`)
        const fallbackData = await downloadFallbackData(url)
        return fallbackData
    }
}