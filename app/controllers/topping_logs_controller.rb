class ToppingLogsController < ApplicationController
  protect_from_forgery except: [:index, :create]

  def index
  end

  def create
    head :created
  end
end
