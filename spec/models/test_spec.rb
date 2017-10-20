require 'spec_helper'

describe Sandwich do
	it { should have_valid(:name).when("Hamburger") }
	it { should_not have_valid(:name).when(nil, "") }

	it { should have_valid(:description).when("delicious grilled sandwich") }
	it { should_not have_valid(:description).when(nil, "")}

	it { should have_valid(:image_url).when("google.com") }
	it { should_not have_valid(:image_url).when(nil, "")}
end


describe Review do
	# it { should have_valid(:user_id).when(2) }
	# it { should_not have_valid(:user_id).when(nil, "") }

	it { should have_valid(:sandwich_id).when(2) }
	it { should_not have_valid(:sandwich_id).when(nil, "")}


	it { should have_valid(:rating).when(3) }
	it { should_not have_valid(:rating).when(nil, "")}

	it { should have_valid(:body).when("delicious!") }
	it { should_not have_valid(:body).when(nil, "")}
end
