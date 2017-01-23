class HomeController < ApplicationController
  def index
    @campaigns = Home.all
  end

  def new
  end

  def show
    @campaign = Home.find(params[:id])
    render text: @campaign.campaign_name
  end
end
