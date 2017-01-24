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
    home_params = params.require(:home).permit(:campaign_name,:phone_number_receiver,:start_date,:end_date,:start_time,:sms_msg)
    @home = Home.new(home_params)
    @home.save
  end
end
