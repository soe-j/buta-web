class ToppingLogsController < ApplicationController
  protect_from_forgery except: [:create]

  def index
    pig = Pig.find_by(name: params[:pig_name])
    topping_logs = pig.topping_logs\
      .offset(params[:offset]).order(:id)\
      .joins(:topping)\
      .select([:id, 'name as topping_name', :mashi])

    render json: topping_logs
  end

  def first
    pig = Pig.find_by(name: params[:pig_name])
    topping_logs = pig.topping_logs\
      .offset(params[:offset]).order(:id)\
      .joins(:topping)\
      .select([:id, 'name as topping_name', :mashi])

    if topping_logs.empty?
      render json: nil
    else
      render json: topping_logs[0]
    end
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
