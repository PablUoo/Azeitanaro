class CreateFormaPagamentos < ActiveRecord::Migration[6.1]
  def change
    create_table :forma_pagamentos do |t|
      t.references :user, foreign_key: true
      t.string :numero_cartao
      t.date :data_validade
      t.integer :ccv_cartao
      t.boolean :ativo, default: true
      t.integer :tipo_id
      t.timestamps
    end
  end
end
