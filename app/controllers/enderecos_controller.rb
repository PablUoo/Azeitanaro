class EnderecosController < ApplicationController
    def new
      @endereco = Endereco.new
    end
  
    def create
      @endereco = Endereco.new(endereco_params)
  
      if endereco_params.values.any?(&:blank?)
        flash[:danger] = "Todos os campos são obrigatórios."
        render :new
      elsif @endereco.save
        flash[:success] = "Endereço de Entrega Cadastrado com sucesso!"
        redirect_to root_path
      else
        flash[:danger] = "Erro: #{@endereco.errors.full_messages.join(', ')}"
        render :new
      end
    end
  
    private
  
    def endereco_params
      params.require(:endereco).permit(:rua, :cidade, :estado, :cep, :pais, :user_id)
    end
  end
  