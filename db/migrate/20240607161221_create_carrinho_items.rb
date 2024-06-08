class CreateCarrinhoItems < ActiveRecord::Migration[6.1]
  def change
    create_table :carrinho_items do |t|
      t.references :carrinho, foreign_key: true
      t.references :produto, foreign_key: true
      t.integer :qtd
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
