# == Schema Information
#
# Table name: produtos
#
#  id           :bigint(8)        not null, primary key
#  ativo        :boolean          default(TRUE)
#  desconto     :decimal(, )      default(0.0)
#  fabricado_em :date
#  imagem       :string
#  nome         :string
#  origem       :string
#  preco        :decimal(, )
#  tipo         :string
#  validade     :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'csv'
require 'open-uri'
class Produto < ApplicationRecord
    before_save :calcular_desconto, if: :preco_changed?

    scope :ativos, lambda {where(ativo: true)} 

    validates :nome, presence: true, uniqueness: true
    validates :imagem, presence: true, uniqueness: true

    def calcular_desconto
      if new_record? || desconto.nil?
        valor = (self.preco * rand(0.5..0.89)) + self.preco
        self.desconto = valor
      else
        self.desconto = valor if self.desconto.nil? 
      end
    end

    def self.criar_produtos_do_csv(file_path,tipo)
        if tipo == "csv"
            CSV.foreach(file_path, headers: true) do |row|
                Produto.create(
                  nome: row['nome'],
                  imagem: row['imagem'],
                  preco: row['preco'].to_f,
                  origem: row['origem'],
                  validade: Date.parse(row['validade']),
                  fabricado_em: Date.parse(row['fabricado_em']),
                  tipo: row['tipo']
                )
            end
        elsif tipo == "link"
            file_path = URI.open(file_path).read
            CSV.parse(file_path, headers: true) do |row|
                Produto.create(
                  nome: row['nome'],
                  imagem: row['imagem'],
                  preco: row['preco'].to_f,
                  origem: row['origem'],
                  validade: Date.parse(row['validade']),
                  fabricado_em: Date.parse(row['fabricado_em']),
                  tipo: row['tipo']
                )
            end
        end
    end
end
