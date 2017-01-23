class HomeController < ApplicationController
  def index
    @campaigns = Home.all
  end

  def new
    @campaign = Home.new
  end

  def show
    @campaign = Home.find(params[:id])
  end
end
