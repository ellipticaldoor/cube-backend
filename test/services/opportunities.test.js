const assert = require('assert')
const app = require('../../src/app')

describe("'opportunities' service", () => {
	it('registered the service', () => {
		const service = app.service('opportunities')

		assert.ok(service, 'Registered the service')
	})
})
