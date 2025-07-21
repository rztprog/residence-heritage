class AddSurfaceToFlats < ActiveRecord::Migration[8.0]
  def change
    add_column :flats, :surface, :integer
  end
end
