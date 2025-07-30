class Flat < ApplicationRecord
  has_one_attached :main_photo
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  validate :main_photo
end
