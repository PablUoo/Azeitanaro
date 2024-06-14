class PopulateProductsTable < ActiveRecord::Migration[6.1]
  def change
    Produto.criar_produtos_do_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTf1kor50Gz5a3l69hScqrLaMITLZrUdShP9W4Qo8zr6A1LM99JYuRLS_jy20tGO9WYoOcJcct7qU8A/pub?gid=1354510115&single=true&output=csv","link")
  end

  def up
    Produto.all.destroy_all
  end
end
