import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor() {

  }

  readonly baseUrl = './assets/bandeiras';
  // C:\Users\escal\OneDrive\Área de Trabalho\Work\Maisa\Catalogo Paises\src\assets\bandeiras\afeganistao.svg

  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Argentina',
      capital: 'Buenos Aires',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/argentina.svg`
    },
    {
      id: 1,
      name: 'Bolívia',
      capital: 'Sucre',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/bolivia.svg`
    },
    {
      id: 2,
      name: 'Brasil',
      capital: 'Brasília',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/brasil.svg`
    },
    {
      id: 3,
      name: 'Chile',
      capital: 'Santiago',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/chile.svg`
    },
    {
      id: 4,
      name: 'Colômbia',
      capital: 'Bogotá',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/colombia.svg`
    },
    {
      id: 5,
      name: 'Equador',
      capital: 'Quito',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/equador.svg`
    },
    {
      id: 6,
      name: 'Guiana',
      capital: 'Georgetown',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/guiana.svg`
    },
    {
      id: 7,
      name: 'Paraguai',
      capital: 'Assunção',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/paraguai.svg`
    },
    {
      id: 8,
      name: 'Peru',
      capital: 'Lima',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/peru.svg`
    },
    {
      id: 9,
      name: 'Suriname',
      capital: 'Paramaribo',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/suriname.svg`
    },
    {
      id: 10,
      name: 'Uruguai',
      capital: 'Montevidéu',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/uruguai.svg`
    },
    {
      id: 11,
      name: 'Venezuela',
      capital: 'Caracas',
      continent: 'América do Sul',
      photo: `${this.baseUrl}/venezuela.svg`
    },
    {
      id: 12,
      name: 'Belize',
      capital: 'Belmopan',
      continent: 'América Central',
      photo: `${this.baseUrl}/belize.svg`
    },
    {
      id: 13,
      name: 'Costa Rica',
      capital: 'San José',
      continent: 'América Central',
      photo: `${this.baseUrl}/costa_rica.svg`
    },
    {
      id: 14,
      name: 'El Salvador',
      capital: 'San Salvador',
      continent: 'América Central',
      photo: `${this.baseUrl}/el_salvador.svg`
    },
    {
      id: 15,
      name: 'Guatemala',
      capital: 'Cidade da Guatemala',
      continent: 'América Central',
      photo: `${this.baseUrl}/guatemala.svg`
    },
    {
      id: 16,
      name: 'Honduras',
      capital: 'Tegucigalpa',
      continent: 'América Central',
      photo: `${this.baseUrl}/honduras.svg`
    },
    {
      id: 17,
      name: 'Nicarágua',
      capital: 'Manágua',
      continent: 'América Central',
      photo: `${this.baseUrl}/nicaragua.svg`
    },
    {
      id: 18,
      name: 'Panamá',
      capital: 'Cidade do Panamá',
      continent: 'América Central',
      photo: `${this.baseUrl}/panama.svg`
    },
    {
      id: 19,
      name: 'Canadá',
      capital: 'Ottawa',
      continent: 'América do Norte',
      photo: `${this.baseUrl}/canada.svg`
    },
    {
      id: 20,
      name: 'Estados Unidos',
      capital: 'Washington, D.C.',
      continent: 'América do Norte',
      photo: `${this.baseUrl}/estados_unidos.svg`
    },
    {
      id: 21,
      name: 'México',
      capital: 'Cidade do México',
      continent: 'América do Norte',
      photo: `${this.baseUrl}/mexico.svg`
    },
    {
      id: 22,
      name: 'Albânia',
      capital: 'Tirana',
      continent: 'Europa',
      photo: `${this.baseUrl}/albania.svg`
    },
    {
      id: 23,
      name: 'Alemanha',
      capital: 'Berlim',
      continent: 'Europa',
      photo: `${this.baseUrl}/alemanha.svg`
    },
    {
      id: 24,
      name: 'Andorra',
      capital: 'Andorra-a-Velha',
      continent: 'Europa',
      photo: `${this.baseUrl}/andorra.svg`
    },
    {
      id: 25,
      name: 'Áustria',
      capital: 'Viena',
      continent: 'Europa',
      photo: `${this.baseUrl}/austria.svg`
    },
    {
      id: 26,
      name: 'Bélgica',
      capital: 'Bruxelas',
      continent: 'Europa',
      photo: `${this.baseUrl}/belgica.svg`
    },
    {
      id: 27,
      name: 'Bielorrússia',
      capital: 'Minsk',
      continent: 'Europa',
      photo: `${this.baseUrl}/bielorrussia.svg`
    },
    {
      id: 28,
      name: 'Bósnia e Herzegovina',
      capital: 'Saraievo',
      continent: 'Europa',
      photo: `${this.baseUrl}/bosnia_herzegovina.svg`
    },
    {
      id: 29,
      name: 'Bulgária',
      capital: 'Sófia',
      continent: 'Europa',
      photo: `${this.baseUrl}/bulgaria.svg`
    },
    {
      id: 30,
      name: 'Chipre',
      capital: 'Nicósia',
      continent: 'Europa',
      photo: `${this.baseUrl}/chipre.svg`
    },
    {
      id: 31,
      name: 'Croácia',
      capital: 'Zagreb',
      continent: 'Europa',
      photo: `${this.baseUrl}/croacia.svg`
    },
    {
      id: 32,
      name: 'Dinamarca',
      capital: 'Copenhague',
      continent: 'Europa',
      photo: `${this.baseUrl}/dinamarca.svg`
    },
    {
      id: 33,
      name: 'Eslováquia',
      capital: 'Bratislava',
      continent: 'Europa',
      photo: `${this.baseUrl}/eslovaquia.svg`
    },
    {
      id: 34,
      name: 'Eslovênia',
      capital: 'Liubliana',
      continent: 'Europa',
      photo: `${this.baseUrl}/eslovenia.svg`
    },
    {
      id: 35,
      name: 'Espanha',
      capital: 'Madrid',
      continent: 'Europa',
      photo: `${this.baseUrl}/espanha.svg`
    },
    {
      id: 36,
      name: 'Estónia',
      capital: 'Talim',
      continent: 'Europa',
      photo: `${this.baseUrl}/estonia.svg`
    },
    {
      id: 37,
      name: 'Finlândia',
      capital: 'Helsínquia',
      continent: 'Europa',
      photo: `${this.baseUrl}/finlandia.svg`
    },
    {
      id: 38,
      name: 'França',
      capital: 'Paris',
      continent: 'Europa',
      photo: `${this.baseUrl}/franca.svg`
    },
    {
      id: 39,
      name: 'Grécia',
      capital: 'Atenas',
      continent: 'Europa',
      photo: `${this.baseUrl}/grecia.svg`
    },
    {
      id: 40,
      name: 'Hungria',
      capital: 'Budapeste',
      continent: 'Europa',
      photo: `${this.baseUrl}/hungria.svg`
    },
    {
      id: 41,
      name: 'Irlanda',
      capital: 'Dublin',
      continent: 'Europa',
      photo: `${this.baseUrl}/irlanda.svg`
    },
    {
      id: 42,
      name: 'Islândia',
      capital: 'Reiquiavique',
      continent: 'Europa',
      photo: `${this.baseUrl}/islandia.svg`
    },
    {
      id: 43,
      name: 'Itália',
      capital: 'Roma',
      continent: 'Europa',
      photo: `${this.baseUrl}/italia.svg`
    },
    {
      id: 44,
      name: 'Kosovo',
      capital: 'Pristina',
      continent: 'Europa',
      photo: `${this.baseUrl}/kosovo.png`
    },
    {
      id: 45,
      name: 'Letônia',
      capital: 'Riga',
      continent: 'Europa',
      photo: `${this.baseUrl}/letonia.svg`
    },
    {
      id: 46,
      name: 'Liechtenstein',
      capital: 'Vaduz',
      continent: 'Europa',
      photo: `${this.baseUrl}/liechtenstein.svg`
    },
    {
      id: 47,
      name: 'Lituânia',
      capital: 'Vilnius',
      continent: 'Europa',
      photo: `${this.baseUrl}/lituania.svg`
    },
    {
      id: 48,
      name: 'Luxemburgo',
      capital: 'Luxemburgo',
      continent: 'Europa',
      photo: `${this.baseUrl}/luxemburgo.svg`
    },
    {
      id: 49,
      name: 'Macedônia do Norte',
      capital: 'Skopje',
      continent: 'Europa',
      photo: `${this.baseUrl}/macedonia_norte.png`
    },
    {
      id: 50,
      name: 'Malta',
      capital: 'Valletta',
      continent: 'Europa',
      photo: `${this.baseUrl}/malta.svg`
    },
    {
      id: 51,
      name: 'Moldávia',
      capital: 'Quixinau',
      continent: 'Europa',
      photo: `${this.baseUrl}/moldavia.png`
    },
    {
      id: 52,
      name: 'Mônaco',
      capital: 'Mônaco',
      continent: 'Europa',
      photo: `${this.baseUrl}/monaco.png`
    },
    {
      id: 53,
      name: 'Montenegro',
      capital: 'Podgorica',
      continent: 'Europa',
      photo: `${this.baseUrl}/montenegro.png`
    },
    {
      id: 54,
      name: 'Noruega',
      capital: 'Oslo',
      continent: 'Europa',
      photo: `${this.baseUrl}/noruega.svg`
    },
    {
      id: 55,
      name: 'Países Baixos',
      capital: 'Amsterdã',
      continent: 'Europa',
      photo: `${this.baseUrl}/paises_baixos.webp`
    },
    {
      id: 56,
      name: 'Polônia',
      capital: 'Varsóvia',
      continent: 'Europa',
      photo: `${this.baseUrl}/polonia.svg`
    },
    {
      id: 57,
      name: 'Portugal',
      capital: 'Lisboa',
      continent: 'Europa',
      photo: `${this.baseUrl}/portugal.svg`
    },
    {
      id: 58,
      name: 'Reino Unido',
      capital: 'Londres',
      continent: 'Europa',
      photo: `${this.baseUrl}/reino_unido.svg`
    },
    {
      id: 59,
      name: 'República Checa',
      capital: 'Praga',
      continent: 'Europa',
      photo: `${this.baseUrl}/republica_checa.png`
    },
    {
      id: 60,
      name: 'Romênia',
      capital: 'Bucareste',
      continent: 'Europa',
      photo: `${this.baseUrl}/romenia.svg`
    },
    {
      id: 61,
      name: 'Rússia',
      capital: 'Moscou',
      continent: 'Europa',
      photo: `${this.baseUrl}/russia.svg`
    },
    {
      id: 62,
      name: 'San Marino',
      capital: 'San Marino',
      continent: 'Europa',
      photo: `${this.baseUrl}/san_marino.png`
    },
    {
      id: 63,
      name: 'Sérvia',
      capital: 'Belgrado',
      continent: 'Europa',
      photo: `${this.baseUrl}/servia.png`
    },
    {
      id: 64,
      name: 'Suécia',
      capital: 'Estocolmo',
      continent: 'Europa',
      photo: `${this.baseUrl}/suecia.svg`
    },
    {
      id: 65,
      name: 'Suíça',
      capital: 'Berna',
      continent: 'Europa',
      photo: `${this.baseUrl}/suica.svg`
    },
    {
      id: 66,
      name: 'Ucrânia',
      capital: 'Quieve',
      continent: 'Europa',
      photo: `${this.baseUrl}/ucrania.svg`
    },
    {
      id: 67,
      name: 'Vaticano',
      capital: 'Cidade do Vaticano',
      continent: 'Europa',
      photo: `${this.baseUrl}/vaticano.svg`
    },
    {
      id: 68,
      name: 'África do Sul',
      capital: 'Cidade do Cabo, Pretória, Bloemfontein',
      continent: 'África',
      photo: `${this.baseUrl}/africa_do_sul.svg`
    },
    {
      id: 69,
      name: 'Angola',
      capital: 'Luanda',
      continent: 'África',
      photo: `${this.baseUrl}/angola.svg`
    },
    {
      id: 70,
      name: 'Argélia',
      capital: 'Argel',
      continent: 'África',
      photo: `${this.baseUrl}/argelia.webp`
    },
    {
      id: 71,
      name: 'Benim',
      capital: 'Porto Novo',
      continent: 'África',
      photo: `${this.baseUrl}/benim.svg`
    },
    {
      id: 72,
      name: 'Botswana',
      capital: 'Gaborone',
      continent: 'África',
      photo: `${this.baseUrl}/botswana.svg`
    },
    {
      id: 73,
      name: 'Burkina Faso',
      capital: 'Uagadugu',
      continent: 'África',
      photo: `${this.baseUrl}/burkina_faso.svg`
    },
    {
      id: 74,
      name: 'Burundi',
      capital: 'Gitega',
      continent: 'África',
      photo: `${this.baseUrl}/burundi.svg`
    },
    {
      id: 75,
      name: 'Cabo Verde',
      capital: 'Praia',
      continent: 'África',
      photo: `${this.baseUrl}/cabo_verde.svg`
    },
    {
      id: 76,
      name: 'Camarões',
      capital: 'Yaoundé',
      continent: 'África',
      photo: `${this.baseUrl}/camaroes.svg`
    },
    {
      id: 77,
      name: 'Chade',
      capital: 'Njamena',
      continent: 'África',
      photo: `${this.baseUrl}/chade.svg`
    },
    {
      id: 78,
      name: 'Comores',
      capital: 'Moroni',
      continent: 'África',
      photo: `${this.baseUrl}/comores.svg`
    },
    {
      id: 79,
      name: 'Congo-Brazzaville',
      capital: 'Brazavile',
      continent: 'África',
      photo: `${this.baseUrl}/congo_brazzaville.svg`
    },
    {
      id: 80,
      name: 'Congo-Kinshasa',
      capital: 'Kinshasa',
      continent: 'África',
      photo: `${this.baseUrl}/congo_kinshasa.png`
    },
    {
      id: 81,
      name: 'Costa do Marfim',
      capital: 'Yamoussoukro',
      continent: 'África',
      photo: `${this.baseUrl}/costa_do_marfim.svg`
    },
    {
      id: 82,
      name: 'Djibouti',
      capital: 'Djibouti',
      continent: 'África',
      photo: `${this.baseUrl}/djibouti.png`
    },
    {
      id: 83,
      name: 'Egito',
      capital: 'Cairo',
      continent: 'África',
      photo: `${this.baseUrl}/egito.svg`
    },
    {
      id: 84,
      name: 'Eritreia',
      capital: 'Asmara',
      continent: 'África',
      photo: `${this.baseUrl}/eritreia.svg`
    },
    {
      id: 85,
      name: 'Eswatini',
      capital: 'Lobamba, Mbabane',
      continent: 'África',
      photo: `${this.baseUrl}/eswatini.png`
    },
    {
      id: 86,
      name: 'Etiópia',
      capital: 'Adis Abeba',
      continent: 'África',
      photo: `${this.baseUrl}/etiopia.svg`
    },
    {
      id: 87,
      name: 'Gabão',
      capital: 'Libreville',
      continent: 'África',
      photo: `${this.baseUrl}/gabao.svg`
    },
    {
      id: 88,
      name: 'Gâmbia',
      capital: 'Banjul',
      continent: 'África',
      photo: `${this.baseUrl}/gambia.svg`
    },
    {
      id: 89,
      name: 'Gana',
      capital: 'Acra',
      continent: 'África',
      photo: `${this.baseUrl}/gana.svg`
    },
    {
      id: 90,
      name: 'Guiné',
      capital: 'Conacri',
      continent: 'África',
      photo: `${this.baseUrl}/guine.svg`
    },
    {
      id: 91,
      name: 'Guiné-Bissau',
      capital: 'Bissau',
      continent: 'África',
      photo: `${this.baseUrl}/guine_bissau.svg`
    },
    {
      id: 92,
      name: 'Guiné Equatorial',
      capital: 'Malabo',
      continent: 'África',
      photo: `${this.baseUrl}/guine_equatorial.svg`
    },
    {
      id: 93,
      name: 'Lesoto',
      capital: 'Maseru',
      continent: 'África',
      photo: `${this.baseUrl}/lesoto.svg`
    },
    {
      id: 94,
      name: 'Libéria',
      capital: 'Monróvia',
      continent: 'África',
      photo: `${this.baseUrl}/liberia.svg`
    },
    {
      id: 95,
      name: 'Líbia',
      capital: 'Trípoli',
      continent: 'África',
      photo: `${this.baseUrl}/libia.svg`
    },
    {
      id: 96,
      name: 'Madagascar',
      capital: 'Antananarivo',
      continent: 'África',
      photo: `${this.baseUrl}/madagascar.svg`
    },
    {
      id: 97,
      name: 'Malawi',
      capital: 'Lilongwe',
      continent: 'África',
      photo: `${this.baseUrl}/malawi.svg`
    },
    {
      id: 98,
      name: 'Mali',
      capital: 'Bamaco',
      continent: 'África',
      photo: `${this.baseUrl}/mali.svg`
    },
    {
      id: 99,
      name: 'Marrocos',
      capital: 'Rabat',
      continent: 'África',
      photo: `${this.baseUrl}/marrocos.svg`
    },
    {
      id: 100,
      name: 'Mauritânia',
      capital: 'Nouakchott',
      continent: 'África',
      photo: `${this.baseUrl}/mauritania.svg`
    },
    {
      id: 101,
      name: 'Maurícia',
      capital: 'Port Louis',
      continent: 'África',
      photo: `${this.baseUrl}/mauricia.png`
    },
    {
      id: 102,
      name: 'Moçambique',
      capital: 'Maputo',
      continent: 'África',
      photo: `${this.baseUrl}/mocambique.svg`
    },
    {
      id: 103,
      name: 'Namíbia',
      capital: 'Windhoek',
      continent: 'África',
      photo: `${this.baseUrl}/namibia.svg`
    },
    {
      id: 104,
      name: 'Níger',
      capital: 'Niamey',
      continent: 'África',
      photo: `${this.baseUrl}/niger.svg`
    },
    {
      id: 105,
      name: 'Nigéria',
      capital: 'Abuja',
      continent: 'África',
      photo: `${this.baseUrl}/nigeria.svg`
    },
    {
      id: 106,
      name: 'Quênia',
      capital: 'Nairóbi',
      continent: 'África',
      photo: `${this.baseUrl}/quenia.svg`
    },
    {
      id: 107,
      name: 'República Centro-Africana',
      capital: 'Bangui',
      continent: 'África',
      photo: `${this.baseUrl}/republica_centroafricana.svg`
    },
    {
      id: 108,
      name: 'República Democrática do Congo',
      capital: 'Kinshasa',
      continent: 'África',
      photo: `${this.baseUrl}/republica_democratica_congo.webp`
    },
    {
      id: 109,
      name: 'Ruanda',
      capital: 'Quigali',
      continent: 'África',
      photo: `${this.baseUrl}/ruanda.svg`
    },
    {
      id: 110,
      name: 'São Tomé e Príncipe',
      capital: 'São Tomé',
      continent: 'África',
      photo: `${this.baseUrl}/sao_tome_principe.svg`
    },
    {
      id: 111,
      name: 'Senegal',
      capital: 'Dacar',
      continent: 'África',
      photo: `${this.baseUrl}/senegal.svg`
    },
    {
      id: 112,
      name: 'Serra Leoa',
      capital: 'Freetown',
      continent: 'África',
      photo: `${this.baseUrl}/serra_leoa.svg`
    },
    {
      id: 113,
      name: 'Seychelles',
      capital: 'Victoria',
      continent: 'África',
      photo: `${this.baseUrl}/seychelles.png`
    },
    {
      id: 114,
      name: 'Somália',
      capital: 'Mogadíscio',
      continent: 'África',
      photo: `${this.baseUrl}/somalia.svg`
    },
    {
      id: 115,
      name: 'Sudão',
      capital: 'Cartum',
      continent: 'África',
      photo: `${this.baseUrl}/sudao.svg`
    },
    {
      id: 116,
      name: 'Sudão do Sul',
      capital: 'Juba',
      continent: 'África',
      photo: `${this.baseUrl}/sudao_sul.svg`
    },
    {
      id: 117,
      name: 'São Tomé e Príncipe',
      capital: 'São Tomé',
      continent: 'África',
      photo: `${this.baseUrl}/sao_tome_principe.svg`
    },
    {
      id: 118,
      name: 'Tanzânia',
      capital: 'Dodoma',
      continent: 'África',
      photo: `${this.baseUrl}/tanzania.svg`
    },
    {
      id: 119,
      name: 'Togo',
      capital: 'Lomé',
      continent: 'África',
      photo: `${this.baseUrl}/togo.svg`
    },
    {
      id: 120,
      name: 'Tunísia',
      capital: 'Túnis',
      continent: 'África',
      photo: `${this.baseUrl}/tunisia.svg`
    },
    {
      id: 121,
      name: 'Uganda',
      capital: 'Campala',
      continent: 'África',
      photo: `${this.baseUrl}/uganda.svg`
    },
    {
      id: 122,
      name: 'Zâmbia',
      capital: 'Lusaka',
      continent: 'África',
      photo: `${this.baseUrl}/zambia.svg`
    },
    {
      id: 123,
      name: 'Zimbabwe',
      capital: 'Harare',
      continent: 'África',
      photo: `${this.baseUrl}/zimbabwe.png`
    },
    {
      id: 124,
      name: 'Afeganistão',
      capital: 'Cabul',
      continent: 'Ásia',
      photo: `${this.baseUrl}/afeganistao.svg`
    },
    {
      id: 125,
      name: 'Arábia Saudita',
      capital: 'Riade',
      continent: 'Ásia',
      photo: `${this.baseUrl}/arabia_saudita.svg`
    },
    {
      id: 126,
      name: 'Armênia',
      capital: 'Erevan',
      continent: 'Ásia',
      photo: `${this.baseUrl}/armenia.svg`
    },
    {
      id: 127,
      name: 'Azerbaijão',
      capital: 'Baku',
      continent: 'Ásia',
      photo: `${this.baseUrl}/azerbaijao.svg`
    },
    {
      id: 128,
      name: 'Bangladesh',
      capital: 'Daca',
      continent: 'Ásia',
      photo: `${this.baseUrl}/bangladesh.svg`
    },
    {
      id: 129,
      name: 'Barein',
      capital: 'Manama',
      continent: 'Ásia',
      photo: `${this.baseUrl}/barein.png`
    },
    {
      id: 130,
      name: 'Bhutan',
      capital: 'Timbu',
      continent: 'Ásia',
      photo: `${this.baseUrl}/bhutan.png`
    },
    {
      id: 131,
      name: 'Brunei',
      capital: 'Bandar Seri Begauã',
      continent: 'Ásia',
      photo: `${this.baseUrl}/brunei.svg`
    },
    {
      id: 132,
      name: 'Camboja',
      capital: 'Phnom Penh',
      continent: 'Ásia',
      photo: `${this.baseUrl}/camboja.svg`
    },
    {
      id: 133,
      name: 'Cazaquistão',
      capital: 'Nur-Sultan',
      continent: 'Ásia',
      photo: `${this.baseUrl}/cazaquistao.svg`
    },
    {
      id: 134,
      name: 'China',
      capital: 'Pequim',
      continent: 'Ásia',
      photo: `${this.baseUrl}/china.svg`
    },
    {
      id: 135,
      name: 'Chipre',
      capital: 'Nicósia',
      continent: 'Ásia',
      photo: `${this.baseUrl}/chipre.svg`
    },
    {
      id: 136,
      name: 'Coreia do Norte',
      capital: 'Pionguiangue',
      continent: 'Ásia',
      photo: `${this.baseUrl}/coreia_norte.svg`
    },
    {
      id: 137,
      name: 'Coreia do Sul',
      capital: 'Seul',
      continent: 'Ásia',
      photo: `${this.baseUrl}/coreia_sul.svg`
    },
    {
      id: 138,
      name: 'Emirados Árabes Unidos',
      capital: 'Abu Dhabi',
      continent: 'Ásia',
      photo: `${this.baseUrl}/emirados_arabes_unidos.svg`
    },
    {
      id: 139,
      name: 'Filipinas',
      capital: 'Manila',
      continent: 'Ásia',
      photo: `${this.baseUrl}/filipinas.svg`
    },
    {
      id: 140,
      name: 'Geórgia',
      capital: 'Tbilisi',
      continent: 'Ásia',
      photo: `${this.baseUrl}/georgia.svg`
    },
    {
      id: 141,
      name: 'Iémen',
      capital: 'Saná',
      continent: 'Ásia',
      photo: `${this.baseUrl}/iemen.svg`
    },
    {
      id: 142,
      name: 'Índia',
      capital: 'Nova Deli',
      continent: 'Ásia',
      photo: `${this.baseUrl}/india.svg`
    },
    {
      id: 143,
      name: 'Indonésia',
      capital: 'Jacarta',
      continent: 'Ásia',
      photo: `${this.baseUrl}/indonesia.svg`
    },
    {
      id: 144,
      name: 'Irã',
      capital: 'Teerã',
      continent: 'Ásia',
      photo: `${this.baseUrl}/ira.png`
    },
    {
      id: 145,
      name: 'Iraque',
      capital: 'Bagdá',
      continent: 'Ásia',
      photo: `${this.baseUrl}/iraque.svg`
    },
    {
      id: 146,
      name: 'Israel',
      capital: 'Jerusalém',
      continent: 'Ásia',
      photo: `${this.baseUrl}/israel.svg`
    },
    {
      id: 147,
      name: 'Japão',
      capital: 'Tóquio',
      continent: 'Ásia',
      photo: `${this.baseUrl}/japao.svg`
    },
    {
      id: 148,
      name: 'Jordânia',
      capital: 'Amã',
      continent: 'Ásia',
      photo: `${this.baseUrl}/jordania.png`
    },
    {
      id: 149,
      name: 'Laos',
      capital: 'Vientiane',
      continent: 'Ásia',
      photo: `${this.baseUrl}/laos.svg`
    },
    {
      id: 150,
      name: 'Líbano',
      capital: 'Beirute',
      continent: 'Ásia',
      photo: `${this.baseUrl}/libano.svg`
    },
    {
      id: 151,
      name: 'Malásia',
      capital: 'Kuala Lumpur',
      continent: 'Ásia',
      photo: `${this.baseUrl}/malasia.svg`
    },
    {
      id: 152,
      name: 'Maldivas',
      capital: 'Malé',
      continent: 'Ásia',
      photo: `${this.baseUrl}/maldivas.svg`
    },
    {
      id: 153,
      name: 'Mongólia',
      capital: 'Ulã Bator',
      continent: 'Ásia',
      photo: `${this.baseUrl}/mongolia.png`
    },
    {
      id: 154,
      name: 'Myanmar (Birmânia)',
      capital: 'Naypyidaw',
      continent: 'Ásia',
      photo: `${this.baseUrl}/myanmar.svg`
    },
    {
      id: 155,
      name: 'Nepal',
      capital: 'Catmandu',
      continent: 'Ásia',
      photo: `${this.baseUrl}/nepal.svg`
    },
    {
      id: 156,
      name: 'Omã',
      capital: 'Mascate',
      continent: 'Ásia',
      photo: `${this.baseUrl}/oma.svg`
    },
    {
      id: 157,
      name: 'Paquistão',
      capital: 'Islamabad',
      continent: 'Ásia',
      photo: `${this.baseUrl}/paquistao.svg`
    },
    {
      id: 158,
      name: 'Qatar',
      capital: 'Doa',
      continent: 'Ásia',
      photo: `${this.baseUrl}/qatar.webp`
    },
    {
      id: 159,
      name: 'Quirguistão',
      capital: 'Bisqueque',
      continent: 'Ásia',
      photo: `${this.baseUrl}/quirguistao.svg`
    },
    {
      id: 160,
      name: 'Rússia',
      capital: 'Moscou',
      continent: 'Ásia',
      photo: `${this.baseUrl}/russia.svg`
    },
    {
      id: 161,
      name: 'Singapura',
      capital: 'Singapura',
      continent: 'Ásia',
      photo: `${this.baseUrl}/singapura.svg`
    },
    {
      id: 162,
      name: 'Síria',
      capital: 'Damasco',
      continent: 'Ásia',
      photo: `${this.baseUrl}/siria.svg`
    },
    {
      id: 163,
      name: 'Sri Lanka',
      capital: 'Sri Jayawardenepura Kotte',
      continent: 'Ásia',
      photo: `${this.baseUrl}/sri_lanka.svg`
    },
    {
      id: 164,
      name: 'Tailândia',
      capital: 'Bangcoc',
      continent: 'Ásia',
      photo: `${this.baseUrl}/tailandia.svg`
    },
    {
      id: 165,
      name: 'Taiwan',
      capital: 'Taipé',
      continent: 'Ásia',
      photo: `${this.baseUrl}/taiwan.svg`
    },
    {
      id: 166,
      name: 'Tajiquistão',
      capital: 'Duchambe',
      continent: 'Ásia',
      photo: `${this.baseUrl}/tajiquistao.svg`
    },
    {
      id: 167,
      name: 'Timor-Leste',
      capital: 'Díli',
      continent: 'Ásia',
      photo: `${this.baseUrl}/timor_leste.svg`
    },
    {
      id: 168,
      name: 'Turcomenistão',
      capital: 'Asgabate',
      continent: 'Ásia',
      photo: `${this.baseUrl}/turcomenistao.svg`
    },
    {
      id: 169,
      name: 'Turquia',
      capital: 'Ancara',
      continent: 'Ásia',
      photo: `${this.baseUrl}/turquia.svg`
    },
    {
      id: 170,
      name: 'Uzbequistão',
      capital: 'Tashkent',
      continent: 'Ásia',
      photo: `${this.baseUrl}/uzbequistao.svg`
    },
    {
      id: 171,
      name: 'Vietnã',
      capital: 'Hanói',
      continent: 'Ásia',
      photo: `${this.baseUrl}/vietna.png`
    },
    {
      id: 172,
      name: 'Yemen',
      capital: 'Saná',
      continent: 'Ásia',
      photo: `${this.baseUrl}/iemen.svg`
    },
    {
      id: 147,
      name: 'Austrália',
      capital: 'Canberra',
      continent: 'Oceania',
      photo: `${this.baseUrl}/australia.svg`
    },
    {
      id: 148,
      name: 'Fiji',
      capital: 'Suva',
      continent: 'Oceania',
      photo: `${this.baseUrl}/fiji.svg`
    },
    {
      id: 149,
      name: 'Ilhas Marshall',
      capital: 'Majuro',
      continent: 'Oceania',
      photo: `${this.baseUrl}/ilhas_marshall.svg`
    },
    {
      id: 150,
      name: 'Ilhas Salomão',
      capital: 'Honiara',
      continent: 'Oceania',
      photo: `${this.baseUrl}/ilhas_salomao.svg`
    },
    {
      id: 151,
      name: 'Kiribati',
      capital: 'Tarawa',
      continent: 'Oceania',
      photo: `${this.baseUrl}/kiribati.svg`
    },
    {
      id: 152,
      name: 'Micronésia',
      capital: 'Paliquir',
      continent: 'Oceania',
      photo: `${this.baseUrl}/micronesia.svg`
    },
    {
      id: 153,
      name: 'Nauru',
      capital: 'Yaren',
      continent: 'Oceania',
      photo: `${this.baseUrl}/nauru.svg`
    },
    {
      id: 154,
      name: 'Nova Zelândia',
      capital: 'Wellington',
      continent: 'Oceania',
      photo: `${this.baseUrl}/nova_zelandia.svg`
    },
    {
      id: 155,
      name: 'Palau',
      capital: 'Ngerulmud',
      continent: 'Oceania',
      photo: `${this.baseUrl}/palau.svg`
    },
    {
      id: 156,
      name: 'Papua Nova Guiné',
      capital: 'Porto Moresby',
      continent: 'Oceania',
      photo: `${this.baseUrl}/papua_nova_guine.png`
    },
    {
      id: 157,
      name: 'Samoa',
      capital: 'Apia',
      continent: 'Oceania',
      photo: `${this.baseUrl}/samoa.svg`
    },
    {
      id: 158,
      name: 'Timor-Leste',
      capital: 'Díli',
      continent: 'Oceania',
      photo: `${this.baseUrl}/timor_leste.svg`
    },
    {
      id: 159,
      name: 'Tonga',
      capital: 'Nucualofa',
      continent: 'Oceania',
      photo: `${this.baseUrl}/tonga.svg`
    },
    {
      id: 160,
      name: 'Tuvalu',
      capital: 'Funafuti',
      continent: 'Oceania',
      photo: `${this.baseUrl}/tuvalu.svg`
    },
    {
      id: 161,
      name: 'Vanuatu',
      capital: 'Porto Vila',
      continent: 'Oceania',
      photo: `${this.baseUrl}/vanuatu.svg`
    }
  ];


  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  } 
}

