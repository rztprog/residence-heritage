class Flat < ApplicationRecord
  has_one_attached :main_photo
  validates :main_photo, presence: true

  has_many_attached :photos

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
