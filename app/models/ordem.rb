class Ordem < ApplicationRecord
  belongs_to :user
  has_many :ordeem_items
  has_many :produtos, through: :ordem_items
end
