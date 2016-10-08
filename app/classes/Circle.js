import Shape from 'classes/Shape'
import api from 'services/api'

export default class Circle extends Shape {
	constructor() {
		super()
		this.dimensions = 1
	}

	calculateArea(radius) {
		return Math.PI * Math.pow(radius, 2)
	}
}
