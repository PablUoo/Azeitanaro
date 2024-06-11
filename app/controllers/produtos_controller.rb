class ProdutosController < ApplicationController

  def index
    @produtos = Produto.ativos.sort
  end

  def show
    @produtos = Produto.find(params[:id])
  end

  def adicionar_ao_carrinho
    @produto = Produto.find(params[:id_produto])
    @carrinho = current_user.current_carrinho || current_user.create_current_carrinho
  
    item = @carrinho.carrinho_items.find_or_initialize_by(produto: @produto)
    item.qtd = (item.qtd || 0) + params[:quantidade].to_i
    item.save
  
    respond_to do |format|
      format.json { render json: { message: 'Produto adicionado ao carrinho com sucesso.' }, status: :ok }
    end
  end

  def comprar
    @produto = Produto.find(params[:id_produto])
    @carrinho = current_user.current_carrinho || current_user.create_current_carrinho

    item = @carrinho.carrinho_items.find_or_initialize_by(produto: @produto)
    item.qtd += params[:quantidade].to_i
    item.save

    respond_to do |format|
      format.json { render json: { message: 'Produto adicionado ao carrinho com sucesso.' }, status: :ok }
    end
  end
end
