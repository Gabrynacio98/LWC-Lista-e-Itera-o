import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  /** 
   * Object Javascript
   * 
   * {key:value,key1: value1, key2: value2}
   * nameObject = {
   *    key1: value1,
   *    key2: value2,
   *    key3: value3
   * };
  */
  visivelCaverna = true;
  visivelPokemon = true;
  

  mostrarPokemon(){
    if(this.visivelPokemon == true){
      this.visivelPokemon = false;
    }else{
      this.visivelPokemon = true;
    }
  }

  



  pokemons =[
    {Id:4, nome : "Charmander",tipo : "Fogo", nivel : 5},
    {Id:5, nome : "Charmeleon",tipo : "Fogo", nivel : 18},
    {Id:6, nome : "Charizard",tipo : "Fogo Voador", nivel : 36},
    {Id:144, nome : "Articuno",tipo : "Gelo Voador", nivel : 50},
    {Id:146, nome : "Moltres",tipo : "Fogo Voador", nivel : 50},
    {Id:145, nome : "Zapdos",tipo : "Elétrico Voador", nivel : 50},
    {Id:1, nome : "Lapras",tipo : "Gelo", nivel : 50},
    {Id:2, nome : "Raichu",tipo : "Elétrico", nivel : 50},
    {Id:3, nome : "Haunter",tipo : "Fantasma Veneno", nivel : 27}
  ]










    mostrarCaverna(){
    if(this.visivelCaverna == true){
      this.visivelCaverna = false;
    }else{
      this.visivelCaverna = true;
    }
  }

  cavernaPersonagens =[
    {Id:1, personagem : "Hank", arma:"Arco",forca: 3, agilidade: 9, inteligencia: 6, estamina: 4, img:"https://www.absoluteanime.com/dungeons_and_dragons/hank[3].jpg"},
    {Id:2, personagem : "Eric", arma:"Escudo",forca: 6, agilidade: 4, inteligencia: 4, estamina: 9, img:"https://i.pinimg.com/736x/ab/98/f6/ab98f6c2d8e5c40489c01fefd9a92f8b.jpg"},
    {Id:3, personagem : "Diana", arma:"Bastão",forca: 5, agilidade: 7, inteligencia: 5, estamina: 3, img:"http://3.bp.blogspot.com/-DuGShHTw9yc/VasIWKSZi0I/AAAAAAAAE1A/rbfw68Yg8MA/s1600/CIMG3404.JPG"},
    {Id:4, personagem : "Sheila", arma:"Capuz de Invisibilitè",forca: 4, agilidade: 10, inteligencia: 7, estamina: 3,img:"https://3.bp.blogspot.com/-gt3lmOP8CjE/WF0BIxv70oI/AAAAAAAAYNA/8DalkPMHBCAGO6_y5IwGO83vZ7ZOysx-wCLcB/s1600/Gifs%2Banimados%2BCaverna%2Bdo%2BDrag%25C3%25A3o%2B5.gif"},
    {Id:5, personagem : "Presto", arma:"Chapéu de Feiticeiro",forca: 2, agilidade: 4, inteligencia: 12, estamina: 2, img:"https://4.bp.blogspot.com/-9hiGziulmnc/Tx9Zjn23euI/AAAAAAAAC6Y/Tz7PQWORSLM/s1600/presto4.jpg"},
    {Id:6, personagem : "Bobby", arma:"Tacape",forca: 13, agilidade: 5, inteligencia: -1, estamina: 1, img:"https://s.aficionados.com.br/imagens/bobby.jpg"},
    {Id:6, personagem : "Uni", arma:"Relinchar",forca: 0, agilidade: 10, inteligencia: -10, estamina: 'é pego toda hora', img:"https://3.bp.blogspot.com/-azoGeJ9KnPo/U8nZj5BTXRI/AAAAAAABfmM/1P6Ix7mS2AI/s1600/50.jpg"},
    {Id:6, personagem : "Mestre Dos Magos", arma:"Comprar Marlboro",forca: 0, agilidade: 9999999, inteligencia: 777, estamina: '???', img:"https://i.pinimg.com/originals/3d/fb/db/3dfbdbd20e6c1f027bf83d2d830abfc4.gif"},
    {Id:6, personagem : "Vingador", arma:"Ser Corno",forca: 999, agilidade: 500, inteligencia: 432, estamina: 198 , img:"https://1.bp.blogspot.com/-5unuJYKhTRE/UlqhGWzqA8I/AAAAAAAAA7M/mh9LxJwb_d0/w1200-h630-p-k-no-nu/26+-+Vingador.jpg"} 
  ];

}