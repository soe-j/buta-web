class PigsController < ApplicationController

  def index
    @pigs = Pig.all
  end

  def show
    @pig = Pig.find_by(name: params[:name])
    gon.pig_name = @pig.name
    gon.pig_level = @pig.level
    gon.offset = ToppingLog.all.count
  end
end
