# app/controllers/ordems_controller.rb
class OrdemsController < ApplicationController

  def new
    @ordem = current_user.ordems.new
  end

  def create
    @ordem = current_user.ordems.new(ordem_params)
    @ordem.endereco_id = params[:ordem][:endereco_id]
    @ordem.forma_pagamento_id = params[:ordem][:forma_pagamento_id]

    if @ordem.save
      flash[:success] = "Pedido Realizado Com Sucesso!"
    else
      flash[:error] = "Erro ao processar pedido!"
    end
    redirect_to ordem_path
  end

  def show
    @ordem = current_user.ordems.find(params[:id])
  end

  def index
    @ordems = current_user.ordems
  end

  private

  def ordem_params
    params.require(:ordem).permit(:outros_parametros)
  end
end
