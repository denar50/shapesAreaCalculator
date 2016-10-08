import Shape from 'classes/Shape'
import api from 'services/api'
import { promesifier } from 'services/utils'

export default class Triangle extends Shape {
	constructor() {
		super()
		this.dimensions = 2
	}

	calculateArea([base, height]) {
		return (base * height) / 2
	}
}
