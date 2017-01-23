class HomeController < ApplicationController
  def index
    @campaigns = Home.all
  end

  def new
    @home = Home.new
  end

  def show
    @campaign = Home.find(params[:id])
  end

  def create
    @home = Home.create(home_params)
  end
end
