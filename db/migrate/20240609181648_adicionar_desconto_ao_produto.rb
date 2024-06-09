class AdicionarDescontoAoProduto < ActiveRecord::Migration[6.1]
  def change
    add_column :produtos, :desconto, :decimal, default: 0.0
  end
end
