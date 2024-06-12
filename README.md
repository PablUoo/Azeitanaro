# Azeitanaro.
<p>Link do projeto  [https://azeitanaro.fly.dev/](https://azeitanaro.fly.dev/)</p>
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

### Para Windows com WSL UBUNTU:
<details>
https://gorails.com/setup/ubuntu/22.04
  Instalar o Ubuntu windows:
  abra o terminal power_shell como adiministrador:

    ```shell
    wsl --install -d Ubuntu
    ```

  após rodar o comando acima devera reiniciar o pc
  após reiniciar abra o terminal chamado UBUNTU que tem no explorador do windows
  ou abra o power_sheel e execute:
  ```sh
    wsl ~
    exec $SHELL
  ```
  e coloque um username para a maquina ubunto e senha.
  
 autere a senha do usuario root:
 ```shell
 sudo -i
 passwd
 chmod 777 /
 ```

</details>

### Instalando o projeto no Linux ou WSL:
Instalar o git:
```sh
sudo apt-get update
sudo apt install git
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
```

Instalar o rbenv:
```sh
sudo apt-get update
sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
sudo apt install -y build-essential tklib zlib1g-dev libssl-dev libffi-dev libxml2 libxml2-dev libxslt1-dev libreadline-dev
exec $SHELL 
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
rbenv -v
```

Instalar o Ruby:
```sh
rbenv install 3.0.3
ruby -v
rbenv global 3.0.3
```

Instalar bundler gem (gerenciador de dependências):
```sh
gem install bundler
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
gem install rails -v 6.1.4.7
rails -v
```

Instalando o PostgreSQL:
```sh
sudo apt-get update
sudo apt install postgresql-14 libpq-dev
```

instalando o node.js:
```sh
sudo apt install nodejs
```


 altere a senha do usuario postgres:
 ```sh
 sudo passwd postgres
 ```
 ```sh
 su postgres
 psql
 ```
 dentro do postgres=# execute o comando para mudar a senha do banco de dados:
 ```sh
 \password postgres
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

Abra seu browser e vá para o endereço `localhost:3000`


</details>

