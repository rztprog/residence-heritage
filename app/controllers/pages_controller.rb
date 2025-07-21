class PagesController < ApplicationController
  def home
    @flats = Flat.all
  end

  def contact
  end
end
