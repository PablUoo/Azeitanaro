# app/controllers/ordems_controller.rb
class OrdemsController < ApplicationController

  def show
    @ordem = current_user.ordems.find(params[:id])
  end

  def index
    @ordems = current_user.ordems
    @total_pedidos = @ordems.count
  end

  def new
    if current_user.enderecos.present? && current_user.forma_pagamentos.present?
      @ordem = Ordem.new
      @enderecos = current_user.enderecos
      @formas_pagamento = current_user.forma_pagamentos
      @carrinho_items = current_user.carrinho.carrinho_items.includes(:produto)
    else
      flash[:danger] = "Cadastre seu ENDEREÇO DE ENTREGA e sua FORMA de PAGAMENTO."
      redirect_to edit_user_path(current_user)
    end
  end

  def create
    if current_user.enderecos.present? && current_user.forma_pagamentos.present?
      @ordem = current_user.ordems.build(ordem_params)
      if @ordem.save
        current_user.carrinho.carrinho_items.each do |item|
          @ordem.ordem_items.create(produto_id: item.produto_id, qtd: item.qtd)
          item.destroy
        end
        flash[:success] = "Compra realizada com sucesso!"
        redirect_to ordems_path
      else
        @enderecos = current_user.enderecos
        @formas_pagamento = current_user.forma_pagamentos
        @carrinho_items = current_user.carrinho.carrinho_items.includes(:produto)
        flash[:danger] = "Selecione um ENDEREÇO DE ENTREGA e uma FORMA de PAGAMENTO."
        render :new
      end
    else
      redirect_to carrinho_path
    end
  end

  private

  def ordem_params
    params.require(:ordem).permit(:endereco_id, :forma_pagamento_id)
  end
end
