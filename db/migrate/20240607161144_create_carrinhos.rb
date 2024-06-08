class CreateCarrinhos < ActiveRecord::Migration[6.1]
  def change
    create_table :carrinhos do |t|
      t.references :user, foreign_key: true
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
