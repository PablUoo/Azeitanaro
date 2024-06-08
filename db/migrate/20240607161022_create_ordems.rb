class CreateOrdems < ActiveRecord::Migration[6.1]
  def change
    create_table :ordems do |t|
      t.references :user, foreign_key: true
      t.string :status
      t.boolean :ativo, default: true

      t.timestamps
    end
  end
end
