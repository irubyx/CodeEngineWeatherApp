const request = require("request")

const geoCode = (address, callBack) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2ViYWZyaXBwMjAyNSIsImEiOiJjbDJvdno5c3owMzR5M2pxcDFhdXR6bjhmIn0.ZITHZIOcmgz1nLfS2xf1QA&limit=3"

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callBack("Unable to connect to Location Services!", undefined)
        } else if (body.features.length === 0) {
            callBack("Unable to find location! Try another search", undefined)
        } else {
            callBack(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode