// Initializes the `opportunities` service on path `/opportunities`
const createService = require('feathers-nedb')
const createModel = require('../../models/opportunities.model')
const hooks = require('./opportunities.hooks')
const filters = require('./opportunities.filters')

module.exports = function() {
	const app = this
	const Model = createModel(app)
	const paginate = app.get('paginate')

	const options = {
		name: 'opportunities',
		Model,
		paginate,
	}

	// Initialize our service with any options it requires
	app.use('/opportunities', createService(options))

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('opportunities')

	service.hooks(hooks)

	if (service.filter) {
		service.filter(filters)
	}
}
