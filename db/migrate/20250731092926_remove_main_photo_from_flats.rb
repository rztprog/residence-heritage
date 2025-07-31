class RemoveMainPhotoFromFlats < ActiveRecord::Migration[8.0]
  def change
    remove_column :flats, :main_photo, :string
  end
end
