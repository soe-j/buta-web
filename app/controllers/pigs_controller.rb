class PigsController < ApplicationController

  def index
  end

  def show
    @pig = Pig.find_by(name: params[:name])
  end
end
