class CreateFlats < ActiveRecord::Migration[8.0]
  def change
    create_table :flats do |t|
      t.string :name
      t.string :address
      t.string :title
      t.text :description
      t.string :main_photo
      t.integer :rent
      t.integer :charges

      t.timestamps
    end
  end
end
