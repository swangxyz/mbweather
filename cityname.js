var citynames = ["ABBOTSFORD",
"AGASSIZ",
"AHOUSAT",
"AIRDRIE",
"AJAX",
"ALBERTVILLE",
"AMHERST",
"AMHERSTBURG",
"ANZAC",
"ARBORG",
"ASCOT CORNER",
"ASHVILLE",
"ATIKOKAN",
"AYLESFORD",
"AYLMER",
"BADEN",
"BAGOTVILLE",
"BAIE-COMEAU",
"BAIE-SAINT-PAUL",
"BAKER LAKE",
"BALA",
"BANFF",
"BARACHOIS",
"BARRIE",
"BAYFIELD",
"BEAMSVILLE",
"BEAUPORT",
"BEAUSEJOUR",
"BEAVER COVE",
"BECANCOUR",
"BEDFORD",
"BELCOURT",
"BELLEVILLE",
"BELMONT",
"BIG BROOK",
"BIRCH HILLS",
"BIRKEN",
"BLOEDEL",
"BOUCHERVILLE",
"BOWMANVILLE",
"BRACEBRIDGE",
"BRAMPTON",
"BRANDON",
"BRANTFORD",
"BRIGHTON",
"BROMPTONVILLE",
"BRUCE MINES",
"BURIN",
"BURLINGTON",
"BURNABY",
"BYLOT",
"CACOUNA",
"CALGARY",
"CALLANDER",
"CAMBRIDGE",
"CAMPBELL RIVER",
"CAMPBELLTON",
"CANMORE",
"CAP CHAT",
"CAP-DE-LA-MADELEINE",
"CAP-DES-ROSIERS",
"CARCROSS",
"CARONPORT",
"CARP",
"CASTLEGAR",
"CASTOR",
"CHAMBORD",
"CHAMPAGNE",
"CHAPAIS",
"CHARLESBOURG",
"CHARLIE LAKE",
"CHARLOTTETOWN",
"CHATHAM",
"CHIBOUGAMAU",
"CHICOUTIMI",
"CHILLIWACK",
"CHURCHILL",
"CHUTE-AUX-OUTARDES",
"CLAIRMONT",
"CLARKE CITY",
"CLINTON",
"COAL HARBOUR",
"COALDALE",
"COBDEN",
"COCHRANE",
"CODROY",
"COLBORNE",
"COLD LAKE",
"COLLINGWOOD",
"COLLINS BAY",
"COMOX",
"CONISTON",
"COPPER CLIFF",
"COPPER CREEK",
"CORMORANT",
"CORNER BROOK",
"CORONATION",
"COURTENAY",
"COURTRIGHT",
"CRANBERRY PORTAGE",
"CRANBROOK",
"CUMBERLAND",
"CUT KNIFE",
"DAFOE",
"DALHOUSIE",
"DARTMOUTH",
"DAUPHIN",
"DAWSON",
"DAWSON CREEK",
"DEBERT",
"DEER LAKE",
"DELHI",
"DENFIELD",
"DENHOLM",
"DEROCHE",
"DEVON",
"DIEPPE",
"DIGGES",
"DOMINION",
"DOUGLASTOWN",
"DUNDAS",
"DUNMORE",
"EAST POINT",
"ECHO BAY",
"EDMONTON",
"EDMUNDSTON",
"EDSON",
"ELLIOT LAKE",
"ELMSDALE",
"ENDERBY",
"ESQUIMALT",
"ESSEX",
"ESTEVAN",
"ETHELBERT",
"ETOBICOKE",
"FAIRMONT HOT SPRINGS",
"FALCONBRIDGE",
"FISKE",
"FLAXCOMBE",
"FLIN FLON",
"FLORAL",
"FORT ERIE",
"FORT FRANCES",
"FORT MACKAY",
"FORT MCMURRAY",
"FORT NELSON",
"FORT SAINT JOHN",
"FORT SASKATCHEWAN",
"FORT STEELE",
"FREDERICTON",
"FRESHFORD",
"GAMBO",
"GANANOQUE",
"GANDER",
"GARIBALDI",
"GASPE",
"GATINEAU",
"GERALDTON",
"GILLAM",
"GIMLI",
"GLACE BAY",
"GLENWOOD",
"GODBOUT",
"GODERICH",
"GODREAU",
"GOLDEN",
"GOOSE BAY",
"GRACEFIELD",
"GRAND BAY",
"GRAND CENTRE",
"GRAND COULEE",
"GRAND FALLS",
"GRAND VIEW",
"GRANDE PRAIRIE",
"GRAVENHURST",
"GREENWOOD",
"GRIMSBY",
"GRINDROD",
"GROSSE ISLE",
"GUELPH",
"HAGUE",
"HALIFAX",
"HAMILTON",
"HAMPDEN",
"HAMPTON",
"HANNA",
"HARE BAY",
"HAWK JUNCTION",
"HAWK LAKE",
"HEBRON",
"HOPE",
"HOWLEY",
"HULL",
"IGNACE",
"ILES-DE-LA-MADELEINE",
"ILFORD",
"INGERSOLL",
"INNISFAIL",
"INVERMERE",
"IQALUIT",
"IRVINE",
"ISLE AUX MORTS",
"JASPER",
"JELLICOE",
"JOLIETTE",
"JONQUIERE",
"KAKABEKA FALLS",
"KAKAWIS",
"KAMLOOPS",
"KANATA",
"KAPUSKASING",
"KEENE",
"KEEWATIN",
"KELOWNA",
"KEMNAY",
"KENORA",
"KENTVILLE",
"KESWICK",
"KILDONAN",
"KIMBERLEY",
"KINCARDINE",
"KINDERSLEY",
"KINGSTON",
"KINUSO",
"KITCHENER",
"KITSCOTY",
"LA BAIE",
"LA COREY",
"LA GRANDE",
"LA MALBAIE",
"LA RONGE",
"LA SALLE",
"LABRADOR CITY",
"LACHINE",
"LACOMBE",
"LAKE LOUISE",
"LAKEFIELD",
"LAMALINE",
"LANGHAM",
"LASHBURN",
"LAVAL",
"LAWN",
"LENNOXVILLE",
"LETHBRIDGE",
"LEVIS",
"LIONS HEAD",
"L'ISLE-VERTE",
"LIVELY",
"LLOYDMINSTER",
"LOCHALSH",
"LOGGIEVILLE",
"LOMOND",
"LONDON",
"LONGLAC",
"LONGUEUIL",
"LORETTEVILLE",
"LUCAN",
"LUCEVILLE",
"LUMSDEN",
"LUND",
"MACALISTER",
"MACCAN",
"MACDOWALL",
"MACKENZIE",
"MAGOG",
"MAGRATH",
"MAITLAND",
"MALARTIC",
"MALTON",
"MANIWAKI",
"MARKHAM",
"MARLBORO",
"MARYSVILLE",
"MASSEY",
"MATANE",
"MATAPEDIA",
"MATTICE",
"MCGREGOR",
"MEAFORD",
"MEDICINE HAT",
"MEMRAMCOOK",
"MERVILLE",
"MESSINES",
"MIDALE",
"MIDDLETON",
"MIDHURST",
"MILTON",
"MINAKI",
"MINE CENTRE",
"MINNEDOSA",
"MIRAMICHI",
"MISSION",
"MISSISSAUGA",
"MOISIE",
"MONCTON",
"MONTE CREEK",
"MONT-JOLI",
"MONT-LAURIER",
"MONTREAL",
"MOONBEAM",
"MOORETOWN",
"MOOSE FACTORY",
"MOOSE JAW",
"MOOSE LAKE",
"MOOSE RIVER",
"MOOSONEE",
"MORINVILLE",
"MOUNT PEARL",
"MOUNT STEWART",
"MUD RIVER",
"NANAIMO",
"NANTICOKE",
"NELSON",
"NELSON HOUSE",
"NEW WATERFORD",
"NEW WESTMINSTER",
"NEWCASTLE",
"NEZAH",
"NIAGARA FALLS",
"NICOLET",
"NIPIGON",
"NOBEL",
"NORTH BATTLEFORD",
"NORTH BAY",
"NORTH SYDNEY",
"NORTH VANCOUVER",
"NORTH WEST RIVER",
"NORTH YORK",
"NOTRE-DAME-DU-PORTAGE",
"OAK BAY",
"OAKVILLE",
"OKANAGAN LANDING",
"OKOTOKS",
"OLIVER",
"OMEMEE",
"ONE HUNDRED FIFTY MILE HOUSE",
"OPASATIKA",
"ORILLIA",
"OROMOCTO",
"OSHAWA",
"OTTAWA",
"OUTREMONT",
"OWEN SOUND",
"OYAMA",
"PARKSVILLE",
"PARRY SOUND",
"PARSON",
"PASQUA",
"PEACHLAND",
"PEERS",
"PEMBERTON",
"PEMBROKE",
"PENTICTON",
"PETAWAWA",
"PETERBOROUGH",
"PICKERING",
"PILOT BUTTE",
"POINT EDWARD",
"POINTE-LEBEL",
"PORT ALBERNI",
"PORT COLBORNE",
"PORT COQUITLAM",
"PORT DOVER",
"PORT EDWARD",
"PORT ESSINGTON",
"PORT HARDY",
"PORT MCNEILL",
"PORT MOODY",
"PORT SIMPSON",
"PORT-AUX-BASQUES",
"PORT-CARTIER",
"POUCH COVE",
"POWASSAN",
"POWELL RIVER",
"PRESTON",
"PRICE",
"PRINCE",
"PRINCE ALBERT",
"PRINCE GEORGE",
"PRINCE RUPERT",
"PROSPECTOR",
"QUALICUM BEACH",
"QUEBEC",
"QUEEN CHARLOTTE",
"QUINSAM",
"RADISSON",
"RADIUM HOT SPRINGS",
"RAE",
"RALEIGH",
"RAYMOND",
"READ ISLAND",
"RED DEER",
"RED ROCK",
"REDCLIFF",
"REGINA",
"REVELSTOKE",
"RHEIN",
"RICHMOND",
"RICHMOND HILL",
"RIMOUSKI",
"RIVERTON",
"RIVIERE-A-CLAUDE",
"RIVIERE-DU-LOUP",
"ROBERVAL",
"ROLLA",
"ROSE BLANCHE",
"ROSETOWN",
"ROSSLAND",
"ROTHESAY",
"SAANICH",
"SACKVILLE",
"SAINT ALBERT",
"SAINT ANTHONY",
"SAINT CATHARINES",
"SAINT CATHARINES ARPT",
"SAINT ELEANORS",
"SAINT JOHN",
"ST. JOHN'S",
"SAINT LAWRENCE",
"SAINT LEONARD",
"SAINT LOUIS",
"SAINT MARYS",
"SAINTE-CATHERINE",
"SAINTE-FELICITE",
"SAINTE-FOY",
"SAINT-EUSTACHE",
"SAINT-FELICIEN",
"SAINT-HUBERT",
"SAINT-IRENEE",
"SAINT-JACQUES",
"SAINT-JOVITE",
"SAINT-PRIME",
"SAINT-SIMEON",
"SALMON ARM",
"SALMON VALLEY",
"SALTCOATS",
"SANDSPIT",
"SARNIA",
"SASKATOON",
"SAULT STE MARIE",
"SAVONA",
"SCARBOROUGH",
"SCHEFFERVILLE",
"SCHUMACHER",
"SELKIRK",
"SEPT-ILES",
"SEVENPERSONS",
"SEXSMITH",
"SHAWANGA",
"SHEDIAC",
"SHERBROOKE",
"SIDNEY",
"SILLERY",
"SIMCOE",
"SIPIWESK",
"SKIDEGATE",
"SLAVE LAKE",
"SMITHERS",
"SNAKE RIVER",
"SODA CREEK",
"SOREL",
"SORRENTO",
"SOURIS",
"SOUTH PORCUPINE",
"SPANISH",
"SPRAGGE",
"SPRINGHILL",
"SPRUCE GROVE",
"SPURFIELD",
"STANLEY MISSION",
"STAYNER",
"STEPHENVILLE",
"STILLWATER",
"STONEWALL",
"STONEY CREEK",
"STONY PLAIN",
"STRATHROY",
"STURGEON FALLS",
"SUDBURY",
"SUMMERLAND",
"SUMMERSIDE",
"SURREY",
"SWIFT CURRENT",
"SYDNEY",
"SYDNEY MINES",
"SYLVAN LAKE",
"TABER",
"TAYLOR",
"TECUMSEH",
"TERRACE",
"THE PAS",
"THOMPSON",
"THORNBURY",
"THOROLD",
"THUNDER BAY",
"TIDEHEAD",
"TILLSONBURG",
"TIMMINS",
"TOFINO",
"TORBAY",
"TORONTO",
"TORQUAY",
"TRACY",
"TRAIL",
"TRENTON",
"TROIS-RIVIERES",
"TRURO",
"TUSKET",
"TUXFORD",
"TYRONE",
"UCLUELET",
"USK",
"VAL-D'OR",
"VANANDA",
"VANCOUVER",
"VASSAN",
"VERDUN",
"VERMILION",
"VETERAN",
"VICTORIA",
"VIRDEN",
"WAASIS",
"WABUSH",
"WALCOTT",
"WALDECK",
"WALTHAM STATION",
"WARMAN",
"WATERLOO",
"WAWA",
"WEBB",
"WEDGEPORT",
"WELLAND",
"WEMBLEY",
"WEYBURN",
"WHISTLER",
"WHITBY",
"WHITEHORSE",
"WIARTON",
"WILLIAMS LAKE",
"WILLOW RIVER",
"WILLOWBROOK",
"WINDERMERE",
"WINDSOR",
"WINNIPEG",
"WISHART",
"WITLESS BAY",
"WOLFE ISLAND",
"WOODBRIDGE",
"WOODSTOCK",
"WYMARK",
"WYNYARD",
"YALE",
"YARMOUTH",
"YELLOWKNIFE",
"YORKTON",
"ZEHNER",
"FORT RELIANCE",
"BUFFALO NARROWS",
"LYNN LAKE",
"RANKIN INLET",
"EDMONTON STONY PLAIN ALTA.",
"EDMONTON NAMAO ALTA.",
"EDMONTON INTERNATIONAL",
"MEADOW LAKE",
"EASTEND CYPRESS",
"ROCKGLEN",
"VAL MARIE SOUTHEAST",
"NORWAY HOUSE",
"ISLAND LAKE",
"CHURCHILL FALLS",
"BURGEO",
"BONAVISTA",
"LAC ST. PIERRE",
"SQUAMISH AIRPORT",
"BADGER",
"WESTERN HEAD",
"PORT WELLER",
"UPSALA",
"SWAN RIVER",
"WASAGAMING",
"MELITA",
"KINDAKUN ROCKS",
"ROSETOWN EAST",
"SABLE ISLAND",
"SHEARWATER",
"ST. STEPHEN",
"MISCOU ISLAND",
"GORE BAY",
"ARGENTIA",
"BLANC SABLON",
"NATASHQUAN",
"MARY'S HARBOUR",
"CARTWRIGHT",
"MATAGAMI",
"SIOUX LOOKOUT",
"BIG TROUT LAKE",
"LANSDOWNE HOUSE",
"RED LAKE",
"BROADVIEW",
"HUDSON BAY",
"LLOYDMINISTER",
"LYTTON",
"ESTEVAN POINT",
"LANGARA",
"KUUJJUARAPIK",
"KUUJJUAQ",
"INUKJUAK",
"CAPE DORSET",
"CORAL HARBOUR",
"LAC LA BICHE",
"FORT CHIPEWYAN",
"FORT SMITH",
"HAY RIVER",
"FORT SIMPSON",
"URANIUM CITY",
"WASKAGANISH",
"WATSON LAKE",
"EARLTON",
"PUNTZI MOUNTAIN",
"HIGH LEVEL",
"PEACE RIVER",
"INUVIK",
"ALGONQUIN PARK",
"ALLISTON",
"BATHURST",
"CHAPLEAU",
"CHARLEVOIX",
"EAR FALLS",
"HALIBURTON",
"HEARST",
"HUNTSVILLE",
"LA TUQUE",
"MIRABEL",
"MUSKOKA",
"RONDEAU",
"GRETNA",
"PORT HAWKESBURY",
"NEW GLASGOW",
"COBOURG",
"HAILEYBURY",
"HAWKESBURY",
"KIRKLAND LAKE",
"LINDSAY",
"MARATHON",
"ORANGEVILLE",
"MIDLAND",
"NEWMARKET",
"SMITHS FALLS",
"BANCROFT",
"LEAMINGTON",
"PICTON",
"PORT ELGIN",
"MOUNT FOREST",
"CORNWALL",
"DRUMMONDVILLE",
"SAINT-HYACINTHE",
"KEJIMKUJIK NATIONAL PARK",
"ARMSTRONG",
"PORTAGE LA PRAIRIE",
"BROCKVILLE",
"DRYDEN",
"ST. THOMAS",
"OLD CROW",
"MINTO BRIDGE",
"MAYO",
"BURWASH LANDING",
"NORMAN WELLS",
"BEAVER CREEK",
"TUKTOYAKTUK",
"FORT MCPHERSON",
"TESLIN",
"FARO",
"SNOWDRIFT",
"FORT FRANKLIN",
"ARIVAT",
"WHALE COVE",
"DEASE LAKE",
"CHETWYND",
"MACKENZIE",
"SOUTHEND",
"PANGNIRTUNG",
"LAKE HARBOUR",
"HOPEDALE",
"FAIRVIEW",
"WHITECOURT",
"MOOSE HEIGHTS",
"MUNDARE",
"VEGREVILLE",
"MELFORT",
"BLUE RIVER",
"WATROUS",
"RALSTON",
"SUFFIELD",
"SCHULER",
"VICTORIA BEACH",
"HARVE-ST-PIERRE",
"NAKUSP",
"BROOKS",
"ENGLEE",
"CHEVERY",
"CAMPBELL ISLAND",
"CLINTON",
"ROCKY MOUNTAIN HOUSE",
"DRUMHELLER",
"THREE HILLS",
"BERGEN",
"ESTHER",
"LEADER",
"FISHER BRANCH",
"PICKLE LAKE",
"SHOAL COVE",
"BOW ISLAND",
"MAPLE CREEK",
"MADELEINE-CENTRE",
"PRINCETON",
"CRESTON",
"COLEMAN",
"BROCKET",
"PINCHER CREEK",
"CLARESHOLM",
"CORONHACH",
"PILOT MOUND",
"MORDEN",
"RAINY RIVER",
"NEW CARLISLE",
"ROUYN",
"CHUTE-DES-PASSES",
"AMQUI",
"PORT-MENIER",
"SPARWOOD",
"DEL BONITA",
"EMERSON",
"KILLARNEY",
"MCADAM",
"INGONISH",
"GRAND ETANG",
"ANTIGONISH",
"CAPE RACE",
"SHAWINIGAN",
"NOTRE-DAME-DE-LA-SALETTE",
"PAPINEAUVILLE",
"BEAUPRE",
"BEAUCEVILLE",
"PORTNEUF",
"WOODSTOCK",
"DIPPER HARBOUR WEST",
"CORNWALL",
"WALKERTON",
"LUNENBURG",
"CANSO",
"CHATHAM",
"WINCHESTER",
"HAINES JUNCTION",
"LUPIN",
"SPIRITWOOD",
"QUESNEL",
"GRAND RAPIDS",
"LONGUE-POINTE",
"TWILLINGATE",
"CARDSTON",
"CARMAN",
"PARENT",
"MIAMI",
"CHETICAMP",
"DEGELIS",
"KEMPTVILLE",
"FREEPORT",
"BURNS LAKE",
"MILK RIVER",
"VILLE-MARIE",
"ANGLIERS",
"KANANASKIS",
"WEST VANCOUVER",
"FERNIE",
"MOUNT WASHINGTON",
"PANORAMA",
"SILVER STAR MOUNTAIN",
"SUN PEAKS",
"LA RIVIERE",
"CALABOGIE",
"COLDWATER",
"SAINT-SAUVEUR",
"MONT-TREMBLANT",
"PETITE-RIVIERE-SAINT-FRANCOIS",
"LAC STE. MARIE",
"ST-FAUSTIN-LAC-CARRE",
"ORFORD",
"SUTTON",
"MANSONVILLE",
"BROMONT",
"STONEHAM",
"ASSINIBOIA",
"LIVERPOOL+BAY",
"NAGAGAMI",
"NORTH+POINT",
"BEAVER+ISLAND",
"BEACONSFIELD",
"OSOYOOS",
"SAGUENAY",
"SAINT-GEORGES",
"ALERT",
"MERRITT",
"BERNARD+HARBOUR",
"ABBEY",
"ABEE",
"ABERDEEN",
"ACADIA+VALLEY",
"ACME",
"ACTON",
"ACTON+VALE",
"ADVOCATE+HARBOUR",
"AGUANISH",
"AKLAVIK",
"ALAMEDA",
"ALBANEL",
"ALBERTON",
"ALERT+BAY",
"ALEXANDER",
"ALEXANDRIA",
"ALEXIS+CREEK",
"ALFRED",
"ALIDA",
"ALIX",
"ALKALI+LAKE",
"ALLAN",
"ALLIANCE",
"ALMONTE",
"ALONSA",
"ALSASK",
"ALTONA",
"ALVENA",
"AMOS",
"ANDREW",
"ANGUS",
"ANJOU",
"ANNAPOLIS+ROYAL",
"APSLEY",
"ARBORFIELD",
"ARCOLA",
"ARCTIC+BAY",
"ARDROSSAN",
"ARGYLE",
"ARICHAT",
"ARMAGH",
"ARMSTRONG+STATION",
"ARNPRIOR",
"ARNTFIELD",
"ARTHUR",
"ARVIAT",
"ASBESTOS",
"ASHCROFT",
"ASHERN",
"ASHMONT",
"ASQUITH",
"ATHABASCA",
"ATLEE",
"ATLIN",
"AURORA",
"AUSTIN",
"AUTHIER",
"AUTHIER-NORD",
"AVOLA",
"AVONLEA",
"AYR",
"AYTON",
"BADDECK",
"BAIE+VERTE",
"BAIE-D+URFE",
"BAIE-DES-SABLES",
"BAIE-SAINTE-CATHERINE",
"BALCARRES",
"BALDUR",
"BALFOUR",
"BAMFIELD",
"BARONS",
"BARRAUTE",
"BARRHEAD",
"BARRIERE",
"BARRINGTON+PASSAGE",
"BARWICK",
"BASHAW",
"BASSANO",
"BATH",
"BATISCAN",
"BATTEAU",
"BATTLE+HARBOUR",
"BATTLEFORD",
"BAULINE",
"BAY+BULLS",
"BAY+DE+VERDE",
"BAY+ROBERTS",
"BEACHBURG",
"BEAR+LAKE",
"BEAR+RIVER",
"BEARDMORE",
"BEARN",
"BEARSKIN+LAKE",
"BEAUHARNOIS",
"BEAUMONT",
"BEAUVAL",
"BEAVERLODGE",
"BEAVERTON",
"BEECHY",
"BEISEKER",
"BELL+ISLAND",
"BELLA+BELLA",
"BELLA+COOLA",
"BELLE+RIVER",
"BELLEORAM",
"BELLEVUE",
"BELOEIL",
"BENGOUGH",
"BENITO",
"BENTLEY",
"BERENS+RIVER",
"BERTHIERVILLE",
"BERWICK",
"BERWYN",
"BETHANY",
"BETHUNE",
"BETSIAMITES",
"BEULAH",
"BIENFAIT",
"BIG+RIVER",
"BIG+VALLEY",
"BIGGAR",
"BINDLOSS",
"BINSCARTH",
"BIRCH+ISLAND",
"BIRCHY+BAY",
"BIRSAY",
"BIRTLE",
"BISCOTASING",
"BISSETT",
"BLACK+CREEK",
"BLACK+DIAMOND",
"BLACK+LAKE",
"BLACKFALDS",
"BLACKIE",
"BLACKVILLE",
"BLAINE+LAKE",
"BLANC-SABLON",
"BLENHEIM",
"BLIND+RIVER",
"BLUE+RIDGE",
"BOBCAYGEON",
"BOIESTOWN",
"BOIS-DES-FILION",
"BOISCHATEL",
"BOISDALE",
"BOISSEVAIN",
"BOLTON",
"BON+ACCORD",
"BONAVENTURE",
"BONNYVILLE",
"BORDEN",
"BOSWELL",
"BOTWOOD",
"BOWDEN",
"BOWSER",
"BOYLE",
"BRADFORD",
"BRAESIDE",
"BRANCH",
"BRECHIN",
"BREDENBURY",
"BRETON",
"BRIDGE+LAKE",
"BRIDGETOWN",
"BRIDGEWATER",
"BRIERCREST",
"BRIGUS",
"BRITANNIA+BEACH",
"BRITT",
"BROCHET",
"BROOKFIELD",
"BROSSARD",
"BROWNSBURG",
"BROWNVALE",
"BRUNO",
"BRYSON",
"BUCHANAN",
"BUCHANS",
"BUCKHORN",
"BUCKINGHAM",
"BURSTALL",
"CABANO",
"CABRI",
"CACHE+CREEK",
"CALDER",
"CALEDON",
"CALEDON+EAST",
"CALEDONIA",
"CALLING+LAKE",
"CALMAR",
"CAMBRIDGE+BAY",
"CAMPBELLFORD",
"CAMPERVILLE",
"CAMROSE",
"CANAL+FLATS",
"CANDIAC",
"CANNINGTON",
"CANOE+NARROWS",
"CANORA",
"CANWOOD",
"CAP-AUX-MEULES",
"CAP-CHAT",
"CAP-ROUGE",
"CAPE+BROYLE",
"CAPLAN",
"CAPREOL",
"CARAMAT",
"CARAQUET",
"CARBERRY",
"CARBONEAR",
"CARDIGAN",
"CARGILL",
"CARLETON+PLACE",
"CARLYLE",
"CARMACKS",
"CARMANVILLE",
"CARNDUFF",
"CAROLINE",
"CARROT+RIVER",
"CARSELAND",
"CARSTAIRS",
"CARTIER",
"CASSELMAN",
"CAT+LAKE",
"CATALINA",
"CAUSAPSCAL",
"CAYLEY",
"CENTRALIA",
"CENTREVILLE",
"CEREAL",
"CEYLON",
"CHALK+RIVER",
"CHAMBLY",
"CHAMPION",
"CHAMPLAIN",
"CHANDLER",
"CHANGE+ISLANDS",
"CHANNEL-PORT+AUX+BASQUES",
"CHAPEL+ARM",
"CHAPLIN",
"CHARLEMAGNE",
"CHARLTON",
"CHARNY",
"CHASE",
"CHATEAUGUAY",
"CHATSWORTH",
"CHAUVIN",
"CHELMSFORD",
"CHEMAINUS",
"CHESLEY",
"CHESTER",
"CHESTERFIELD",
"CHESTERFIELD+INLET",
"CHEVERIE",
"CHOMEDEY",
"CLARENVILLE",
"CLEARWATER",
"CLERICY",
"CLERMONT",
"CLIMAX",
"CLIVE",
"CLORIDORME",
"CLOVA",
"CLYDE+RIVER",
"COATICOOK",
"COBALT",
"COBBLE+HILL",
"COBOCONK",
"CODERRE",
"COE+HILL",
"COLCHESTER",
"COLEVILLE",
"COLLIERS",
"COLONSAY",
"COLVILLE+LAKE",
"COMBER",
"COME+BY+CHANCE",
"COMMANDA",
"CONCEPTION+HARBOUR",
"CONCHE",
"CONKLIN",
"CONNAUGHT",
"CONQUEST",
"CONSORT",
"CONTRECOEUR",
"COOKSHIRE",
"COPPERMINE",
"COQUITLAM",
"COTE-SAINT-LUC",
"COTTAM",
"COUTTS",
"COW+HEAD",
"COWANSVILLE",
"COWICHAN+BAY",
"COWLEY",
"CRABTREE",
"CRAIGMYLE",
"CREDITON",
"CREEMORE",
"CREMONA",
"CROSS+LAKE",
"CROSSFIELD",
"CRYSTAL+BEACH",
"CRYSTAL+CITY",
"CUDWORTH",
"CUMBERLAND+HOUSE",
"CUPAR",
"CYPRESS+RIVER",
"CZAR",
"DALMENY",
"DANVILLE",
"DAPP",
"DAVIDSON",
"DAYSLAND",
"DEBDEN",
"DEBEC",
"DELBURNE",
"DELINE",
"DELORAINE",
"DELSON",
"DENBIGH",
"DENZIL",
"DESBARATS",
"DESBIENS",
"DESCHAILLONS-SUR-SAINT-LAURENT",
"DESERONTO",
"DESTRUCTION+BAY",
"DEUX-MONTAGNES",
"DIDSBURY",
"DIGBY",
"DILLON",
"DINGWALL",
"DINSMORE",
"DISRAELI",
"DIXONVILLE",
"DOAKTOWN",
"DODSLAND",
"DOLLARD-DES-ORMEAUX",
"DOMINION+CITY",
"DOMREMY",
"DONALDA",
"DONNACONA",
"DONNELLY",
"DORSET",
"DORVAL",
"DOUGLAS+LAKE",
"DOVER",
"DRAYTON+VALLEY",
"DRESDEN",
"DRUMBO",
"DUBUISSON",
"DUCHESS",
"DUCK+LAKE",
"DUNCAN",
"DUNDALK",
"DUNDURN",
"DUNNVILLE",
"DUNSFORD",
"DUNSTER",
"DUPARQUET",
"DUPUY",
"DURHAM",
"DUVERNAY",
"EAGLE+RIVER",
"EAGLESHAM",
"EAST+ANGUS",
"EAST+COULEE",
"EAST+PINE",
"EASTEND",
"EASTERN+PASSAGE",
"EASTMAIN",
"EASTMAN",
"EASTPORT",
"ECUM+SECUM",
"EDAM",
"EDGERTON",
"EDZO",
"EGANVILLE",
"ELBOW",
"ELGIN",
"ELK+LAKE",
"ELK+POINT",
"ELKHORN",
"ELKO",
"ELLISTON",
"ELM+CREEK",
"ELMIRA",
"ELMVALE",
"ELORA",
"ELROSE",
"EMPRESS",
"EMSDALE",
"ENCHANT",
"ENGLEHART",
"ENGLISH+HARBOUR+EAST",
"ENNADAI",
"ERIEAU",
"ERIKSDALE",
"ERIN",
"ESPANOLA",
"ESTAIRE",
"ESTEREL",
"ESTERHAZY",
"ESTON",
"ETZIKOM",
"EUGENIA",
"EXETER",
"EYEBROW",
"FABRE",
"FABREVILLE",
"FARNHAM",
"FAUST",
"FENELON+FALLS",
"FERGUS",
"FERINTOSH",
"FERME-NEUVE",
"FERMEUSE",
"FILLMORE",
"FINCH",
"FINGAL",
"FLANDERS",
"FLATBUSH",
"FLEMING",
"FLESHERTON",
"FLEUR+DE+LYS",
"FOAM+LAKE",
"FOGO",
"FOLEYET",
"FOND-DU-LAC",
"FOREMOST",
"FOREST",
"FORESTBURG",
"FORESTVILLE",
"FORT+ALBANY",
"FORT+ASSINIBOINE",
"FORT+FRASER",
"FORT+GOOD+HOPE",
"FORT+HOPE",
"FORT+LIARD",
"FORT+MACLEOD",
"FORT+PROVIDENCE",
"FORT+QU+APPELLE",
"FORT+RESOLUTION",
"FORT+SEVERN",
"FORT+THOMSON",
"FORT+VERMILION",
"FORT+VERMILLION",
"FORTIERVILLE",
"FORTUNE",
"FOX+VALLEY",
"FOYMOUNT",
"FRANCIS",
"FRANKFORD",
"FRASER+LAKE",
"FREDERICTON+JUNCTION",
"FRENCH+VILLAGE",
"FRESHWATER",
"FROBISHER",
"FRUITVALE",
"GABARUS",
"GABRIOLA",
"GADSBY",
"GAGETOWN",
"GAINSBOROUGH",
"GALAHAD",
"GALT",
"GANGES",
"GARDEN+RIVER",
"GARNISH",
"GARSON",
"GAULTOIS",
"GIBSONS",
"GILBERT+PLAINS",
"GILMOUR",
"GIROUXVILLE",
"GJOA+HAVEN",
"GLADSTONE",
"GLASLYN",
"GLASSVILLE",
"GLEICHEN",
"GLEN+ROBERTSON",
"GLENBORO",
"GLENCOE",
"GLENDON",
"GLOVERTOWN",
"GOGAMA",
"GOLD+BRIDGE",
"GOLDBORO",
"GOLDEN+LAKE",
"GOODERHAM",
"GOODSOIL",
"GOSHEN",
"GOVAN",
"GOWGANDA",
"GRAND+BANK",
"GRAND+BEACH",
"GRAND+BEND",
"GRAND+FORKS",
"GRAND+NARROWS",
"GRAND+VALLEY",
"GRAND-SAULT",
"GRANDE-ENTREE",
"GRANDE-RIVIERE",
"GRANDE-VALLEE",
"GRANDES-BERGERONNES",
"GRANDES-PILES",
"GRASSLAND",
"GRASSY+LAKE",
"GRASSY+PLAINS",
"GRATES+COVE",
"GRAVELBOURG",
"GREAT+VILLAGE",
"GREEN+LAKE",
"GREENFIELD+PARK",
"GREENSPOND",
"GRENFELL",
"GRENVILLE",
"GRIMSHAW",
"GUIGUES",
"GULL+LAKE",
"GUYSBOROUGH",
"GYPSUMVILLE",
"HAFFORD",
"HAGERSVILLE",
"HALKIRK",
"HAMIOTA",
"HANLEY",
"HANOVER",
"HANTSPORT",
"HARBOUR+BRETON",
"HARBOUR+GRACE",
"HARDISTY",
"HARRINGTON+HARBOUR",
"HARRISTON",
"HARROW",
"HARTLAND",
"HARTLEY+BAY",
"HARTNEY",
"HASTINGS",
"HAVRE-AUBERT",
"HAVRE-SAINT-PIERRE",
"HAWARDEN",
"HAY+LAKES",
"HAZELTON",
"HEART+S+CONTENT",
"HEART+S+DESIRE",
"HEBERTVILLE",
"HEDLEY",
"HEINSBURG",
"HEISLER",
"HEMMINGFORD",
"HENSALL",
"HERBERT",
"HERSCHEL",
"HESPELER",
"HIGH+PRAIRIE",
"HIGH+RIVER",
"HILDA",
"HILLSBOROUGH",
"HINES+CREEK",
"HINTON",
"HIXON",
"HOBBEMA",
"HODGEVILLE",
"HOLBERG",
"HOLDEN",
"HOLMAN",
"HOLYROOD",
"HOPEWELL",
"HORNEPAYNE",
"HORSEFLY",
"HOUSTON",
"HOWICK",
"HUBBARDS",
"HUMBOLDT",
"HUNTER+RIVER",
"HUNTINGDON",
"HUSSAR",
"HYTHE",
"IBERVILLE",
"ILE-A-LA-CROSSE",
"INDIAN+HEAD",
"INGLESIDE",
"INWOOD",
"IRMA",
"IROQUOIS",
"IROQUOIS+FALLS",
"IRRICANA",
"ISLAND+FALLS",
"ISLAND+HARBOUR",
"ITUNA",
"IVUGIVIK",
"JACQUET+RIVER",
"JAMESTOWN",
"JANSEN",
"JARVIE",
"JEAN+MARIE+RIVER",
"JENNER",
"JOGGINS",
"JOUSSARD",
"KAKISA",
"KAMSACK",
"KEDGWICK",
"KEG+RIVER",
"KELLIHER",
"KELVINGTON",
"KENASTON",
"KENNEDY",
"KENNETCOOK",
"KENSINGTON",
"KEREMEOS",
"KERROBERT",
"KIAMIKA",
"KILLAM",
"KINCAID",
"KINCOLITH",
"KING+CITY",
"KINGSVILLE",
"KINISTINO",
"KINMOUNT",
"KIPAWA",
"KISBEY",
"KITIMAT",
"KITWANGA",
"KLEMTU",
"KNOWLTON",
"KUGAARUK",
"KUGLUKTUK",
"L+ANNONCIATION",
"L+ANSE-SAINT-JEAN",
"L+ASSOMPTION",
"L+EPIPHANIE",
"L+ORIGNAL",
"LA+GUADELOUPE",
"LA+LOCHE",
"LA+REINE",
"LA+SARRE",
"LA+SCIE",
"LABELLE",
"LAC+DU+BONNET",
"LAC+SEUL",
"LAC-AU-SAUMON",
"LAC-AUX-SABLES",
"LAC-BOUCHETTE",
"LAC-MEGANTIC",
"LACHUTE",
"LACOLLE",
"LADLE+COVE",
"LADYSMITH",
"LAFLECHE",
"LAFONTAINE",
"LAIRD",
"LAKE+ALMA",
"LAKE+COWICHAN",
"LAKE+LENORE",
"LAMONT",
"LAMPMAN",
"LANCASTER",
"LANDIS",
"LANDRIENNE",
"LANG",
"LANGENBURG",
"LANGLEY",
"LANGRUTH",
"LANIEL",
"LANIGAN",
"LANORAIE",
"LARDER+LAKE",
"LARK+HARBOUR",
"LARRYS+RIVER",
"LATCHFORD",
"LAURENTIDES",
"LAVAL-DES-RAPIDES",
"LAVAL-OUEST",
"LAVALTRIE",
"LAVERLOCHERE",
"LAVOY",
"LEDUC",
"LEFROY",
"LEGAL",
"LEMBERG",
"LEOVILLE",
"LERY",
"LES+ESCOUMINS",
"LES+MECHINS",
"LESLIEVILLE",
"LEVACK",
"LEWISPORTE",
"LILLOOET",
"LIMERICK",
"LINTLAW",
"LIPTON",
"LISTOWEL",
"LITTLE+BURNT+BAY",
"LITTLE+CURRENT",
"LITTLE+FORT",
"LITTLE+GRAND+RAPIDS",
"LIVERPOOL",
"LOCKEPORT",
"LONG+SAULT",
"LOON+LAKE",
"LOOS",
"LOTBINIERE",
"LOUGHEED",
"LOUISBOURG",
"LOUISEVILLE",
"LOURDES",
"LOW",
"LOWER+ISLAND+COVE",
"LOWER+POST",
"LUCKNOW",
"LUCKY+LAKE",
"LUMBY",
"LUSELAND",
"LUSKVILLE",
"LYSTER",
"MABOU",
"MACAMIC",
"MACDIARMID",
"MACGREGOR",
"MACKLIN",
"MACTIER",
"MADOC",
"MADSEN",
"MAFEKING",
"MAGNETAWAN",
"MAHONE+BAY",
"MAIDSTONE",
"MAKKOVIK",
"MALAHAT",
"MANIGOTAGAN",
"MANITOU",
"MANITOUWADGE",
"MANITOWANING",
"MANKOTA",
"MANNVILLE",
"MANOR",
"MANOUANE",
"MANSEAU",
"MANYBERRIES",
"MAPLE+GROVE",
"MARCELIN",
"MARIEVILLE",
"MARKDALE",
"MARKSTAY",
"MARMORA",
"MARWAYNE",
"MARYFIELD",
"MARYSTOWN",
"MASKINONGE",
"MASSET",
"MATACHEWAN",
"MATHESON",
"MATTAWA",
"MAXVILLE",
"MAYMONT",
"MAYNOOTH",
"MCBRIDE",
"MCCREARY",
"MCLENNAN",
"MCLEOD+LAKE",
"MCMASTERVILLE",
"MEACHAM",
"MEANDER+RIVER",
"MEATH+PARK",
"MEDUCTIC",
"MELOCHEVILLE",
"MELVILLE",
"MERIGOMISH",
"MERRICKVILLE",
"METABETCHOUAN",
"METEGHAN",
"MIDWAY",
"MILDEN",
"MILDMAY",
"MILLBROOK",
"MILLERTOWN",
"MILLET",
"MILLHAVEN",
"MILLVILLE",
"MILO",
"MILVERTON",
"MINDEN",
"MINIOTA",
"MINTO",
"MINTON",
"MISSANABIE",
"MISTATIM",
"MITCHELL",
"MONT-LOUIS",
"MONT-ROYAL",
"MONT-SAINT-HILAIRE",
"MONTAGUE",
"MONTEBELLO",
"MONTMAGNY",
"MONTMARTRE",
"MONTNEY",
"MONTREAL-EST",
"MONTREAL-NORD",
"MONTREAL-OUEST",
"MOOSOMIN",
"MORELL",
"MORLEY",
"MORRIN",
"MORRIS",
"MORRISBURG",
"MORSON",
"MORTLACH",
"MOSSBANK",
"MOUNT+PLEASANT",
"MOUNT+UNIACKE",
"MOYIE",
"MULGRAVE",
"MURDOCHVILLE",
"MUSKOKA+FALLS",
"MUSQUODOBOIT+HARBOUR",
"MUTTON+BAY",
"MYRNAM",
"NAHANNI+BUTTE",
"NAICAM",
"NAIN",
"NAKINA",
"NAMAO",
"NAMPA",
"NANTON",
"NAPANEE",
"NAPIERVILLE",
"NEEPAWA",
"NEGUAC",
"NEIDPATH",
"NEILBURG",
"NEMISCAU",
"NEUDORF",
"NEUVILLE",
"NEW+DAYTON",
"NEW+DENVER",
"NEW+GERMANY",
"NEW+HAMBURG",
"NEW+HARBOUR",
"NEW+LISKEARD",
"NEW+PERLICAN",
"NEW+RICHMOND",
"NEW+ROSS",
"NEWBROOK",
"NEWBURGH",
"NEWDALE",
"NEWPORT",
"NIAGARA-ON-THE-LAKE",
"NIPAWIN",
"NIPPERS+HARBOUR",
"NISKU",
"NOBLEFORD",
"NOELVILLE",
"NOKOMIS",
"NORDEGG",
"NORMANDIN",
"NORMETAL",
"NORRIS+ARM",
"NORTH+PORTAL",
"NORWICH",
"NORWOOD",
"NOTRE-DAME-DU-LAC",
"NOTRE-DAME-DU-LAUS",
"NOTRE-DAME-DU-NORD",
"NOUVELLE",
"O+LEARY",
"OAK+LAKE",
"OBA",
"OCEAN+FALLS",
"OCHRE+RIVER",
"OGEMA",
"OKA",
"OLD+PERLICAN",
"OLDS",
"OMERVILLE",
"ONEFOUR",
"ONOWAY",
"ORLEANS",
"ORMSTOWN",
"ORRVILLE",
"OTTERBURN+PARK",
"OUTLOOK",
"OXBOW",
"OXDRIFT",
"OXFORD",
"OXFORD+HOUSE",
"PACKS+HARBOUR",
"PACQUET",
"PADDOCKWOOD",
"PAISLEY",
"PAKENHAM",
"PALMAROLLE",
"PALMERSTON",
"PARADISE",
"PARADISE+HILL",
"PARADISE+VALLEY",
"PARHAM",
"PARIS",
"PARKHILL",
"PARRSBORO",
"PASS+LAKE",
"PAYNTON",
"PEFFERLAW",
"PELICAN+NARROWS",
"PELICAN+RAPIDS",
"PELLY",
"PELLY+CROSSING",
"PENETANGUISHENE",
"PENHOLD",
"PERDUE",
"PERTH",
"PETITCODIAC",
"PETROLIA",
"PIAPOT",
"PICTOU",
"PIERCELAND",
"PIERREFONDS",
"PIERREVILLE",
"PIKANGIKUM",
"PIKWITONEI",
"PINAWA",
"PINCOURT",
"PINE+FALLS",
"PINE+RIVER",
"PINEY",
"PITT+MEADOWS",
"PLACENTIA",
"PLAMONDON",
"PLASTER+ROCK",
"PLESSISVILLE",
"PLUM+COULEE",
"PLUMAS",
"POINT+LEAMINGTON",
"POINTE+DU+BOIS",
"POINTE-AU-PERE",
"POINTE-AUX-TREMBLES",
"POINTE-CALUMET",
"POINTE-CLAIRE",
"POND+INLET",
"PONOKA",
"PONT-ROUGE",
"PONT-VIAU",
"PONTEIX",
"PORCUPINE+PLAIN",
"PORT+ALICE",
"PORT+AU+CHOIX",
"PORT+BLANDFORD",
"PORT+BURWELL",
"PORT+CLEMENTS",
"PORT+CREDIT",
"PORT+DUFFERIN",
"PORT+GREVILLE",
"PORT+HOOD",
"PORT+HOPE",
"PORT+HOPE+SIMPSON",
"PORT+LORING",
"PORT+MAITLAND",
"PORT+MCNICOLL",
"PORT+MELLON",
"PORT+MORIEN",
"PORT+MOUTON",
"PORT+PERRY",
"PORT+RENFREW",
"PORT+REXTON",
"PORT+ROWAN",
"PORT+SAUNDERS",
"PORT+SEVERN",
"PORT+STANLEY",
"PORT+UNION",
"PORT-DANIEL",
"POUCE+COUPE",
"POULARIES",
"PREECEVILLE",
"PRESCOTT",
"PRINCEVILLE",
"PROVOST",
"PUBNICO",
"PUGWASH",
"PUVIRNITUQ",
"QU+APPELLE",
"QUATHIASKI+COVE",
"QUEENSPORT",
"QUEENSTON",
"QUILL+LAKE",
"QUYON",
"RABBIT+LAKE",
"RADVILLE",
"RADWAY",
"RAITH",
"RAMEA",
"RAMORE",
"RAPID+CITY",
"RAWDON",
"RAYMORE",
"RED+BAY",
"REDVERS",
"RENCONTRE+EAST",
"RENFREW",
"RENNIE",
"REPENTIGNY",
"RESTON",
"RICETON",
"RICH+LAKE",
"RICHELIEU",
"RICHIBUCTO",
"RIDGETOWN",
"RIGAUD",
"RIGOLET",
"RIMBEY",
"RIONDEL",
"RIPLEY",
"RIPON",
"RISKE+CREEK",
"RIVER+HEBERT",
"RIVER+JOHN",
"RIVER+OF+PONDS",
"RIVERHURST",
"RIVERS",
"RIVIERE-A-PIERRE",
"RIVIERE-AU-RENARD",
"RIVIERE-AU-TONNERRE",
"RIVIERE-BLEUE",
"RIVIERE-SAINT-JEAN",
"ROBERTSONVILLE",
"ROBLIN",
"ROCANVILLE",
"ROCHEBAUCOURT",
"ROCK+CREEK",
"ROCKLAND",
"RODDICKTON",
"RODNEY",
"ROGERSVILLE",
"ROLAND",
"ROLLET",
"RORKETON",
"ROSALIND",
"ROSEBUD",
"ROSEMERE",
"ROSS+RIVER",
"ROSSBURN",
"ROSTHERN",
"ROULEAU",
"ROXBORO",
"RUMSEY",
"RUSSELL",
"RYCROFT",
"SACHS+HARBOUR",
"SACRE-COEUR",
"SAINT+BRIDE+S",
"SAINT+BRIEUX",
"SAINT+CLAIR+BEACH",
"SAINT+GEORGE",
"SAINT+GEORGE+S",
"SAINT+GREGOR",
"SAINT+MARTINS",
"SAINT+PAUL",
"SAINT+PETERS+BAY",
"SAINT+THOMAS",
"SAINT+WALBURG",
"SAINT-AGAPIT",
"SAINT-ALEXANDRE",
"SAINT-ALEXANDRE-DE-KAMOURASKA",
"SAINT-AMBROISE",
"SAINT-ANDRE",
"SAINT-ANDRE-AVELLIN",
"SAINT-ANICET",
"SAINT-ANSELME",
"SAINT-ANTOINE-DES-LAURENTIDES",
"SAINT-ANTONIN",
"SAINT-ATHANASE",
"SAINT-BARTHELEMY",
"SAINT-BASILE",
"SAINT-BRUNO-DE-GUIGUES",
"SAINT-BRUNO-DE-MONTARVILLE",
"SAINT-CASIMIR",
"SAINT-CESAIRE",
"SAINT-CHARLES-DE-BELLECHASSE",
"SAINT-CHARLES-SUR-RICHELIEU",
"SAINT-CHRYSOSTOME",
"SAINT-ELEUTHERE",
"SAINT-ELIE-D+ORFORD",
"SAINT-FABIEN",
"SAINT-FELIX-DE-VALOIS",
"SAINT-FRANCOIS-DU-LAC",
"SAINT-FULGENCE",
"SAINT-GABRIEL-DE-BRANDON",
"SAINT-GEDEON",
"SAINT-GEDEON-DE-BEAUCE",
"SAINT-GEORGES-DE-CACOUNA",
"SAINT-GERARD",
"SAINT-GERMAIN-DE-GRANTHAM",
"SAINT-HENRI",
"SAINT-HONORE-DE-TEMISCOUATA",
"SAINT-JEAN-BAPTISTE",
"SAINT-JEAN-DE-DIEU",
"SAINT-JEAN-DE-MATHA",
"SAINT-JEAN-PORT-JOLI",
"SAINT-JEROME",
"SAINT-JOACHIM",
"SAINT-JOSEPH-DE-BEAUCE",
"SAINT-JOSEPH-DE-SOREL",
"SAINT-JUDE",
"SAINT-LAMBERT",
"SAINT-LAURENT",
"SAINT-LAZARE",
"SAINT-LEON-DE-STANDON",
"SAINT-LEONARD",
"SAINT-LIN",
"SAINT-LUDGER",
"SAINT-MALACHIE",
"SAINT-MALO",
"SAINT-MARC-DES-CARRIERES",
"SAINT-MICHEL-DES-SAINTS",
"SAINT-MOISE",
"SAINT-NICOLAS",
"SAINT-NOEL",
"SAINT-OURS",
"SAINT-PACOME",
"SAINT-PAMPHILE",
"SAINT-PASCAL",
"SAINT-PAUL-DE-MONTMINY",
"SAINT-PHILIPPE-DE-NERI",
"SAINT-PIE",
"SAINT-PIERRE",
"SAINT-PROSPER-DE-DORCHESTER",
"SAINT-RAPHAEL",
"SAINT-RAYMOND",
"SAINT-REMI",
"SAINT-ROCH-DES-AULNAIES",
"SAINT-ROMUALD",
"SAINT-SAUVEUR-DES-MONTS",
"SAINT-SIMON-DE-RIMOUSKI",
"SAINT-STANISLAS",
"SAINT-SYLVESTRE",
"SAINT-TIMOTHEE",
"SAINT-TITE",
"SAINT-TITE-DES-CAPS",
"SAINT-VINCENT-DE-PAUL",
"SAINT-ZACHARIE",
"SAINT-ZOTIQUE",
"SAINTE-ADELE",
"SAINTE-AGATHE",
"SAINTE-AGATHE-DES-MONTS",
"SAINTE-ANNE-DE-BEAUPRE",
"SAINTE-ANNE-DE-BELLEVUE",
"SAINTE-ANNE-DES-MONTS",
"SAINTE-ANNE-DU-LAC",
"SAINTE-BLANDINE",
"SAINTE-CECILE-DE-MASHAM",
"SAINTE-CLAIRE",
"SAINTE-CROIX",
"SAINTE-DOROTHEE",
"SAINTE-FAMILLE",
"SAINTE-HENEDINE",
"SAINTE-JULIENNE",
"SAINTE-MARGUERITE",
"SAINTE-MARIE",
"SAINTE-MARTINE",
"SAINTE-MONIQUE",
"SAINTE-ROSALIE",
"SAINTE-ROSE",
"SAINTE-THECLE",
"SAINTE-THERESE",
"SALABERRY-DE-VALLEYFIELD",
"SALISBURY",
"SALMO",
"SALMON+COVE",
"SALVAGE",
"SANDWICH",
"SANDY+LAKE",
"SANGUDO",
"SAVANT+LAKE",
"SAYABEC",
"SAYWARD",
"SCHREIBER",
"SCOTSTOWN",
"SEAFORTH",
"SEARCHMONT",
"SEBA+BEACH",
"SECHELT",
"SEMANS",
"SENNETERRE",
"SENNEVILLE",
"SEVERN+BRIDGE",
"SHALALTH",
"SHARBOT+LAKE",
"SHAUNAVON",
"SHAWANAGA",
"SHAWBRIDGE",
"SHAWINIGAN-SUD",
"SHAWVILLE",
"SHEBANDOWAN",
"SHEFFORD",
"SHEHO",
"SHELL+LAKE",
"SHELLBROOK",
"SHERWOOD+PARK",
"SHINGLE+POINT",
"SHIPSHAW",
"SHOAL+LAKE",
"SHUBENACADIE",
"SICAMOUS",
"SIMPSON",
"SINTALUTA",
"SKOOKUMCHUCK",
"SLOCAN",
"SMITH",
"SMITHVILLE",
"SMOKY+LAKE",
"SMOOTH+ROCK+FALLS",
"SNAG",
"SOINTULA",
"SOMBRA",
"SOOKE",
"SOUTH+BROOK",
"SOUTH+INDIAN+LAKE",
"SOUTH+RIVER",
"SOUTHAMPTON",
"SOUTHEY",
"SPARTA",
"SPENCES+BRIDGE",
"SPERLING",
"SPILLIMACHEEN",
"SPIRIT+RIVER",
"SPLIT+LAKE",
"SPRAGUE",
"SPRINGDALE",
"SPRINGFIELD",
"SPRUCEDALE",
"SPY+HILL",
"SQUAMISH",
"STANDARD",
"STANLEY",
"STANSTEAD",
"STAR+CITY",
"STEADY+BROOK",
"STEEP+ROCK",
"STEINBACH",
"STELLARTON",
"STEPHENVILLE+CROSSING",
"STETTLER",
"STEWART",
"STEWIACKE",
"STONY+RAPIDS",
"STOUFFVILLE",
"STOUGHTON",
"STRASBOURG",
"STRATFORD",
"STRATHCLAIR",
"STREETSVILLE",
"STURDIES+BAY",
"STURGIS",
"SULTAN",
"SUMMERFORD",
"SUMMIT+LAKE",
"SUNDRIDGE",
"SUNNYSIDE",
"SUSSEX",
"SWAN+LAKE",
"SWASTIKA",
"SYDENHAM",
"SYDNEY+RIVER",
"TACHIE",
"TADOUSSAC",
"TAGISH",
"TAHSIS",
"TALOYOAK",
"TAMWORTH",
"TANGIER",
"TASCHEREAU",
"TATAMAGOUCHE",
"TATLAYOKO+LAKE",
"TAVISTOCK",
"TEESWATER",
"TELEGRAPH+CREEK",
"TEMISCAMING",
"TERRA+NOVA",
"TERRACE+BAY",
"TERREBONNE",
"TERRENCEVILLE",
"TETE-A-LA-BALEINE",
"TEULON",
"THAMESVILLE",
"THEDFORD",
"THEODORE",
"THESSALON",
"THETFORD+MINES",
"THICKET+PORTAGE",
"THORHILD",
"THORNHILL",
"THURSO",
"TIGNISH",
"TILBURY",
"TILLEY",
"TOBERMORY",
"TOFIELD",
"TOMPKINS",
"TOPLEY",
"TORRINGTON",
"TOTTENHAM",
"TOURVILLE",
"TRAMPING+LAKE",
"TREHERNE",
"TREPASSEY",
"TRIBUNE",
"TRING-JONCTION",
"TROCHU",
"TROIS-PISTOLES",
"TROUT+CREEK",
"TROUT+RIVER",
"TSIIGEHTCHIC",
"TURNER+VALLEY",
"TURTLEFORD",
"TWEED",
"TWO+HILLS",
"TYNE+VALLEY",
"UNITY",
"UPPER+ISLAND+COVE",
"UPPER+MUSQUODOBOIT",
"UTTERSON",
"UXBRIDGE",
"VAL+MARIE",
"VAL-BARRETTE",
"VAL-BRILLANT",
"VAL-DAVID",
"VALCOURT",
"VALEMOUNT",
"VALLEE-JONCTION",
"VALLEYVIEW",
"VALLICAN",
"VANDERHOOF",
"VANGUARD",
"VANKLEEK+HILL",
"VANSCOY",
"VARENNES",
"VAUXHALL",
"VERCHERES",
"VERMILION+BAY",
"VERNER",
"VERNON",
"VERNON+RIVER",
"VERONA",
"VICTORIAVILLE",
"VIKING",
"VILLEMONTEL",
"VILNA",
"VISCOUNT",
"VONDA",
"VULCAN",
"WABANA",
"WABIGOON",
"WABOWDEN",
"WADENA",
"WAINWRIGHT",
"WAKAW",
"WAKEFIELD",
"WALDHEIM",
"WALLACE",
"WALLACEBURG",
"WALSH",
"WALTON",
"WANDERING+RIVER",
"WAPELLA",
"WARNER",
"WARREN",
"WARSPITE",
"WARWICK",
"WASKATENAU",
"WASKESIU+LAKE",
"WASWANIPI",
"WATERDOWN",
"WATERFORD",
"WATERVILLE",
"WATFORD",
"WATSON",
"WAUBAUSHENE",
"WAWANESA",
"WAWOTA",
"WEBBWOOD",
"WEEDON",
"WELSFORD",
"WESLEYVILLE",
"WEST+LORNE",
"WESTERN+BAY",
"WESTLOCK",
"WESTMOUNT",
"WESTREE",
"WESTVILLE",
"WETASKIWIN",
"WEYMOUTH",
"WHEATLEY",
"WHITBOURNE",
"WHITCHURCH-STOUFFVILLE",
"WHITE+FOX",
"WHITE+RIVER",
"WHITE+ROCK",
"WHITEFISH",
"WHITEFISH+FALLS",
"WHITELAW",
"WHITEMOUTH",
"WHITEWOOD",
"WHITNEY",
"WHYCOCOMAGH",
"WIDEWATER",
"WILBERFORCE",
"WILDWOOD",
"WILKIE",
"WILLINGDON",
"WILLOW+BUNCH",
"WINFIELD",
"WINGHAM",
"WINKLER",
"WINNIPEGOSIS",
"WINTER+HARBOUR",
"WINTERTON",
"WISETON",
"WOBURN",
"WOKING",
"WOLFVILLE",
"WOLSELEY",
"WOOD+MOUNTAIN",
"WOODRIDGE",
"WOODY+POINT",
"WORSLEY",
"WRENTHAM",
"WRIGLEY",
"WYOMING",
"YAHK",
"YAMACHICHE",
"YAMASKA",
"YARKER",
"YELLOW+GRASS",
"YOUBOU",
"YOUNG",
"YOUNGSTOWN",
"ZEALANDIA",
"ZEBALLOS",
"CLEARDALE",
"IRON+SPRINGS",
"GEORGE+ISLAND",
"CARIBOU+ISLAND",
"TORONTO+ISLANDS",
"BONNARD",
"ONATCHIWAY",
"POINTE+NOIRE",
"SAINT+PAUL+ISLAND",
"TUKTUT+NOGAIT",
"CAPE+SAINT+JAMES",
"NAMAKA",
"STRATHMORE",
"POLLOCKVILLE",
"MANNING",
"NOTIKEWIN",
"HOTCHKISS",
"PICTURE+BUTTE",
"POINTE-DES-MONTS",
"BAIE-TRINITE",
"PURPLE+SPRINGS",
"BURDETT",
"GALLIX",
"MALIOTENAM",
"VAUGHAN",
"LAMBTON+SHORES",
"HALDIMAND",
"MASCOUCHE",
"SAINTE-JULIE",
"SAINT-CONSTANT",
"SAINT-JEAN-SUR-RICHELIEU",
"DELTA",
"MAPLE+RIDGE",
"ALDERGROVE"];
