class Pig < ApplicationRecord
  has_many :topping_logs

  def level
    case self.topping_logs.sum(:mashi)
    when 0...5
      1
    when 5...10
      2
    when 10...30
      3
    when 30...Float::INFINITY
      4
    else
      0
    end
  end
end
