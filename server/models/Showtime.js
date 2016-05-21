var mongoose = require('mongoose');

// Create the ShowtimeSchema.
var ShowtimeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

// Export the model schema.
module.exports = ShowtimeSchema;
