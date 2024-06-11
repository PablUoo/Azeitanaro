class FormasPagamentosController < ApplicationController
    def create
      @forma_pagamento = FormaPagamento.new()
      
      # Defina a opção selecionada como verdadeira e atribua o ID do usuário
      case params[:tipo_pagamento]
      when 'Pix'
        @forma_pagamento.pix = true
      when 'Boleto'
        @forma_pagamento.boleto = true
      when 'Cartão'
        @forma_pagamento.cartao = true
        @forma_pagamento.data_validade = Date.new(params["data_validade(1i)"].to_i, params["data_validade(2i)"].to_i, params["data_validade(3i)"].to_i)
        @forma_pagamento.ccv_cartao = params[:ccv_cartao]
      end
  
      @forma_pagamento.user_id = current_user.id
  
      if @forma_pagamento.save
        flash[:sucess] = "Forma de Pagamento cadastrado com sucesso"
        redirect_to edit_user_path(current_user)
        else
        flash[:danger] = "Erro ao cadastrar forma de pagamento: #{@forma_pagamento.errors.full_messages.join(', ')}"
        redirect_to edit_user_path(current_user)
      end
    end
  
    private  
  end
  