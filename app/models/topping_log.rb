class ToppingLog < ApplicationRecord
  belongs_to :pig
  belongs_to :topping

  def to_hash
    ActiveSupport::JSON.decode(self.to_json)
  end
end
