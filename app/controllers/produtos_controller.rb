class ProdutosController < ApplicationController
  def index
    @produtos = Produto.ativos
  end

  def show
    @produtos = Produto.find(params[:id])
  end
end
