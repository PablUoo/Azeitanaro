# app/models/carrinho_item.rb
class CarrinhoItem < ApplicationRecord
  belongs_to :carrinho
  belongs_to :produto
end