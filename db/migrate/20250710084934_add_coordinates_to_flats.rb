class AddCoordinatesToFlats < ActiveRecord::Migration[8.0]
  def change
    add_column :flats, :latitude, :float
    add_column :flats, :longitude, :float
  end
end
