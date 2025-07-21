class AddRoomsAndSubwayToFlats < ActiveRecord::Migration[8.0]
  def change
    add_column :flats, :rooms, :integer
    add_column :flats, :subway, :string
  end
end
