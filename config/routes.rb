Rails.application.routes.draw do

  root            to: 'static_pages#index'
  get 'sobre',    to: 'static_pages#sobre'
  get 'equipe',  to: 'static_pages#equipe'

  get 'cadastro', to: 'users#new'
  get 'entrar',   to: 'sessions#new'
  post 'entrar',  to: 'sessions#create'
  delete 'sair',  to: 'sessions#destroy'

  resources :users, only: [:show, :new, :create, :edit, :update] do
    resources :sessions, only: [:new, :create, :destroy]
    post 'carrinho/add/:id', to: 'carrinho#add', as: 'carrinho_add'
    post 'carrinho/comprar/:id', to: 'carrinho#comprar', as: 'carrinho_comprar'
  end
  resources :produtos, only: [:index, :show]
end
