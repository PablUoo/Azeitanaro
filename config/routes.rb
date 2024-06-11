Rails.application.routes.draw do
  root 'static_pages#index'

  get 'sobre', to: 'static_pages#sobre'
  get 'equipe', to: 'static_pages#equipe'

  get 'cadastro', to: 'users#new'
  get 'entrar', to: 'sessions#new'
  post 'entrar', to: 'sessions#create'
  delete 'sair', to: 'sessions#destroy'
  get 'editar_cadastro', to: 'sessions#edit'
  patch 'reset_password', to: 'sessions#update'
  post 'carrinho/adicionar/:id_produto', to: 'produtos#adicionar_ao_carrinho', as: 'carrinho_add'
  post 'carrinho/comprar/:id_produto', to: 'produtos#comprar', as: 'carrinho_comprar'
  delete 'carrinho/:id', to: 'carrinhos#destroy_item', as: 'carrinho_item'

  resources :users, only: [:show, :new, :create, :edit, :update]
  resources :produtos, only: [:index, :show]
  resource :carrinho, only: [:show, :update]

  resources :enderecos, only: [:new, :create]
  resources :formas_pagamentos, only: [:new, :create]
  resources :ordems, only: [:new, :create, :show, :index]
end
