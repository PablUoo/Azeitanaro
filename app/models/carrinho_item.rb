# == Schema Information
#
# Table name: carrinho_items
#
#  id          :bigint(8)        not null, primary key
#  ativo       :boolean          default(TRUE)
#  qtd         :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  carrinho_id :bigint(8)
#  produto_id  :bigint(8)
#
# Indexes
#
#  index_carrinho_items_on_carrinho_id  (carrinho_id)
#  index_carrinho_items_on_produto_id   (produto_id)
#
# Foreign Keys
#
#  fk_rails_...  (carrinho_id => carrinhos.id)
#  fk_rails_...  (produto_id => produtos.id)
#
# app/models/carrinho_item.rb
class CarrinhoItem < ApplicationRecord
  belongs_to :carrinho
  belongs_to :produto
end
