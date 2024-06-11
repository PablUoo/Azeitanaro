class FormaPagamento < ApplicationRecord
  belongs_to :user

  validate :unico_tipo_pix_boleto_para_usuario
  validate :numero_cartao_unico, if: -> { numero_cartao.present? }
  validates :numero_cartao, presence: true, if: -> { cartao? }
  private

  def unico_tipo_pix_boleto_para_usuario
    if pix && user.forma_pagamentos.exists?(pix: true)
      errors.add(:tipo_pagamento, 'Pix já existe para este usuário')
    end

    if boleto && user.forma_pagamentos.exists?(boleto: true)
      errors.add(:tipo_pagamento, 'Boleto já existe para este usuário')
    end
  end

  def numero_cartao_unico
    if FormaPagamento.exists?(numero_cartao: numero_cartao)
      errors.add(:numero_cartao, 'já está em uso')
    end
  end
end
