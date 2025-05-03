'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8f9c6f427f64b9a3c67f945371d41e0d",
"version.json": "21f23945e2c7acc5fe1ed55ed8864ab5",
"index.html": "452bf2b9b3682c217add56a9727cfcda",
"/": "452bf2b9b3682c217add56a9727cfcda",
"main.dart.js": "b8c59f897d404a70be04f36ac77026fa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "2e97138fb24fd84937cee4aaddf9801a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a873cc902e143242888610580f0328e1",
"assets/AssetManifest.json": "52e798ae6d96a7f1893783ef0a463b99",
"assets/NOTICES": "1f72e9b199fe2a242e18c7ffc8973e17",
"assets/FontManifest.json": "afa3ebe1a2b80b26c7f7ffb495f91865",
"assets/AssetManifest.bin.json": "43b81c6b7a1c627e959b79d107cde32d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ce9e512604db6f50eca703da15333585",
"assets/fonts/MaterialIcons-Regular.otf": "f675aec34db83ad51791b3d1eac925d4",
"assets/assets/fruitsVeges/tomato.svg": "932fee9987581dd6a71a12501ef22d57",
"assets/assets/fruitsVeges/ginger.svg": "1bc6dc1ffa448f1ef2e40d0847e5b3e1",
"assets/assets/fruitsVeges/pineapple.svg": "71e14501aa735158a3a726133f180811",
"assets/assets/fruitsVeges/carrot.svg": "dea1388d481f6666838fc04e49709138",
"assets/assets/fruitsVeges/potato.svg": "e2ffd1c326666924636fff66157a0602",
"assets/assets/fruitsVeges/onion.png": "16ff1e444b4de2d1b6d8cf517658cc88",
"assets/assets/fruitsVeges/kiwi.svg": "e45e8389fcc5ed6603a14d244ea271db",
"assets/assets/fruitsVeges/okra.svg": "baf465c19326f84b4a2b0b50c033bfff",
"assets/assets/fruitsVeges/eggplant.svg": "94703f76afcdbffb0dfad823c77b756d",
"assets/assets/fruitsVeges/cover.jpg": "f96af92fe952a13088e299549673fae7",
"assets/assets/fruitsVeges/banana.svg": "40d61bcda47e009d115c9539a67e8022",
"assets/assets/fruitsVeges/chilli.svg": "cb173ac45afc4ffb8835671231f5c34b",
"assets/assets/fruitsVeges/strawberry.png": "0d3a5f1e71fbb14ba1b11bae82cdb756",
"assets/assets/fruitsVeges/apple.svg": "35d71965f845e8d3e9280a532f349c72",
"assets/assets/fruitsVeges/grapes.svg": "53c4a60e6888e1c4b5cefcb3de0dbdbd",
"assets/assets/fruitsVeges/orange.svg": "4c6b729aa0a95d7a4a1619db3632bebe",
"assets/assets/fruitsVeges/watermelon.svg": "045a0b7789ebf125ec6d811489ee5eb9",
"assets/assets/images/solar/solar.gif": "be1c35e13075805e534ccb87ccc47779",
"assets/assets/images/solar/earth.svg": "69dab14ebd4efc74d8c7abf48a3cd4bf",
"assets/assets/images/solar/jupiter.svg": "dc8a5bf75ccf7e5c79cc23f25bdf8c34",
"assets/assets/images/solar/mars.svg": "55f47fb86da389f61a14986617abccea",
"assets/assets/images/solar/venus.svg": "47c18aa1b721e7899f8069d7fe19b805",
"assets/assets/images/solar/uranus.svg": "31192424934d0c12521c9a4f98a49e0f",
"assets/assets/images/solar/saturn.svg": "7b539c6b68ad8b619bdd6bf716d0f5fe",
"assets/assets/images/solar/mercury.svg": "1c036ed0d326246a65ea25d56ed65362",
"assets/assets/images/solar/sun.svg": "78bd1f372089c57db1f3865cb50d9e26",
"assets/assets/images/solar/neptune.svg": "878615ad7792ac2027251c6ccde1851b",
"assets/assets/images/gitlab.svg": "2b4a2b34eb673f5a819243b909f944da",
"assets/assets/images/numbers/three.png": "5d5197787055600f20edbd05078c1c54",
"assets/assets/images/numbers/six.png": "789718eca25056b52b28fbe416e1b71e",
"assets/assets/images/numbers/two.png": "cd8a77162f4198c8fe8a960ab52e3b70",
"assets/assets/images/numbers/numbers.jpg": "ae5b9db7eaae72671406fead5d5c9362",
"assets/assets/images/numbers/four.png": "de5824cc0a5b985065a00eba19bbc71e",
"assets/assets/images/numbers/zero.png": "2f89f89b8313903109a64f9f6e9ab865",
"assets/assets/images/numbers/eight.png": "1cc1aee04e8f644e016b28930a7f1157",
"assets/assets/images/numbers/five.png": "85bafbe0af7fd469c9e315984e320347",
"assets/assets/images/numbers/one.png": "9c1f3f99d52d7a6923d2f1c0416ef54a",
"assets/assets/images/numbers/seven.png": "0a62f75a6eeb52b8b8fd90959e5b66b7",
"assets/assets/images/numbers/nine.png": "d61ec800fffeddc0f8ae21514e7361e5",
"assets/assets/images/github.svg": "be45ad463d52b7d8f326aa9b482a295f",
"assets/assets/images/instagram.svg": "2341291ff887210d1f33d43b3a3a185c",
"assets/assets/images/flowers/jasmine.svg": "ad62aca9623895361337b3913629f274",
"assets/assets/images/flowers/flower-icon.svg": "0a16d2e5cfb775a32affeb7af0a00087",
"assets/assets/images/flowers/daffodil.svg": "1e3a08533edaa1bfc435b97de610ab1f",
"assets/assets/images/flowers/dandelion.svg": "c6c1a0f6e3266a46cc1ba57d454a2694",
"assets/assets/images/flowers/rose.svg": "314006d97d329d174f43de52a7de0e86",
"assets/assets/images/flowers/hibiscus.svg": "2966dc8620c3dd997cba6f385753d731",
"assets/assets/images/flowers/sunflower.svg": "9734fe4f7c1f3a022d4cc559b0e081a6",
"assets/assets/images/flowers/daisy.svg": "01c52b2b305b13a9ea21f397deedad7d",
"assets/assets/images/flowers/poppy.svg": "281fc9220566964320c9b55d630cb323",
"assets/assets/images/flowers/marigold.svg": "82f5b6aa108cf628d9141b34634cb6be",
"assets/assets/images/flowers/lily.svg": "6512df892a34ca51ecbdaf24fe31c0f8",
"assets/assets/images/flowers/lotus.svg": "a753c728fa00d5bdfa5a93ed60d12fad",
"assets/assets/images/flowers/tulip.svg": "dc7de5b1abbee96deef93e9b580203a6",
"assets/assets/images/flowers/carnation.svg": "ab8b4658fb73e4552139c2b57963016e",
"assets/assets/images/flowers/flower_banner.jpeg": "05a92969f7af5a38fd89098c4f65c307",
"assets/assets/images/flowers/lavender.svg": "9dad53a3002488bc6c0445c01ea4c0df",
"assets/assets/images/git.svg": "687ba049c5d18eb0b785d5251ad02845",
"assets/assets/images/body/Palm.svg": "5b9d3a5d116d3fb34fd9c414c1741784",
"assets/assets/images/body/Elbow.svg": "9bdad94a56184e081739e483d359135f",
"assets/assets/images/body/Chest.svg": "8436c0ebcd7e3811a6aae4994287edb7",
"assets/assets/images/body/Cheek.svg": "71e4110768f848d3e4edd9ec204c9e6f",
"assets/assets/images/body/Waist.svg": "f541c98baadb9b3774ad5ddc893fd6b4",
"assets/assets/images/body/Nose.svg": "3ed661c62933d0d0809fee1c2ca60fc7",
"assets/assets/images/body/Arm.svg": "fac769aac5fe792e98a684b79ff6c2a1",
"assets/assets/images/body/body.jpg": "ad9720f58619ca0164ccaecf6870a8b0",
"assets/assets/images/body/Teeth.svg": "d53d3830a5887c34d7c375507338d13e",
"assets/assets/images/body/Hair.svg": "ecf23b576f9b42dd974b3214b4832ad8",
"assets/assets/images/body/Thigh.svg": "5db0dc98a29387b5077f9031d95db569",
"assets/assets/images/body/Tongue.svg": "6091a74e0eafd6d1b975aecc31881475",
"assets/assets/images/body/Knee.svg": "da69b0823f898ff002c25acd2a594abf",
"assets/assets/images/body/Shoulder.svg": "cd3581694c3ed55017c7b2de6263e20b",
"assets/assets/images/body/Stomach.svg": "4edea7c1a6afce427ecdd840d47f87b0",
"assets/assets/images/body/Thumb.svg": "b4033e649a188c751e491862ed28859e",
"assets/assets/images/body/Back.svg": "33661b3f1030396e8bc19b4b94aafa93",
"assets/assets/images/body/Belly.svg": "367ed96ee85490cafa383e7da6996abd",
"assets/assets/images/body/Ankle.svg": "9ed52feb9f0c53d9707fbb2e7ff4dce8",
"assets/assets/images/body/Neck.svg": "85439a94e11b39929800b6e34581e7e2",
"assets/assets/images/body/Hips.svg": "7a3ff07f34714981319f76a762de34fa",
"assets/assets/images/body/Foot.svg": "d4a93e3ba03c95ad7254421f6aa58ece",
"assets/assets/images/body/Eye.svg": "a012438b1078ded89732446bcb61a01e",
"assets/assets/images/body/Fingers.svg": "3abf0f88f42999d50146e0246f37cac5",
"assets/assets/images/body/Lips.svg": "6695050e39362db9c9f8b10ad2589f1d",
"assets/assets/images/body/Wrist.svg": "6f7ce6a8cad076902bb1e197353d17ed",
"assets/assets/images/body/Chin.svg": "e89a7135f29ed7b598297f512017b49f",
"assets/assets/images/body/Ear.svg": "11816329eda0cf6e8125fd6a38bc266e",
"assets/assets/images/body/Toe.svg": "57bbf8a47fd635152e5cd37b9c4860ba",
"assets/assets/images/body/Nail.svg": "7560039157f5c787e1b75cc35d544f00",
"assets/assets/images/body/Leg.svg": "7290134a3b0086ea499014e411570949",
"assets/assets/images/alphabet/zero.svg": "97a9d9f90d1647c258d7c9721ccdf3b8",
"assets/assets/images/alphabet/umbrella.svg": "4749c0b4cc925010f61d2347ba830009",
"assets/assets/images/alphabet/yellow.svg": "37b571243c8c6a5b436df90916c06c45",
"assets/assets/images/alphabet/lion.svg": "dc30b81bccdb7a74b8d126cb19f7a4c9",
"assets/assets/images/alphabet/elephant.svg": "fe8594abbb7d168e1c2651fee1ec7e69",
"assets/assets/images/alphabet/alphabets.jpg": "d73f461a017afdb2483ec46e9f4a12b7",
"assets/assets/images/alphabet/ball.svg": "9f62d04974f8c5d9fe4aa071f64e8359",
"assets/assets/images/alphabet/rabbit.svg": "491e2ef975b48ccd5e665fcb47b997dc",
"assets/assets/images/alphabet/queen.svg": "d2ab1d1344021353f7e9a900461501a5",
"assets/assets/images/alphabet/horse.svg": "e546c026280a23fdbb2d9b5ec58e6a1b",
"assets/assets/images/alphabet/king.svg": "fecef59245b38aa501c3625064a8c555",
"assets/assets/images/alphabet/parrot.svg": "0722ca582ef99c740247993d926ac103",
"assets/assets/images/alphabet/dog.svg": "faea2b07e57bcfb5871fce3159e4c51a",
"assets/assets/images/alphabet/fish.svg": "e28568bbf7a244cf48e32fd0b89ef09a",
"assets/assets/images/alphabet/table.svg": "a005a28bbfac8290749f863480146a08",
"assets/assets/images/alphabet/shiva.svg": "1af4a8530f603482a5782c2fabd12ebb",
"assets/assets/images/alphabet/xerox.svg": "5b4a3efab6b9f441d08279a7da2275c2",
"assets/assets/images/alphabet/icecream.svg": "be79cae25b88de9ae1237d09a052ba94",
"assets/assets/images/alphabet/nest.svg": "e0363ad850f94df2be05304802c72f17",
"assets/assets/images/alphabet/money.svg": "f42221856a72c509b32fc0b8492b9903",
"assets/assets/images/alphabet/window.svg": "06bfce83898a9dfa676664e78fba10a5",
"assets/assets/images/alphabet/cat.svg": "5e3adf6a65b81f32269cbb3dc8eb0123",
"assets/assets/images/alphabet/apple.svg": "0bdc5470ab8d771f652eb10523d5a56d",
"assets/assets/images/alphabet/grapes.svg": "53c4a60e6888e1c4b5cefcb3de0dbdbd",
"assets/assets/images/alphabet/van.svg": "026b1856f026dfcf55ae017bc05093bd",
"assets/assets/images/alphabet/orange.svg": "c277ab35f7478925ecdcfc9f2d8a2bc2",
"assets/assets/images/alphabet/joker.svg": "045d1b4997bb2714ff55c2e1361e1973",
"assets/assets/images/email.svg": "68c6e924b585b3f3729c3682e9bb4445",
"assets/assets/images/dp.png": "761511d15d6149707f2874d0de082d93",
"assets/assets/images/icon_abc.png": "b1c391fb7a900a6e3f723eacc561339e",
"assets/assets/images/animal/cow.svg": "6da236ce14485bbc958eb777674fe8cf",
"assets/assets/images/animal/sheep.svg": "36fe5578104df12fc38dd8e54176c62e",
"assets/assets/images/animal/kangaroo.svg": "ce12885fbc46f69898fd9fb458cf09f1",
"assets/assets/images/animal/tiger.svg": "07d5f2c0e461102254ce89d565633870",
"assets/assets/images/animal/animals.jpg": "7a6968889db10d2c852717a56f4e2972",
"assets/assets/images/animal/zebra.svg": "df0dcd9104e4117fbe7231d2f3d7cb44",
"assets/assets/images/animal/lion.svg": "dc30b81bccdb7a74b8d126cb19f7a4c9",
"assets/assets/images/animal/elephant.svg": "fe8594abbb7d168e1c2651fee1ec7e69",
"assets/assets/images/animal/deer.svg": "99b870dec5c4b7d1053f9a5fc7c9a605",
"assets/assets/images/animal/rabbit.svg": "491e2ef975b48ccd5e665fcb47b997dc",
"assets/assets/images/animal/horse.svg": "e546c026280a23fdbb2d9b5ec58e6a1b",
"assets/assets/images/animal/dog.svg": "faea2b07e57bcfb5871fce3159e4c51a",
"assets/assets/images/animal/goat.svg": "68ee74641d6c19601ec9a2ea45e7a4ba",
"assets/assets/images/animal/bear.svg": "ee74a0527e57738e7c8ac8d1611d1ec2",
"assets/assets/images/animal/snake.svg": "5bc8a4fc58c17858eac01f206a303cf6",
"assets/assets/images/animal/pig.svg": "445285c60549f319972c06e454541209",
"assets/assets/images/animal/fox.svg": "afc5b7cac985bcb57db7a5f1a78cbc0e",
"assets/assets/images/animal/giraffe.svg": "c5b05e49897c93325eba9bf206cf2239",
"assets/assets/images/animal/monkey.svg": "8f6bf160b07c709788177bde19d8089a",
"assets/assets/images/animal/cat.svg": "5e3adf6a65b81f32269cbb3dc8eb0123",
"assets/assets/images/animal/squirrel.svg": "83642740a4edfa716c541ebc860bab5f",
"assets/assets/images/birds/Hen.svg": "ddea2a2a57e0f336adff2698b3dc1984",
"assets/assets/images/birds/Crow.svg": "66334edd8b2cf27e7d3dfaefdc6e4490",
"assets/assets/images/birds/Hummingbird.svg": "6e2e910fd2da58d2fa57725cd028b422",
"assets/assets/images/birds/Owl.svg": "45aec1b2918e593d9c1a132761edc683",
"assets/assets/images/birds/Maina.svg": "6475ecf11478d96f2bee7cb1c8140e36",
"assets/assets/images/birds/Ostrich.svg": "91791cbf69442f23bf74bfd35a6c2c05",
"assets/assets/images/birds/Swan.svg": "4c4226e3818b330ad027cd1a42b0a52b",
"assets/assets/images/birds/Eagle.svg": "ff4a50c87f30ea6468de3ea7e4db2e87",
"assets/assets/images/birds/Seagull.svg": "add1fe5caa0c3f294afe970654a5071a",
"assets/assets/images/birds/Bagula.svg": "38e6d1fcee2d2adace2510497d31f396",
"assets/assets/images/birds/Woodpecker.svg": "cd62698b5d7d8efc701af96d840d7f40",
"assets/assets/images/birds/Robin.svg": "06891b4cc1e2a75813055a211f6b0a98",
"assets/assets/images/birds/Duck.svg": "c4bb19495e60d676f5565046531738ba",
"assets/assets/images/birds/Parrot.svg": "a4452da13a92e7afaec158c191928c97",
"assets/assets/images/birds/Vulture.svg": "e826674c06e97d469baebcbf93bb159e",
"assets/assets/images/birds/Baya.svg": "4c09fc91bbe5557bf427d5de987774d9",
"assets/assets/images/birds/Pigeon.svg": "b2d5eb51b48b858688e4193038ff6ef2",
"assets/assets/images/birds/Bulbul.svg": "df25db244ba3114265884d2319aed671",
"assets/assets/images/birds/birds.jpg": "fcdb30e47484653f4a400fffb9c04cf2",
"assets/assets/images/birds/Goose.svg": "56852f7aa532e85bae60da2108b27121",
"assets/assets/images/birds/Kingfisher.svg": "a9de2ecd770f4e66f7fd308b675a10e5",
"assets/assets/images/birds/Sparrow.svg": "392c681b04de525c600e7a519fee2e5d",
"assets/assets/images/birds/Koel.svg": "9de7bf11c2c34a9ab0af38d68bd75760",
"assets/assets/images/studying.png": "2b7ba9fab56bf47212e90e2f3fe3c9cb",
"assets/assets/images/linkedin.svg": "aaf0c5449034424cbee7a1b5ad308fb3",
"assets/assets/images/quiz.jpg": "7f1b8a41f963a36bf1772f28ce592dc1",
"assets/assets/images/shape.gif": "4012abeff3a11faff1dbef6efdf5b7f4",
"assets/assets/quiz/q10.jpg": "5bd0beb078375ef17484a1f6ec5d6429",
"assets/assets/quiz/q8.jpg": "21d37bd99e98617cff0daa18003485c7",
"assets/assets/quiz/q9.jpg": "c3e151e2f02b37bd2223a26c22e782e0",
"assets/assets/quiz/q7.jpg": "0402729fcf053c876034bf14548ca890",
"assets/assets/quiz/q6.jpg": "2fb8901a8c23b3fffd300e7c71f4db90",
"assets/assets/quiz/q5.jpg": "37ac53a984546a018af6053bbe67c1da",
"assets/assets/quiz/q1.jpg": "c96d8dafb15bea658e427d8a5bcbb197",
"assets/assets/quiz/q2.jpg": "f3e12b8f9c6af90c9c7aafdc8109df66",
"assets/assets/colours/black.svg": "647cc1b01116b22e32b445db515e2697",
"assets/assets/colours/pink.svg": "85cf603e6d580ac4fe79069190fea2ab",
"assets/assets/colours/blue.svg": "d47d45c060061e3dc65b81233120e9b7",
"assets/assets/colours/yellow.svg": "061d6997f54a89e13ab285cdb922591c",
"assets/assets/colours/red.svg": "6c20ff70a7405c4e11991151571fe0bd",
"assets/assets/colours/white.svg": "2439fc1d35fd65b29291109f621d9787",
"assets/assets/colours/brown.svg": "7c2b7ed4a5701ae5aead22b921afb9cc",
"assets/assets/colours/green.svg": "5ea97eee4a754ad8ee1cb9ada8a8780c",
"assets/assets/colours/violet.svg": "79ff62c3c872c5b756cd5cd7b90b991a",
"assets/assets/colours/orange.svg": "ac0c986b00fbb6d0c8b5e676eaaeaf84",
"assets/assets/colours/colours-cover.jpg": "71b3056d4a7c85868718ff8e3dbf7edb",
"assets/assets/colours/colours-cover.png": "2a03597c21dc88cc603efd77a7099557",
"assets/assets/explore/dot.svg": "fe9c69aba9941d038eded9c7f60e8438",
"assets/assets/explore/drawing_board.svg": "73d7dd96b555ed213424f27de8b22f70",
"assets/assets/explore/notebook.svg": "f0b69354db5beb4f597a4c479abe6da5",
"assets/assets/sounds/animals/rabbit_sound.mp3": "d56ab45ce19db2f4e89202128a5015aa",
"assets/assets/sounds/animals/bear_sound.mp3": "4497ee40997e46cf674fb8e776efca3b",
"assets/assets/sounds/animals/monkey_sound.mp3": "2d6178c2f6e462273f6f895471b1ea49",
"assets/assets/sounds/animals/sheep_sound.mp3": "9454a7f3537bd2e3842190f76386d76f",
"assets/assets/sounds/animals/squirrel_sound.mp3": "09c3f5e3800065f5d51b27856a048065",
"assets/assets/sounds/animals/kangaroo_sound.mp3": "dceb25a4ce660b39eb9139f70f674466",
"assets/assets/sounds/animals/snake_sound.mp3": "3c0f35f72df94b6eb3778f00e02bc16f",
"assets/assets/sounds/animals/tiger_sound.mp3": "28c359b740c76cc979e10f99fa9644f8",
"assets/assets/sounds/animals/dog_sound.mp3": "fd96ea5e64f241379e9ea720f0280451",
"assets/assets/sounds/animals/pig_sound.mp3": "e60f05725df948a9feaa0bdc33293a5b",
"assets/assets/sounds/animals/cow_sound.mp3": "e9638aa51cf205bcd8286bf41f00b17a",
"assets/assets/sounds/animals/elephant_sound.mp3": "24fdfce64102e45760a3d31e1a5cdba5",
"assets/assets/sounds/animals/deer_sound.mp3": "21df640ad534765c36d9beb973430d07",
"assets/assets/sounds/animals/goat_sound.mp3": "1c2d4144a5b1f2e8f77e64756c1100ed",
"assets/assets/sounds/animals/lion_sound.mp3": "c14276971f114168120f15548b2178b8",
"assets/assets/sounds/animals/giraffe_sound.mp3": "d067a0ba10bb134fa3355baab3b333ea",
"assets/assets/sounds/animals/cat_sound.wav": "ea9562302771625692d1dd2215da45be",
"assets/assets/sounds/animals/zebra_sound.mp3": "7c3afe1067b42c7399abe4c2d614550d",
"assets/assets/sounds/animals/fox_sound.mp3": "bdadf560d5bb2fd53232897b19606b90",
"assets/assets/sounds/animals/horse_sound.mp3": "a122564c6f390091fc19244778eef80f",
"assets/assets/sounds/birds/Baya.mp3": "1f0d03abe3694b9289abddac29c3f364",
"assets/assets/sounds/birds/Vulture.mp3": "f046d1e8686f1751486542fca11e5104",
"assets/assets/sounds/birds/Kingfisher.mp3": "4c8e174689d05cd8b315c531c271d44d",
"assets/assets/sounds/birds/Goose.mp3": "56a1a0cd39adf11dbaa1a9ed3f9a6fa7",
"assets/assets/sounds/birds/Koel.mp3": "1f82c26a547da890149c07b12ae62c80",
"assets/assets/sounds/birds/Sparrow.mp3": "201ff20a4468fb262dcbb56688ba2fcf",
"assets/assets/sounds/birds/Pigeon.mp3": "e1b36891197446986fb44429034790e3",
"assets/assets/sounds/birds/Bulbul.mp3": "3e8ad70ae375a7bf65aa748c68da96ac",
"assets/assets/sounds/birds/Ostrich.mp3": "e8aedf82a5811fc41bbf2faf95120e3d",
"assets/assets/sounds/birds/Eagle.mp3": "1832a69a890e3c3fc967a3ade37298ee",
"assets/assets/sounds/birds/Swan.mp3": "0be1ca90bd84646e8ed3c220eee83427",
"assets/assets/sounds/birds/Seagull.mp3": "1a74a5fe6f72b6f8e522b45a4a1acf3c",
"assets/assets/sounds/birds/Bagula.mp3": "f2383d5fbc3025585400a5d9f0e5b419",
"assets/assets/sounds/birds/Owl.mp3": "41f0997b0105b4554a883d5be2806be0",
"assets/assets/sounds/birds/Maina.mp3": "e1d213f75aa5d663b79540d8ef0d28b5",
"assets/assets/sounds/birds/Hen.mp3": "c27450015e7a753ba3156e99ad766f28",
"assets/assets/sounds/birds/Crow.mp3": "1ecdcf6f537ba26eeb7f23ce426e2d5f",
"assets/assets/sounds/birds/Hummingbird.mp3": "5bb6bbf399935789ae1f525c960a5d78",
"assets/assets/sounds/birds/Robin.mp3": "0e9c94794dc0d98eefa3168eb31befe7",
"assets/assets/sounds/birds/Duck.mp3": "9c6a57a269323772ca1c849819c8a8ec",
"assets/assets/sounds/birds/Parrot.mp3": "dba1226c6c848f51f422e2a0e9691434",
"assets/assets/sounds/birds/Woodpecker.mp3": "cc2c03bc8f31b0941732c1c53abb5103",
"assets/assets/seasons/spring.svg": "1c963b52830704f69efe489b3b1167a6",
"assets/assets/seasons/winter.svg": "a64d99d9d24805020b3b1a0d573f12fe",
"assets/assets/seasons/summer.svg": "67a92083fde7dfbb2242d493eeff7c20",
"assets/assets/seasons/autumn.svg": "fd1c8628f1630af765d9258663fbcf48",
"assets/assets/fonts/comic-sans-ms/ComicSansMS3.ttf": "f456b1ee5e3e01e6640846005d24cd86",
"assets/assets/occupations/pilot.svg": "338fdfbbd02b47985e91b3b740bb2466",
"assets/assets/occupations/dentist.svg": "26eabb54caaedb2f5162563c380154a9",
"assets/assets/occupations/doctor.svg": "0e85d9807abf02d1ec5076cb2e2ec1b6",
"assets/assets/occupations/photographer.svg": "7e66725b3ce8100e5c634736545840ee",
"assets/assets/occupations/teacher.svg": "90e112f4d52c3307f48eef4ccbf43e44",
"assets/assets/occupations/vet.svg": "232a7eb65af48b68f93e0df2a2ad3e30",
"assets/assets/occupations/police.svg": "d648f17dc723b4c945c9ffa55b3b87b2",
"assets/assets/occupations/author.svg": "5f97f2de92b1c81961ba1e837b478ebc",
"assets/assets/occupations/carpenter.svg": "0900d81ddd8435c0c765c6b8db961f17",
"assets/assets/occupations/engineer.svg": "9b23ef1d4fc688b4494efe0bf3c9d331",
"assets/assets/occupations/farmer.svg": "d4577de17393e735bcc852aa0111483e",
"assets/assets/occupations/electrician.svg": "b6bb523a9e1d200c0d5dae8a9e893f58",
"assets/assets/occupations/artist.svg": "8de54ae583e896c6ca96bf9c46e134d1",
"assets/assets/occupations/barber.svg": "3a806d599fd3b65f47224333ea88845e",
"assets/assets/occupations/lawyer.svg": "3451f2077c2bcacffadef24fedc569eb",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
