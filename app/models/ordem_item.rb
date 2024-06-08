class OrdemItem < ApplicationRecord
  belongs_to :ordem
  belongs_to :produto
end
