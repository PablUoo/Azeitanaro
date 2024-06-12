class Ordem < ApplicationRecord
  belongs_to :user
  belongs_to :endereco
  belongs_to :forma_pagamento
  has_many :ordem_items, dependent: :destroy
  has_many :produtos, through: :ordem_items

  validates :endereco_id, presence: true
  validates :forma_pagamento_id, presence: true

  def add_carrinho_items(carrinho)
    carrinho.carrinho_items.each do |carrinho_item|
      order_items.build(produto: carrinho_item.produto, qtd: carrinho_item.quantity, preco: carrinho_item.produto.preco)
    end
  end
end
