'use strict'

const {format} = require('tip-integrations/tip-www')
const h = require('hyperscript')

const css = ''

const store = {
	write: (active, amount) => {
		return Promise.resolve()
	},
	read: () => {
		return Promise.resolve({})
	}
}

const load = () => true

const marker = () => document.querySelector('#tip-me-marker')

const photo = '#'

const init = (active = false, tip = 0) => {
	const update = (active, tip) => {}

	update(active, tip) // init ui
	return update
}

module.exports = Object.assign(init, {
	store, parse, format, css, load, marker, photo
})
