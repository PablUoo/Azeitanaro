class CreateFormaPagamentos < ActiveRecord::Migration[6.1]
  def change
    create_table :forma_pagamentos do |t|
      t.references :user, foreign_key: true
      t.string :numero_cartao
      t.date :data_validade
      t.integer :ccv_cartao
      t.boolean :pix
      t.boolean :cartao
      t.boolean :boleto
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
