Rails.application.routes.draw do

  root            to: 'static_pages#index'
  get 'sobre',    to: 'static_pages#sobre'
  get 'equipe',  to: 'static_pages#equipe'

  get 'cadastro', to: 'users#new'
  get 'entrar',   to: 'sessions#new'
  post 'entrar',  to: 'sessions#create'
  delete 'sair',  to: 'sessions#destroy'
  get 'editar_cadastro', to: 'sessions#edit'
  post 'reset_password', to: 'sessions#update'

  resources :users, only: [:show, :new, :create, :edit, :update] do
    resources :sessions, only: [:new, :create, :destroy]
    end
    resources :produtos, only: [:index, :show]
    post 'carrinho/adicionar/:id_produto', to: 'produtos#adicionar_ao_carrinho', as: 'carrinho_add'
    post 'carrinho/comprar/:id_produto', to: 'produtos#comprar', as: 'carrinho_comprar'
end
