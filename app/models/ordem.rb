# == Schema Information
#
# Table name: ordems
#
#  id                 :bigint(8)        not null, primary key
#  ativo              :boolean          default(TRUE)
#  status             :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  endereco_id        :bigint(8)
#  forma_pagamento_id :bigint(8)
#  user_id            :bigint(8)
#
# Indexes
#
#  index_ordems_on_endereco_id         (endereco_id)
#  index_ordems_on_forma_pagamento_id  (forma_pagamento_id)
#  index_ordems_on_user_id             (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (endereco_id => enderecos.id)
#  fk_rails_...  (forma_pagamento_id => forma_pagamentos.id)
#  fk_rails_...  (user_id => users.id)
#
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
