class CreateToppingLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :topping_logs do |t|
      t.references :pig, foreign_key: true
      t.references :topping, foreign_key: true
      t.integer    :mashi

      t.timestamps
    end
  end
end
