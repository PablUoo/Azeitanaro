# Azeitanaro
<p>Link do projeto  https://azeitanaro.fly.dev/</p>
### Instruções do projeto


<details>
  
## Requisitos Necessários:

* Ruby 3.0.3
* PostgreSQL
* Rails 6.1.4.7

### Clone em sua máquina

```shell
git clone git@github.com:PablUoo/Azeitanaro.git
```

### Instale as dependências
```shell
cd Azeitanaro
bundle install
```

### Configure o Banco de Dados
Copie o arquivo *config/database.exemple.yml* e cole na mesma pasta, renomeando para *database.yml*
e configure seu bando de dados(Por default, estamos usando PostgreSQL).
Realize a criação do banco e execute as migrações
```shell
rails db:create
rails db:migrate
```
### Execute a aplicação
```shell
rails s
```
</details>
<!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

### Para executar o projeto:

<details>

### Instalando o projeto Windows com WLS UBUNTU:
<details>
  Instalar o Ubuntu windows:
  abra o terminal power_shell como adiministrador:

    ```shell
    wsl --install -d Ubuntu
    wsl --update
    wsl --set-default-version 1
    ```

  após rodar o comando acima devera reiniciar o pc
  após reiniciar abra o terminal chamado UBUNTU que tem no explorador do windows
  ou abra o power_sheel e execute:
  ```sh
    wsl ~
    exec $SHELL
  ```
  e coloque um username para a maquina ubunto e senha.
  

 
 instalando as dependencias
 abra o terminal do UBUNTU e execute:
```sh
sudo apt-get update
sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
exec $SHELL
sudo apt install postgresql libpq-dev
sudo service postgresql start
```
 
 instalando o ruby:
 ```sh
rbenv install 3.0.3
ruby -v
rbenv global 3.0.3
 ```

 clone o projeto no terminal do ubunto:
 ```sh
 git clone link-do-projeto-no-git
 
 #va até a pasta do projeto.
 cd Azeitanaro/
 ```

 dentro do projeto execute o bundle install
 ```sh
 bundle install
 ```
 após isso tera o projeto instalado basta configurar o super usuario do Ubunto e alterar a senha do Usuario Postgres
 para criar o banco de dados
 
 autere a senha do usuario root:
 ```shell
 sudo -i
 passwd
 chmod 777 /
 ```

 install psql:
 ```sh
 sudo apt update
 sudo apt install libpq-dev build-essential
 sudo apt-get -y install postgresql
 sudo service postgresql start
 sudo passwd postgres
 ```
 altere a senha do psql:
 ```sh
 su postgres
 psql
 ```
 dentro do postgres=# execute o comando para mudar a senha do banco de dados:
 ```sh
 \password
 ```

 após essa etapa voce tera o projeto configurado basta abrir o arquive dentro 
 de config/database.yml
 e altere a senha do banco tanto no development, production, test

 ex:
 ```sh
 production:
  adapter: postgresql
  username: postgres 
  password: postgres 
  database: azeitanaro_production
  host: localhost
  port: 5432

development:
  adapter: postgresql
  username: postgres 
  password: postgres 
  database: azeitanaro_development
  host: localhost
  port: 5432

test:
  adapter: postgresql
  username: postgres 
  password: postgres 
  database: azeitanaro_test
  host: localhost
  port: 5432
 ```

 basta executar o start do projeto e acessar o localhost:3000:

 ```sh
 rails db:create
 postgres start
 ```

</details>

### Instalando o projeto no Linux:
Instalar o git:
```sh
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
```

Instalar o rbenv:
```sh
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
rbenv version
```

Instalar o Ruby:
```sh
rbenv install 2.6.1
ruby -v
rbenv global 2.6.1
```

Instalar bundler gem (gerenciador de dependências):
```sh
gem install bundler
rbenv rehash
```

Configurando Git:
```sh
git config --global color.ui true
git config --global user.name "seu nome aqui"
git config --global user.email "seuemail@example.com"
```

Gerando chaves ssh e copiando conteúdo:
```sh
ssh-keygen -t rsa -b 4096 -C "seuemail@example.com"
cat ~/.ssh/id_rsa.pub
ssh -T git@github.com
```

Instalando o Rails:
```sh
gem install rails -v 5.2.2
rails -v
```

Instalando o PostgreSQL:
```sh
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.5 libpq-dev
```

Configurando usuário para PostgreSQL (Substitua `usuario` no comando abaixo pelo nome do usuario que você deseja criar):
```sh
sudo -u postgres createuser usuario
```

instalando o node.js:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
source ~/.bashrc
nvm install 4.4.7
```

Criando primeiro projeto Rails:
```sh
mkdir rails
cd rails
rails new app
cd app
```

Rodando o projeto Rails:
```sh
bundle exec rails db:crate
bundle exec rails db:migrate
rails s
```

Abra seu browser e vá para o endereço `localhost:3000`


</details>

