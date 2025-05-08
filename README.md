
# 🫒 Azeitanaro

[🔗 Acesse o projeto em produção](https://azeitanaro.fly.dev/)

> Sistema web desenvolvido em Ruby on Rails para gerenciamento de informações relacionadas à produção de azeite artesanal.

---

## 📦 Download do Projeto

Você pode clonar o repositório com Git ou baixar o ZIP:

- 🔽 [Download ZIP](https://github.com/PablUoo/Azeitanaro/archive/refs/heads/main.zip)
- 💻 `git clone git@github.com:PablUoo/Azeitanaro.git`

---

## ✅ Requisitos

- Ruby 3.0.3
- Rails 6.1.4.7
- PostgreSQL 14+
- Node.js
- Bundler (`gem install bundler`)

---

## 🚀 Instalação no Linux ou WSL (Ubuntu)

### 1. Instale dependências básicas

```bash
sudo apt update && sudo apt install -y git curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs postgresql-14 libpq-dev
```

### 2. Instale o `rbenv` e o Ruby

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 3.0.3
rbenv global 3.0.3
```

### 3. Instale Rails

```bash
gem install bundler
gem install rails -v 6.1.4.7
```

---

## 🔑 Configuração do Banco de Dados

### 1. Configure senha do PostgreSQL

```bash
sudo passwd postgres
su postgres
psql
# No prompt do psql:
\password postgres
\q
```

### 2. Configure `config/database.yml`

Copie o arquivo de exemplo e configure com seus dados:

```bash
cp config/database.exemple.yml config/database.yml
```

Exemplo de configuração:

```yaml
default: &default
  adapter: postgresql
  encoding: unicode
  username: postgres
  password: postgres
  host: localhost
  port: 5432

development:
  <<: *default
  database: azeitanaro_development

test:
  <<: *default
  database: azeitanaro_test

production:
  <<: *default
  database: azeitanaro_production
```

---

## ⚙️ Executando o Projeto

```bash
bundle install
rails db:create
rails db:migrate
passenger start
```

Abra o navegador em: [http://localhost:3000](http://localhost:3000)

---

## 🪟 Instalação no Windows com WSL

1. No PowerShell como administrador:

```bash
wsl --install -d Ubuntu
```

2. Após reiniciar o PC, abra o terminal **Ubuntu** e configure seu usuário/senha.
3. Siga os passos da seção [Instalação no Linux](#-instalação-no-linux-ou-wsl-ubuntu).

---

## 🔧 Configurando o Git e SSH (opcional)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"

ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com"
cat ~/.ssh/id_rsa.pub
```

Adicione sua chave SSH ao GitHub: [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)

---

## 📚 Referência de Setup

- [GoRails - Setup Ubuntu](https://gorails.com/setup/ubuntu/22.04)
- [Ruby on Rails Guides](https://guides.rubyonrails.org/)
