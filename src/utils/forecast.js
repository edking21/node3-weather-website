const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //NOT UP TO DATE - did not get a weatherstack token
    const url = 'http://api.weatherstack.com/current?access_key=e8aa7195170415189e3a15bac8715f02&query=' + latitude + ','  + longitude + '&units=f'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions[0] + 
                ' It is currently ' + response.body.current.temperature + 
                ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast
