class Carrinho < ApplicationRecord
  belongs_to :user
  has_many :carrinho_items, dependent: :destroy
end