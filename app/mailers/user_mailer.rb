class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

   def welcome_email(user)
     @user = user
     @url  = 'http://lunchacademy.com/login'
     mail(to: @user.email, subject: 'Welcome to Lunch Academy!')
   end

   def new_review_email(sandwich, new_review)
     @url = "www.lunchacademy.com/sandwiches/#{sandwich.id}"
     @sandwich = sandwich
     @user = sandwich.user
     @review = new_review
     mail(to: @user.email, subject: "Someone left a new review on your sandwich")
   end

end
