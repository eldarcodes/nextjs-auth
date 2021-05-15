export type User = {
  username: string;
  password: string;
  id: string;
  role: "admin" | "user";
  blocked: boolean;
  enableLimit: boolean;
};

export interface IDatabase {
  users: User[];
  MIN_PASSWORD_LENGTH: number;
}

export const database: IDatabase = {
  users: [
    {
      id: "10756446927454463",
      username: "denis",
      password: "denis2000",
      role: "admin",
      blocked: false,
      enableLimit: false,
    },
    {
      id: "50756534692741463",
      username: "ben",
      password: "ben1990",
      role: "admin",
      blocked: false,
      enableLimit: false,
    },
    {
      id: "50756441292741463",
      username: "tom",
      password: "tomsecret",
      role: "user",
      blocked: false,
      enableLimit: false,
    },
    {
      id: "5075644692741463",
      username: "Rhea",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Brazil",
    },
    {
      id: "1441287253583529",
      username: "Sheree",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Solomon Islands",
    },
    {
      id: "8381545139812757",
      username: "Flory",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Pitcairn",
    },
    {
      id: "3715801167456221",
      username: "Valera",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Sierra Leone",
    },
    {
      id: "8454063516191203",
      username: "Deedee",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Mexico",
    },
    {
      id: "1941660255233375",
      username: "Carly",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Indonesia",
    },
    {
      id: "5801107836584221",
      username: "Perry",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Greenland",
    },
    {
      id: "8805168335445991",
      username: "Amelia",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Zambia",
    },
    {
      id: "8032798930399589",
      username: "Florencia",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Ukraine",
    },
    {
      id: "7250564049457697",
      username: "Brena",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Falkland Islands (Malvinas)",
    },
    {
      id: "6526836469077131",
      username: "Arlena",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Suriname",
    },
    {
      id: "1053603684649223",
      username: "Maisey",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Germany",
    },
    {
      id: "8727055230944195",
      username: "Lyssa",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Turkmenistan",
    },
    {
      id: "4453703644313333",
      username: "Nyssa",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Estonia",
    },
    {
      id: "5899125621769673",
      username: "Fidelia",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "New Zealand",
    },
    {
      id: "5821732384966103",
      username: "Michaelina",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Mauritius",
    },
    {
      id: "1748089017509943",
      username: "Amii",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Portugal",
    },
    {
      id: "8854231559513491",
      username: "Carlie",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Bolivia",
    },
    {
      id: "6824991719685451",
      username: "Netty",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Mauritius",
    },
    {
      id: "4242816892682109",
      username: "Viviene",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Algeria",
    },
    {
      id: "6105263842794757",
      username: "Chickie",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Portugal",
    },
    {
      id: "8403759106076919",
      username: "Audrie",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "French Polynesia",
    },
    {
      id: "239878669211047",
      username: "Winifred",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: 'Cote D"Ivoire',
    },
    {
      id: "7696959653033999",
      username: "Dominga",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Viet Nam",
    },
    {
      id: "959337312530395",
      username: "Meriel",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Iran, Islamic Republic Of",
    },
    {
      id: "527606428619571",
      username: "Jenilee",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Taiwan, Province of China",
    },
    {
      id: "166613906513333",
      username: "Cyb",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Cayman Islands",
    },
    {
      id: "1126020489589513",
      username: "Ericka",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Albania",
    },
    {
      id: "4255174106431077",
      username: "Heida",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: 'Cote D"Ivoire',
    },
    {
      id: "3623484940285699",
      username: "Giustina",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Montserrat",
    },
    {
      id: "8135790865769225",
      username: "Britte",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Åland Islands",
    },
    {
      id: "639607873265531",
      username: "Carree",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Cook Islands",
    },
    {
      id: "3892571248529823",
      username: "Doro",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Western Sahara",
    },
    {
      id: "4133647163090281",
      username: "Zia",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Tuvalu",
    },
    {
      id: "7828194347800555",
      username: "Fredericka",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Paraguay",
    },
    {
      id: "7090525566919365",
      username: "Shirlee",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Cambodia",
    },
    {
      id: "1287790646816913",
      username: "Donetta",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Denmark",
    },
    {
      id: "3080268107828835",
      username: "Lucy",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Iran, Islamic Republic Of",
    },
    {
      id: "329206530784093",
      username: "Sibella",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Iceland",
    },
    {
      id: "6607509371418653",
      username: "Annabela",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Brunei Darussalam",
    },
    {
      id: "1440183431784139",
      username: "Britte",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Christmas Island",
    },
    {
      id: "8799894785237325",
      username: "Jemie",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Haiti",
    },
    {
      id: "7677516856673489",
      username: "Sandie",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Angola",
    },
    {
      id: "3535282696334347",
      username: "Hayley",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Belgium",
    },
    {
      id: "4224974650204805",
      username: "Neila",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: 'Lao People"S Democratic Republic',
    },
    {
      id: "5259968726955831",
      username: "Rochette",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: 'Korea, Democratic People"S Republic of',
    },
    {
      id: "4340225653067661",
      username: "Letizia",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "France",
    },
    {
      id: "829777896021937",
      username: "Marinna",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Guernsey",
    },
    {
      id: "7779686652838795",
      username: "Shirlee",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Georgia",
    },
    {
      id: "219388021437295",
      username: "Louella",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Belize",
    },
    {
      id: "2722436817698463",
      username: "Ruthe",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Central African Republic",
    },
    {
      id: "2655861552433867",
      username: "Ada",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Slovenia",
    },
    {
      id: "2873806171959825",
      username: "Candi",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Paraguay",
    },
    {
      id: "165411006910191",
      username: "Jordan",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Bahrain",
    },
    {
      id: "1337376574637857",
      username: "Ketti",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Nigeria",
    },
    {
      id: "4616683617228459",
      username: "Elie",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Chile",
    },
    {
      id: "1895328699693891",
      username: "Christal",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Bermuda",
    },
    {
      id: "702929117551909",
      username: "Vonny",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Gabon",
    },
    {
      id: "2839009503710057",
      username: "Flo",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Bulgaria",
    },
    {
      id: "3656769438571905",
      username: "Reeba",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Tunisia",
    },
    {
      id: "3964094206476211",
      username: "Heida",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Norway",
    },
    {
      id: "1318557667186855",
      username: "Joy",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Malawi",
    },
    {
      id: "7546438502847255",
      username: "Magdalena",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Anguilla",
    },
    {
      id: "6617471650080267",
      username: "Merle",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Iceland",
    },
    {
      id: "1502954516078469",
      username: "Leeanne",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Guyana",
    },
    {
      id: "8178538493447013",
      username: "Dione",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Suriname",
    },
    {
      id: "6523488936389103",
      username: "Rosene",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Greece",
    },
    {
      id: "658363949380129",
      username: "Angela",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Portugal",
    },
    {
      id: "8647155249871205",
      username: "Ayn",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "South Georgia and the South Sandwich Islands",
    },
    {
      id: "7800371534696173",
      username: "Stevana",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Ireland",
    },
    {
      id: "6237299902626037",
      username: "Abbie",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Italy",
    },
    {
      id: "8267983754365771",
      username: "Carolina",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Morocco",
    },
    {
      id: "4520768853016343",
      username: "Caressa",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Switzerland",
    },
    {
      id: "8315626387034945",
      username: "Maisey",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Burkina Faso",
    },
    {
      id: "8617590540073191",
      username: "Meghann",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Bahrain",
    },
    {
      id: "3645110506987275",
      username: "Noelle",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Honduras",
    },
    {
      id: "2579438612909269",
      username: "Phylis",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Ireland",
    },
    {
      id: "5984588501779799",
      username: "Sindee",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Turks and Caicos Islands",
    },
    {
      id: "5678529101998321",
      username: "Almeta",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Belgium",
    },
    {
      id: "2537532846005167",
      username: "Edith",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Angola",
    },
    {
      id: "4319782870148197",
      username: "Kimberley",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Senegal",
    },
    {
      id: "4320276203649069",
      username: "Deloria",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Yemen",
    },
    {
      id: "3396050802014967",
      username: "Alia",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: 'Korea, Democratic People"S Republic of',
    },
    {
      id: "874395749405925",
      username: "Berget",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Netherlands",
    },
    {
      id: "6349071404123073",
      username: "Iseabal",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Morocco",
    },
    {
      id: "2329201550626753",
      username: "Elmira",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Bahrain",
    },
    {
      id: "5545982531096335",
      username: "Dagmar",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Uzbekistan",
    },
    {
      id: "2585729528077501",
      username: "Micheline",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Guinea-Bissau",
    },
    {
      id: "8523228645018727",
      username: "Dorothy",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Nigeria",
    },
    {
      id: "3110411155964255",
      username: "Winny",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Malaysia",
    },
    {
      id: "7190898550515695",
      username: "Jolyn",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: 'Lao People"S Democratic Republic',
    },
    {
      id: "6801045837069581",
      username: "Tilly",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Netherlands",
    },
    {
      id: "1723771236507303",
      username: "Carree",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Bahrain",
    },
    {
      id: "6958619551227555",
      username: "Chastity",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Trinidad and Tobago",
    },
    {
      id: "3913737491673083",
      username: "Evaleen",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Azerbaijan",
    },
    {
      id: "6739777269669129",
      username: "Randa",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Armenia",
    },
    {
      id: "7830938251741593",
      username: "Sidoney",
      blocked: false,
      enableLimit: false,
      role: "user",
      password: "Dominican Republic",
    },
    {
      id: "4395492892650773",
      username: "Tersina",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Guam",
    },
    {
      id: "2900721524104749",
      username: "Marti",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Zambia",
    },
    {
      id: "2445443446038451",
      username: "Ernesta",
      blocked: false,
      enableLimit: false,
      role: "admin",
      password: "Christmas Island",
    },
  ],
  MIN_PASSWORD_LENGTH: 3,
};
