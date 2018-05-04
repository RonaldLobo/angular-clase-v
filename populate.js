var mongoose = require('mongoose');
var await = require('asyncawait/await');
var async = require('asyncawait/async');
mongoose.connect('mongodb://localhost:27017/ngtraining', {
    connectTimeoutMS: 1000
});
var db = mongoose.connection;


db.on('error',function (error) {
    console.log('CONNECTION ERROR:',error);
});
//Output - 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting 
db.once('open',function () {
    console.log('Connected to mongodb');
});

var Schema = mongoose.Schema;

var personSchema = Schema({
  name: String,
  age: Number,
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
});

var carSchema = Schema({
  brand: String,
  plate: String,
  color: String
});

var Car = mongoose.model('Car', carSchema);
var Person = mongoose.model('Person', personSchema);


async function add(argument) {
	var car = await(Car.create({
			'brand':'VW',
			'plate':'301101',
			'color':'white' 
		}));

	var person = await(Person.create({
		'name':'Ronald',
		'age':'27',
		'cars':car._id
	}));

	var persons = await(Person.find({}));
	console.log('persons : ',JSON.stringify(persons));
	var personsPopulated = await(Person.find({}).populate('cars'));
	console.log('------------')
	console.log('populated : ',JSON.stringify(personsPopulated));
}


add();







