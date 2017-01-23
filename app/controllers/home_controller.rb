class HomeController < ApplicationController
  def index
    @campaigns = Home.all
  end

  def new
  end
end
