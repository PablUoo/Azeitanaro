class CreateProdutos < ActiveRecord::Migration[6.1]
  def change
    create_table :produtos do |t|
      t.string :nome
      t.string :imagem
      t.decimal :preco
      t.string :origem
      t.date :validade
      t.date :fabricado_em
      t.string :tipo
      t.boolean :ativo, default: true
      t.decimal :desconto, default: 0.0
      t.timestamps
    end
  end
end
