class CreateEnderecos < ActiveRecord::Migration[6.1]
  def change
    create_table :enderecos do |t|
      t.references :user, foreign_key: true
      t.string :rua
      t.string :cidade
      t.string :estado
      t.string :cep
      t.string :pais
      t.string :numero
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
