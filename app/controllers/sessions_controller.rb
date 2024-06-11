class SessionsController < ApplicationController

  def new
    redirect_to root_path(current_user) if user_signed_in?
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in(user)
      redirect_to root_path(current_user)
    else
      flash.now[:danger] = 'Email e Senha inválidos'
      render 'new'
    end
  end

  def update
    user = User.find_by(email: params[:password_reset][:email].downcase)
    pass = params[:password_reset][:password]
    pass_confirme = params[:password_reset][:password_confirmation]
    pass_valido = (pass == pass_confirme) && (pass.present? && pass_confirme.present?)
    if user.present?
      if pass_valido
        user.update_password(pass)
        flash[:success] = 'Senha Alterada Com Sucesso!'
      else
        flash[:danger] = 'Senhas devem ser iguais.'
        end
      else
        flash[:danger] = 'Email não encontrado!'
      end
      redirect_to entrar_path
  end

  def destroy
    sign_out
    flash[:warning] = 'Logout realizado com sucesso'
    redirect_to entrar_path
  end


end
