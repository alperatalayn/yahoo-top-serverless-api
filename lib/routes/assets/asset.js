const mongoose = require('mongoose')
const AssetSchema = new mongoose.Schema({
  ticker: String,
  percentage_change: String,
  exchange: String,
  currency: String
})
module.exports = 
{
	Gainers: mongoose.model('gainers', AssetSchema),
	Loosers: mongoose.model('loosers', AssetSchema)
} 
