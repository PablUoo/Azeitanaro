class ProdutosController < ApplicationController
  def index
    @produtos = Produto.all
  end

  def show
    @produtos = Produto.find(params[:id])
  end
end
