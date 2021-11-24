class EmailsController < ApplicationController
  def index
    @emails = Email.all
  end

  def create
    require 'faker'

    @email = Email.create(
      object: Faker::Beer.brand,
      body: Faker::Movie.quote
    )

    respond_to do |format|
      format.html { redirect_to emails_path }
      format.js { }
    end
  end
end
