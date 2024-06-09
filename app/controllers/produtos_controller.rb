class ProdutosController < ApplicationController

  def index
    @produtos = Produto.ativos.sort
  end

  def show
    @produtos = Produto.find(params[:id])
  end

  def adicionar_ao_carrinho
    produto = Produto.find(params[:id_produto]).nome
    if user_signed_in?
      flash[:success] = "#{produto} adicionado no carrinho com sucesso!"
      redirect_to produtos_path
      # raise

    else
      flash[:danger] = "realize o login primeiro!"
      redirect_to entrar_path
    end
  end
  
  def comprar
    produto = Produto.find(params[:id_produto]).nome
    if user_signed_in?
      flash[:success] = "#{produto} compra realizada com sucesso!"
      redirect_to root_path
      # raise
    else
      flash[:danger] = "realize o login primeiro!"
      redirect_to entrar_path
    end
  end
end
