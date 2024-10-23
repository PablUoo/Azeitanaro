# == Schema Information
#
# Table name: forma_pagamentos
#
#  id            :bigint(8)        not null, primary key
#  ativo         :boolean          default(TRUE)
#  ccv_cartao    :integer
#  data_validade :date
#  numero_cartao :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  tipo_id       :integer
#  user_id       :bigint(8)
#
# Indexes
#
#  index_forma_pagamentos_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class FormaPagamento < ApplicationRecord
  belongs_to :user

  validate :numero_cartao_unico, if: -> { numero_cartao.present? }
  validates :numero_cartao, :ccv_cartao, presence: true

  def ultimos_4_digitos
    numero_cartao[-4..-1]
  end
  
  def tipo
    case tipo_id
    when 1
      TipoPagamento.new(1, "Débito")
    when 2
      TipoPagamento.new(2, "Crédito")
    else
      nil
    end
  end

  class TipoPagamento
    attr_reader :id, :descricao
  
    def initialize(id, descricao)
      @id = id
      @descricao = descricao
    end
  
    def self.find_by_id(id)
      case id
      when 1
        TipoPagamento.new(1, "Débito")
      when 2
        TipoPagamento.new(2, "Crédito")
      else
        nil
      end
    end
  end

  private

  def numero_cartao_unico
    if FormaPagamento.exists?(numero_cartao: numero_cartao)
      errors.add(:numero_cartao, 'já está em uso')
    end
  end
end
