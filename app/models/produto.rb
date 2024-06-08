class Produto < ApplicationRecord
    scope :ativos, lambda {where(ativo: true)} 
end
