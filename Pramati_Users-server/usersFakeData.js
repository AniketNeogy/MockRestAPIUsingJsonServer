var faker = require('faker')

function generateUsers(){
	var Users = []
	
	for (var id = 0; id < 15; id++){
		
		var firstName = faker.name.firstName();
		var lastName = faker.name.lastName();
		var email = faker.internet.email();
		var designation = faker.name.jobTitle();
		var phoneNumber = faker.name.phoneNumber;
		var Address = [];
		var Permanent_Address;
		var Temporary_Address;
		var Skills = [];
		
		
		if(id%2==0){
		Permanent_Address = {
						"Address Line1": "Road 123, Gachibowli",
						"Address Line2": "Indiranagar",
						"City": "Hyderabad",
						"State": "Telangana"
						};
		Temporary_Address = {
						"Address Line1": "Road 420, Mithila Nagar",
						"Address Line2": "Banjara Hills",
						"City": "Hyderabad",
						"State": "Telangana"
					};
		Skills.push("Java", "DevOps", "Python");
		}
		else{
		Permanent_Address = {
						"Address Line1": "Grand Terminal Road",
						"Address Line2": "Kukatpally",
						"City": "Hyderabad",
						"State": "Telangana"
						};
		Temporary_Address = {
						"Address Line1": "Road 56, Santosh Colony",
						"Address Line2": "SR Nagar",
						"City": "Hyderabad",
						"State": "Telangana"
					};
		Skills.push("Java", "Selenium", "Rest Assured","Selenium");
		}
		
		
		
		Address.push({"Permanent Address" : Permanent_Address,
					  "Temporary Address" : Temporary_Address});
		
		Users.push({
			"id":id,
			"first_name" : firstName,
			"last_name" : lastName,
			"email" : email,
			"Designation" : designation,
			"phoneNumber" : phoneNumber,
			"Address": Address,
			"Skills" : Skills
		})
	}
	return{"Users" : Users}
}

module.exports = generateUsers