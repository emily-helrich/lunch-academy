# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(
	id: 100,
	email: "mark@gmail.com",
	password: "passwsdfsdfsdfsdfsdfsdord1",
	sign_in_count: 1
)

sandwich = Sandwich.create(
	name: "rueben_also",
	description: "it's yum",
	image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Katz%27s_Deli_-_Lunch.jpg/800px-Katz%27s_Deli_-_Lunch.jpg"
)

Review.create(
	user_id: user_1.id,
	sandwich_id: sandwich.id,
	rating: 10,
	body: "have you tried this bro?"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: sandwich.id,
	rating: 5,
	body: "pretty dope"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: sandwich.id,
	rating: 7,
	body: "whaaa!!!"
)
