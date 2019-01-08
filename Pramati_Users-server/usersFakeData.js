var faker = require('faker')

function generateUsers(){
	var Users = []
	
	for (var id = 0; id < 15; id++){
		
		var firstName = faker.name.firstName();
		var lastName = faker.name.lastName();
		var email = faker.internet.email();
		var designation = faker.name.jobTitle();
		var phoneNumber = faker.name.phoneNumber;
		var companyName = faker.company.companyName();
		var Address = [];
		var Skills = [];
		var streetName = faker.address.streetName();
		var streetAddress = faker.address.streetAddress();
		var country = faker.address.country();
		var city = faker.address.city();
		var state = faker.address.state();
		var zipCode = faker.address.zipCode();
		var Permanent_Address = {
						"Address Line1": streetName,
						"Address Line2": streetAddress,
						"City": city,
						"State": state,
						"Country" : country,
						"zipCode" : zipCode
						};
						
		var streetName1 = faker.address.streetName();
		var streetAddress1 = faker.address.streetAddress;
		var country1 = faker.address.country();
		var city1 = faker.address.city();
		var state1 = faker.address.state();
		var zipCode1 = faker.address.zipCode();
		var Temporary_Address = {
						"Address Line1": streetName1,
						"Address Line2": streetAddress1,
						"City": city1,
						"State": state1,
						"Country" : country1,
						"zipCode" : zipCode1
						};
		if(id%2==0){
		Skills.push("Java", "DevOps", "Python");
		}
		else{
		Skills.push("Java", "Selenium", "Rest Assured","Selenium");
		}
		
		
		
		Address.push({"Permanent Address" : Permanent_Address,
					  "Temporary Address" : Temporary_Address});
		
		Users.push({
			"id":id,
			"first_name" : firstName,
			"last_name" : lastName,
			"email" : email,
			"companyName" : companyName,
			"designation" : designation,
			"phoneNumber" : phoneNumber,
			"Address": Address,
			"Skills" : Skills
		})
	}
	return{"Users" : Users}
}

module.exports = generateUsers