# == Schema Information
#
# Table name: carrinhos
#
#  id         :bigint(8)        not null, primary key
#  ativo      :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint(8)
#
# Indexes
#
#  index_carrinhos_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Carrinho < ApplicationRecord
  belongs_to :user
  has_many :carrinho_items, dependent: :destroy
end
