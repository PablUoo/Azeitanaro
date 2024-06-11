class AddEnderecoAndFormaPagamentoToOrdems < ActiveRecord::Migration[6.1]
  def change
    add_reference :ordems, :endereco, foreign_key: true
    add_reference :ordems, :forma_pagamento, foreign_key: true
  end
end
