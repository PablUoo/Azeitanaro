# == Schema Information
#
# Table name: enderecos
#
#  id         :bigint(8)        not null, primary key
#  ativo      :boolean          default(TRUE)
#  cep        :string
#  cidade     :string
#  estado     :string
#  numero     :string
#  pais       :string
#  rua        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint(8)
#
# Indexes
#
#  index_enderecos_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Endereco < ApplicationRecord
  belongs_to :user
end
