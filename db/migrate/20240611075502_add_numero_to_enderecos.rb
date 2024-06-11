class AddNumeroToEnderecos < ActiveRecord::Migration[6.1]
  def change
    add_column :enderecos, :numero, :string
  end
end
