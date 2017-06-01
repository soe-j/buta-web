class ToppingLogsController < ApplicationController
  protect_from_forgery except: [:index, :create]

  def index
    pig = Pig.find_by(name: params[:pig_name])
    topping_logs = pig.topping_logs.offset(params[:offset]).select([:id, :topping_id, :mashi])
    render json: topping_logs
  end

  def create
    pig = Pig.find_by(name: params[:pig_name])
    topping = Topping.find_by(name: params[:topping_name])
    topping_log = pig.topping_logs.new(topping_id: topping.id, mashi: params[:mashi])
    if topping_log.save
      head :created
    else
      head :bad_request
    end
  end
end
