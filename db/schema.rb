# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_06_12_032430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carrinho_items", force: :cascade do |t|
    t.bigint "carrinho_id"
    t.bigint "produto_id"
    t.integer "qtd"
    t.boolean "ativo", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["carrinho_id"], name: "index_carrinho_items_on_carrinho_id"
    t.index ["produto_id"], name: "index_carrinho_items_on_produto_id"
  end

  create_table "carrinhos", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "ativo", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_carrinhos_on_user_id"
  end

  create_table "enderecos", force: :cascade do |t|
    t.bigint "user_id"
    t.string "rua"
    t.string "cidade"
    t.string "estado"
    t.string "cep"
    t.string "pais"
    t.string "numero"
    t.boolean "ativo", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_enderecos_on_user_id"
  end

  create_table "forma_pagamentos", force: :cascade do |t|
    t.bigint "user_id"
    t.string "numero_cartao"
    t.date "data_validade"
    t.integer "ccv_cartao"
    t.boolean "ativo", default: true
    t.integer "tipo_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_forma_pagamentos_on_user_id"
  end

  create_table "ordem_items", force: :cascade do |t|
    t.bigint "ordem_id"
    t.bigint "produto_id"
    t.integer "qtd"
    t.boolean "ativo", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ordem_id"], name: "index_ordem_items_on_ordem_id"
    t.index ["produto_id"], name: "index_ordem_items_on_produto_id"
  end

  create_table "ordems", force: :cascade do |t|
    t.bigint "user_id"
    t.string "status"
    t.boolean "ativo", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "endereco_id"
    t.bigint "forma_pagamento_id"
    t.index ["endereco_id"], name: "index_ordems_on_endereco_id"
    t.index ["forma_pagamento_id"], name: "index_ordems_on_forma_pagamento_id"
    t.index ["user_id"], name: "index_ordems_on_user_id"
  end

  create_table "produtos", force: :cascade do |t|
    t.string "nome"
    t.string "imagem"
    t.decimal "preco"
    t.string "origem"
    t.date "validade"
    t.date "fabricado_em"
    t.string "tipo"
    t.boolean "ativo", default: true
    t.decimal "desconto", default: "0.0"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "name", null: false
    t.string "email", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "carrinho_items", "carrinhos"
  add_foreign_key "carrinho_items", "produtos"
  add_foreign_key "carrinhos", "users"
  add_foreign_key "enderecos", "users"
  add_foreign_key "forma_pagamentos", "users"
  add_foreign_key "ordem_items", "ordems"
  add_foreign_key "ordem_items", "produtos"
  add_foreign_key "ordems", "enderecos"
  add_foreign_key "ordems", "forma_pagamentos"
  add_foreign_key "ordems", "users"
end
