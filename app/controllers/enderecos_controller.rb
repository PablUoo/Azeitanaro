class EnderecosController < ApplicationController

    def create
      @endereco = Endereco.new(endereco_params)

      if endereco_params.values.any?(&:blank?)
        flash[:danger] = "Todos os campos são obrigatórios."
        render :new
      elsif @endereco.save
        flash[:success] = "Endereço de Entrega Cadastrado com sucesso!"
        redirect_to edit_user_path(current_user)
      else
        flash[:danger] = "Erro: #{@endereco.errors.full_messages.join(', ')}"
        render :new
      end
    end

    private

    def endereco_params
      params.permit(:rua,:numero, :cidade, :estado, :cep, :pais, :user_id)
    end
  end
