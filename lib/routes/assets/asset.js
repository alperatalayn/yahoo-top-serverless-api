const mongoose = require('mongoose')
const AssetSchema = new mongoose.Schema({
  ticker: String,
  percentage_change: String,
  exchange: String
})
module.exports = 
{
	Gainers: mongoose.model('gainers', AssetSchema),
	Losers: mongoose.model('losers', AssetSchema)
} 
