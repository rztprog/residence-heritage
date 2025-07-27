class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  before_action :load_footer_flats

  def load_footer_flats
    @footer_flats = Flat.limit(5)
  end
end
