const request = require("request")

// Si quisieramos cambiar por ejemplo, las unidades de los valores que se muestran, le pasamos por parametro "units=f"
// para mostrar en Farenheit por ejemplo. Recordar para agregar un parametro es: &parametro=valor
// Todo esto lo vemos en la documentacion de la API

// Recibe, latitud, longitud y la callback function
const forecast = (x, y, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7d9379432c15f6c015dca1f6e07d3c8d&query=${x},${y}`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to Weather Service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const currentData = body.current
            callback(undefined, `It is currently ${currentData.temperature} degress out. It feels like ${currentData.feelslike} degrees out. There is a ${currentData.precip}% chance of rain. The humidity is: ${currentData.humidity}%.`)
        }
    })
}

module.exports = forecast