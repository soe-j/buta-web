class Pig < ApplicationRecord
  has_many :topping_logs

  def level
    case self.topping_logs.sum(:mashi)
    when 0...3
      1
    when 3...8
      2
    when 8...14
      3
    when 14...Float::INFINITY
      4
    else
      0
    end
  end
end
