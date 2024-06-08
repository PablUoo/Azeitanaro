class CreateOrdemItems < ActiveRecord::Migration[6.1]
  def change
    create_table :ordem_items do |t|
      t.references :ordem, foreign_key: true
      t.references :produto, foreign_key: true
      t.integer :qtd
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
