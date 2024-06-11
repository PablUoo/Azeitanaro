# app/controllers/carrinhos_controller.rb
class CarrinhosController < ApplicationController
    # before_action :authenticate_user!
  
    def show
      @carrinho = current_user.current_carrinho
    end
  
    def update
        @carrinho = current_user.current_carrinho
        carrinho_item = @carrinho.carrinho_items.find(params[:carrinho_item][:id])
    
        if carrinho_item.update(qtd: params[:carrinho_item][:qtd])
          redirect_to carrinho_path
           flash[:success] = 'Quantidade atualizada!'

        else
          redirect_to carrinho_path
        end
      end
    
    def destroy_item
      @carrinho = current_user.current_carrinho
      carrinho_item = @carrinho.carrinho_items.find(params[:id])
      carrinho_item.destroy
      respond_to do |format|
        format.js
      end
      flash[:success] = 'Item removido com sucesso!'

    end
  end
  