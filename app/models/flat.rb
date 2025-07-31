class Flat < ApplicationRecord
  has_one_attached :main_photo
  validate :main_photo
  has_many_attached :photos

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
