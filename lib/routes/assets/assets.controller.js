const express = require('express')
const assetsController = express.Router()
const {Gainers, Loosers} = require('./asset')

assetsController
  .get('/', async (req, res, next) => {
  	
  	let perPage = 20
  	let page = 0
  	  	
  	if(req.query.size)
  	{
  		perPage = req.query.size		
  	}
  	
  	if(req.query.page)
  	{
  		page = req.query.page	
  	}
        
  	let date_ob = new Date();
  	// current date
  	// adjust 0 before single digit date
  	let date = ("0" + date_ob.getDate()).slice(-2);
  	
  	// current month
  	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  	
  	// current year
  	let year = date_ob.getFullYear();
  	
  	let full_date = date + "-" + month + "-" + year
  	
  	if (!(req.query.type))
  	{
  		const gainers = await Gainers.find()
	        .limit(perPage)
	        .skip(perPage * page)
	        .sort(
	        	'-createdOn'
	        )
	        
	    const loosers = await Loosers.find()
	    	.limit(perPage)
	        .skip(perPage * page)
	        .sort(
	        	'-createdOn'
	        )
	    res.status(200).send({
	    	date : full_date,
	    	gainers,
	    	loosers
	    })
  	}
  	
  	if (req.query.type && (req.query.type === "loosers"))
  	{
  		const loosers = await Loosers.find()
	        .limit(perPage)
	        .skip(perPage * page)
	        .sort(
	        	'-createdOn'
	        )
	    res.status(200).send({
	    	date : full_date,
	    	loosers
	    })	
  	}
  	
  	if (req.query.type && (req.query.type === "gainers"))
  	{
  		const gainers = await Gainers.find()
	        .limit(perPage)
	        .skip(perPage * page)
	        .sort(
	        	'-createdOn'
	        )
	    res.status(200).send({
	    	date : full_date,
	    	gainers
	    })
  	}
  })


module.exports = assetsController
