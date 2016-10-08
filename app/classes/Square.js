import Shape from 'classes/Shape'
import api from 'services/api'
import { promesifier } from 'services/utils'

export default class Square extends Shape {
	constructor() {
		super()
		this.dimensions = 2
	}

	calculateArea([width, height]) {
		return width * height
	}
}
