class PigsController < ApplicationController

  def index
  end

  def show
    @pig = Pig.find_by(name: params[:name])
    gon.pig_name = @pig.name
    gon.offset = ToppingLog.all.count
  end
end
