class Carrinho < ApplicationRecord
  belongs_to :user
  has_many :carrinho_items
  has_many :produtos, through: :carrinho_items
end
