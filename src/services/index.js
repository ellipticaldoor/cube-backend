const opportunities = require('./opportunities/opportunities.service.js')
module.exports = function() {
	const app = this // eslint-disable-line no-unused-vars
	app.configure(opportunities)
}
