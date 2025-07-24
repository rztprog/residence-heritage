class PagesController < ApplicationController
  def home
    @flats = Flat.all
  end

  def contact
    @contact_message = ContactMessage.new
  end

  def mentions_legales
  end
end
