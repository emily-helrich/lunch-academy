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

Sandwich.create(
	name: "Grilled Cheese",
	description: "Toast and cheese",
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3NNZ-K5nXiuDTWnSyHWzsVsTN8O6KKBoDe8w2OLRA_Af-RXq"
)
Sandwich.create(
	name: "Peanut Butter and Jelly",
	description: "classic american lunch",
	image_url: "http://www.seriouseats.com/images/20070401istockpbjbeauty.jpg"
)
Sandwich.create(
	name: "Burrito",
	description: "Sometimes spicy wrap which characteristically contains rice, beans, meat, and veggies.",
	image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9ic-tRBq70oNDBMCTTdLuxIZF9FL28Cwb6LHbeM2oU1YkfpgMg"
)
Sandwich.create(
	name: "Fluffernutter",
	description: "A twist on the pb&j that features fluff, the delicious sticky spread that originated right here in Massacusetts",
	image_url: "http://300cdn.strategicinforma.netdna-cdn.com/wp-content/uploads/2015/04/287flufferlo.jpg"
)

Sandwich.create(
	name: "Ham and Cheese Crepe",
	description: "Classic Parisian lunch with savory filling and scrumptious texture.  But is it a sandwich?  You tell me.",
	image_url: "https://foodal.com/wp-content/uploads/2015/08/Ham-And-Cheese-Crepes-ph.jpg"
)

Sandwich.create(
	name: "Cheeseburger",
	description: "Grilled meal that is a quintessential part of the american barbeque",
	image_url: "http://wgcl.images.worldnow.com/images/14942230_G.jpg"
)

Review.create(
	user_id: user_1.id,
	sandwich_id: 2,
	rating: 5,
	body: "have you tried this bro?"
)
Review.create(
	user_id: 1,
	sandwich_id: sandwich.id,
	rating: 4,
	body: "pretty dope"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 3,
	rating: 2,
	body: "whaaa!!!"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 4,
	rating: 1,
	body: "You really thing That's a sandwich??"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 3,
	rating: 5,
	body: "Sooo good"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 6,
	rating: 1,
	body: "Has a nice texture.  Flavor kinda threw me off though.  So unexpected."
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 2,
	rating: 1,
	body: "pretty alright"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 5,
	rating: 1,
	body: "I want to eat these every day.  They're AmAZiNg!"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 1,
	rating: 5,
	body: "Loved it!"
)
Review.create(
	user_id: user_1.id,
	sandwich_id: 1,
	rating: 1,
	body: "Meh."
)
