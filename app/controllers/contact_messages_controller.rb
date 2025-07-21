class ContactMessagesController < ApplicationController
  def new
  end

  def create
    @contact_message = ContactMessage.new(contact_message_params)

    if @contact_message.valid?
      ContactMailer.with(message: @contact_message).send_message.deliver_now
      redirect_to contact_path, notice: "Ton message a bien été envoyé !"
    else
      render "pages/contact", status: :unprocessable_entity
    end
  end

  private

  def contact_message_params
    params.require(:contact_message).permit(:name, :email, :message)
  end
end
