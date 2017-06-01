class CreatePigs < ActiveRecord::Migration[5.1]
  def change
    create_table :pigs do |t|
      t.string :name

      t.timestamps
    end
  end
end
