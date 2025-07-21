class ContactMailer < ApplicationMailer
  def send_message
    @message = params[:message]
    mail(to: "contact@lel.fr", subject: "Nouveau message de contact")
  end
end
