class User < ApplicationRecord

  has_secure_password
  before_save :email_downcase

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :name, presence: true, length: { maximum: 50 }
  validates :password, length: { minimum: 6 }
  validates :email, presence: true, length: { maximum: 255 },
                                    format: { with: VALID_EMAIL_REGEX },
                                    uniqueness: { case_sensitive: true }


  has_many :ordems
  has_one :carrinhos
  has_many :forma_pagamentos
  has_many :enderecos

  def update_password(new_password)
    self.password = new_password
    save
  end

  private
    def email_downcase
      self.email.downcase!
    end

end
