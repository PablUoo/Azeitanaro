# == Schema Information
#
# Table name: ordem_items
#
#  id         :bigint(8)        not null, primary key
#  ativo      :boolean          default(TRUE)
#  qtd        :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ordem_id   :bigint(8)
#  produto_id :bigint(8)
#
# Indexes
#
#  index_ordem_items_on_ordem_id    (ordem_id)
#  index_ordem_items_on_produto_id  (produto_id)
#
# Foreign Keys
#
#  fk_rails_...  (ordem_id => ordems.id)
#  fk_rails_...  (produto_id => produtos.id)
#
class OrdemItem < ApplicationRecord
  belongs_to :ordem
  belongs_to :produto
end
