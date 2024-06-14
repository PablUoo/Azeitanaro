class FormasPagamentosController < ApplicationController
    def create
        @forma_pagamento = FormaPagamento.new(
            numero_cartao: params[:numero_cartao],
            ccv_cartao: params[:ccv_cartao],
            data_validade:Date.new(params["data_validade(1i)"].to_i, params["data_validade(2i)"].to_i, params["data_validade(3i)"].to_i),
            tipo_id: params[:tipo_id],
            user_id: current_user.id
        )        
      if @forma_pagamento.save
        flash[:success] = "Forma de Pagamento cadastrado com sucesso"
        redirect_to edit_user_path(current_user)
        else
        flash[:danger] = "Erro ao cadastrar forma de pagamento: #{@forma_pagamento.errors.full_messages.join(', ')}"
        redirect_to edit_user_path(current_user)
      end
    end
  
    private  
  end
  