# Dev Radar (OmniStack 10)

Esse foi um projeto desenvolvido durante a semana OmniStack 10 da RocketSeat, mentorado pelo Diego Fernandes;

O projeto é uma aplicação simples onde vários desenvolvedores podem se cadastrar marcando seu Github, tecnologias que tem conhecimento, e quando alguém tiver interesse em encontrar um programador de uma tecnologia específica pode fazer uma pesquisa, e verá quais devs estão próximos dele no mapa, durante a pesquisa de devs, se outra pessoa se cadastrar no aplicativo, essa informação será atualizada para quem está buscando;

## Techs

O projeto é dividido em 3 partes (web, backend, mobile);
* Backend:
  * Express: Utilizado para tratar com as rotas das requisições http;
  * Mongoose: Lib para conectar no mongoDB;
  * Axios: utilizado para pegar informações públicas do dev através da api do github;
  * Socket.io: utilizado para atualizar a lista de devs na região se necessário;
* Web:
  * ReactJS: Biblioteca/Framework para desenvolvimento de aplicações web;
  * Axios: utilizado parar mandar/pegar informações para o backend através de requisições http
* Mobile:
  * React Native: Biblioteca/Framework para desenvolvimento de aplicações mobile nativas;
  * Expo: Biblioteca/Framework para facilitar integração com funções nativas do celular (localização gps por exemplo);
  * Expo-location: biblioteca do Expo parar verificar localização do gps;
  * Socket.io-client: Biblioteca para receber atualizações do backend através de websocket;

## Requisitos

* Em cada pasta, rode o comando `yarn` ou `npm install` para atualizar as dependencias;
* Crie um banco de dados em mongoDB, vou tentar explicar como fazer isso no site [Mongo.com](https://www.mongodb.com/):
  * Após fazer login Crie um projeto e um novo cluster(o primeiro é gratuito);
  * Acesse a aba Database Access que fica no menu lateral;
  * Crie um novo usuário dando um nome e uma senha (existem algumas configurações para limitar o acesso desse usuário);
  * Volte para Clusters e acesse a aba Collections;
  * Crie uma database, de um nome para a database e crie uma coleção com nome "Dev", que será usada pelo backend;
  * Acesse o arquivo `backend/src/index.js` e troque o conteúdo da linha 12 referente a conexão, exemplo:
    * Atual `mongodb+srv://<user>:<password>@<clustername>.5tex6.mongodb.net/<dbname>?retryWrites=true&w=majority`;
    * Exemplo `mongodb+srv://usuarioomnistack:senhasecretaomnistack@Matan18Cluster.5tex6.mongodb.net/omnistack10database?retryWrites=true&w=majority`

# License

