import { promesifier } from 'services/utils'

const api = {}
/**
 * The provided callback will be called with the result as an object
 * on the form {distance: value}
 */
 /* eslint-ignore */
var getDistanceAPI = function (callback) {
    var distance = {distance: Math.floor((Math.random()*4)+1)},
        delay = Math.floor((Math.random()*1800)+200);
        if (typeof callback !== 'undefined') {
            setTimeout(function () {
                callback(distance);
            }, delay);
        }
};



const getDimension = (resolve, reject) => {
	return getDistanceAPI(({distance}) => {
		console.log('API returns', JSON.stringify(distance))
		resolve(distance)
	})
}

const getDimensions = (numberOfDimensions, resolve, reject) => {
	const promises = []
	for(let i = 0; i < numberOfDimensions; i++) {
		promises.push(api.getDimension())
	}
	const unifiedPromise = Promise.all(promises)
	unifiedPromise.then(resolve)
	unifiedPromise.catch(reject)
}

api.getDimensions = promesifier(getDimensions)
api.getDimension = promesifier(getDimension)

export default api
