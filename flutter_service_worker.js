'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "56b2ced50cd676b5a09d103936973d7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b9015f4f5d71c012668dd61579e245c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0f48f776bade68b8d29b2a698c3aeb3",
".git/logs/refs/heads/main": "b50a82878a5449399a584f918335b35f",
".git/logs/refs/remotes/web/main": "08a0acb93c5ac9c3e0d34813b2cf1506",
".git/objects/01/5d99c604134b5c679a4e64b89c10666582b41d": "43095fe3df1b7ff43c09542e6d94ed6c",
".git/objects/02/255fb64ab6e7e7baa28d184613e475003733d1": "3f63d3f24af23b2e5dec8073565e008c",
".git/objects/02/3e0b1eb08ddf2f0082bba519dda6ee7fd4f01e": "b0e44c46a4b4a002b1f3c59b366afc68",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/443ab1b75376b5ea94a8cd8d7bbb7d900e51ab": "dcb405258d6ea06b077cc7d8642db0ce",
".git/objects/07/5c656b459d0dce29b019ccba467eebebb5a71c": "05ecc33dd9b319e189bed771653f5d18",
".git/objects/08/9f4d70ae7210548a9c85e76e1e66e9947423bb": "f50280443d7bd9daf412f6051c009e43",
".git/objects/0c/447c19a3c77cdf076334daf01386adf80316c4": "83bfc28f7987a89823b22f152fee8f4b",
".git/objects/0f/5a6463f25d3cabee8be03df4e39878d4022173": "147c51d5baca46a80dd1da93a6cf2b41",
".git/objects/10/89c35ea522ec97a9de223984ec7126a25e6bea": "446285461713d3d2105c10869d3dee68",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/86b0fb5c0e97489543ffff6d488ae13ffee693": "4c317f149f4dc63b5e10d0ba1a809a10",
".git/objects/15/4451dc8f55e0544dc3677e27a76f4eb2741b78": "1e74dd1cd78c25183920a82ce8dbd591",
".git/objects/15/61ff746b5f456c69984ae6a5e0f2466922a8db": "cca528065367262c95d4d5ac9dc0b648",
".git/objects/17/ee44500a632f0b2c2ac3198e35ef1b4211643c": "49922e4ddb2750cc7bc419abd0376c52",
".git/objects/18/cf0c74263d13e4cd79c05e289576f442058904": "aea159039f5765874424d2b2e499247d",
".git/objects/18/fffbababb915e8ff90573911027cdfa93cc1cf": "c035e86e40162d7f3a05048537189130",
".git/objects/19/1aac45fc07626ab129d6e33b196a45cf379a15": "0e8d620d5d4765e2b7dcf00618cc7c04",
".git/objects/1b/d653f1fc6fe3c1b04b98f185398f8922aabab8": "654272311250dc4948b807f634a27a67",
".git/objects/1e/0b2fba3d061ee0a38b60c275053f2c48eec6fc": "a485fb50151e46c22583cb894f52e3df",
".git/objects/1f/b172291edab151d7c6d7481108ce1ab8681c72": "344449cd92336307cab18388f6e60431",
".git/objects/22/54362f1b26c53e72163b5a174d0694b1314485": "3b4ca88fca2adeccb8aaebf7c2d36233",
".git/objects/22/7cb4c0c021169241c262a3b52ed2cb7038c170": "767aa6b65ddd880eb46ea6225571df30",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/b027960b531df9fbe09c2b016d8e142ab10d42": "42f0ba6b637c6ecd7ae4d14e11db8db9",
".git/objects/23/b43029d8969458e946dff40640ed9555c716b7": "f06ec6b71fc7cb932c22d03c69dcb832",
".git/objects/25/5eb2a071f790a152efa4d6f955a1daee9d0047": "563c644432d3626ce5d0c18973981d2f",
".git/objects/26/c5a19f02fe81980ed67b2166a055416920680f": "1ad037b90afe7faeecdd5e11e9482661",
".git/objects/29/a9175c043a46fe5296d71adc414413671902f4": "cc300954f0aa4d45ae1801fd69ad5158",
".git/objects/2b/791dd86cc47e3d426ff81701e3e2d5d88d90a6": "d3e95e252d339ba62cb1df422e9205a7",
".git/objects/2d/369637d1769977bf57dd94686bd4f09a605fc1": "b80ed0fcd38818dd675502256d375b56",
".git/objects/2d/43954b38a730f81330469695fd6f1816828abf": "6ec33fda9ec749f04cbcf4888f11b486",
".git/objects/31/81a99459a7eff222cccbb90e2082ea4bb65718": "e7a0222f900b5c33c5b1c26b9415b8f4",
".git/objects/32/391296a0c244a634250bd689760210b4a56df0": "81d7433fcb1d28478843ce8a8f1941b5",
".git/objects/34/dc9186c0077e75a89e89f10111406e3f5c16da": "0e5464842b0d693644e701745b997545",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/bc3cbb4c5e562ee86042b5b257f1854a9e6f3e": "2c9bf97aa163b3ff728849212da45b96",
".git/objects/3b/a93f257912c1ffb6c4f8b88b349c52556f16cb": "3d72917bfdb7e6aa28ce72ebfac876bb",
".git/objects/3d/b15d8ebd41a1292ef30344195588d5a73080dc": "3a8b73345eda0f43e2c17e96290c6ed2",
".git/objects/3f/e5d3726fd7695ab0dc173be8683db2ec93b25a": "8f33bfd25649567a86c624189300c3b5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/43399e2d860c77fc80dcc9f397f40c4e4274c2": "06aa31e787ba6da6e96fb1def589d9eb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/aaf84b30e9ce645f0bad4634312c3a31f534d0": "c88001db296a036416c5570e1eb5257c",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/51/b9994259fcfbed145356dcb0cafd7362151cf5": "c0e2a8cf43158b24da3aa8ade8230f69",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/ffc7f5a86983795336e6af33cc3357ba630be0": "f223ded7746b93c547bc7b93888d9ef7",
".git/objects/60/41338daa412061b770925e83fad3fcde3644a5": "7596edc11a6296b69dd07691bc2ef5e4",
".git/objects/62/df6e6889f82c392a48c364bb4d67d6d70ffbd8": "832f9b58fbb1b8e6093e8dc27e2c2afd",
".git/objects/65/305692fb16afe1fdca0af2e3275d1decb3850e": "64d0cad8c388efc4de696f7c3e67550e",
".git/objects/65/c3e9c31c7cee9ac86c45d1c4ada1fe6dbcbff9": "403e1547936235695d65d5550ecd702c",
".git/objects/68/7e8d347423a17b1e163c906bd25a0a2dacdb8a": "963670ef65d426ce08a484e17060c6d0",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/4475c70044b7a3c2bab2c3de06d072d282b258": "fc4b8a1f8080d7f6441554858c588a10",
".git/objects/6c/2afaff7312b9eee48351e076345b1276537e3f": "b79bf3e029f05047be25612a5185a7b0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/ff4b262aca90aa3bc30aa96fb642e0b184717c": "3917b71937038405429ac3362df9377e",
".git/objects/79/51d789f988f16b80389cca4512bd618304aabb": "f67b53e1f9ebee7e07df05e9cf8ed1f4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/8563de7684c42b5f0e19e5fc34322632b4ccb6": "bd688e52d010a18d837b8e5bf8877256",
".git/objects/85/3a6dc14ce27deebef2c2792892ccf52e7bf53f": "32d9da3fa576433987c5f42cdbfd5078",
".git/objects/87/055bf6554c849e20c8786c9de4ad2870e4d6b4": "3f1249abcdcc8f79df62b5626d2a7ca3",
".git/objects/8b/82bf791b60dbe1eb50087884ee54d487ae59d3": "46b92ece3c1ec6079c4130f963b9d8ba",
".git/objects/8c/20f39c2af7ca1375baf77ce927394db3ecb022": "caff69d9c6c3efa931d8c230fb16279f",
".git/objects/8c/7aeda83d43c7ffe6d3d10a81742be6aa0dc7a3": "72a75fbcc320605da70e1406b5456ebb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3b02987400efa8ba17cded93dd08ae7e300297": "cd8d6bbc0bb968dacc630e563aff8e2e",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/93/29bc30a240be60e4856f1744d7d4f73ae8abb2": "479bdf260f23c46d1da0ffb17d0e9149",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/cce0cdbffd72e3b23afd2b36c00f3ffac1f372": "2cdf75e4ccddf28fc4416209f5795c1f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7a4076c326a44da1b590693789111ecbc2ca7f": "86642c728323f52687ff2ae3cce0a40d",
".git/objects/a4/e73a35bc97b34d7e8506579d8bd85933b7a73c": "6c09ae844cccfb5e3668aa57e8737e30",
".git/objects/a5/3a7ceb7835d4dfde73678189ae2e4d5921e49e": "196958249e4ff6640be2c0b1a9e87f0a",
".git/objects/a5/b930615c2cfce32779e77942bfd643c393a554": "56a8822318c1c61e7e083b88770ef214",
".git/objects/a8/995e119fff6603f7a463bd7af2f70e04a8d219": "1b57687fa82a4d6dff90a5244c8edf3c",
".git/objects/a9/2fd9fb3678a55eca0edb7b00e669f1bd6e5f7b": "bec740ada4ae3cc1c075771bbcddd5c4",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ad/397b17a24de37d89b77f6af2e0beb7a0c1dbc0": "3f73ad44ca08d36fafed1daaf47828b8",
".git/objects/ae/1cd338814543885d4df33f5f4670d4efcdc3fc": "c37a1a59ec19ca5815fb3601536deb69",
".git/objects/af/8c3650cc17731b016eaeb9f804db5265bee90c": "58cfb7fcfd8b124d1ba808689baf8cd8",
".git/objects/b3/9e6d378f99837aca5884194523fc9d85ff7858": "d271cd64f45b49afbb4945822fce929f",
".git/objects/b6/7ff2348c4cd6b3c099fa7b77f98afe768232f4": "b553de4571c3fe1fc3894020ee4a08ac",
".git/objects/b6/991dbf9162130fb455c61535e8fa8a1b74e841": "c2f9b98269872cefef809cb6d22b7a57",
".git/objects/b7/770f8ebe34225c9821e2fda5285dd4e34ff129": "6e6f6540ff74b8c14e8062224dd5acfd",
".git/objects/be/33609947a49c40ea9b1d7b607107c30259fcf8": "0076214ed687715341189dc0f4ee1295",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/a4eb5a5c03b0f3f905f913133dfecf704f487f": "3b07500b86c54769517c334c116fe854",
".git/objects/c4/73a7c24c1074ab78b770a3b04f23a5ac01d00c": "bf72d97f3d55430364443e6a4e4de043",
".git/objects/c7/9d63b63d428164784cb46aba33922f9d071159": "7dff83f998a74b17af5dc6b7473922a6",
".git/objects/c8/ca472ed425cdf91fa0253abcb2edf3ed4db5e5": "8149a4fc150a03eda7858d8ac0314a36",
".git/objects/ca/205193990b371d9c567119a41d185a613af238": "4c0dc3f5159a075fee42a2d02b3190ab",
".git/objects/cb/5e4cd4fb7ecc304490f45188d84f38a97cfd63": "adf28bdb9e1a4084a2773e0b2277d017",
".git/objects/cc/5eb130e2eb464dbb083783adadf757f72c472a": "f2e25447d6c2ee098318f8dae0fdd228",
".git/objects/cd/ca4bc0c13d5ece7a819e1aa24004ceec6d7b27": "bdc27ed389811174f98a49a87a6e95be",
".git/objects/d0/461375ad1849bc7c0b91f82bf2ff162e2396b9": "eb22f413c290e0457aa5e318800ef2cb",
".git/objects/d1/4bcfb01b10a9615e7f97108a7f05e67d5e60b1": "ab8749d0513cbf2f9a6d99c5ed9057d5",
".git/objects/d2/202411aba7b56ede3292090a0a0e3a7cdbcfad": "2750d182e86274e3cc39d6bad2d3e0bf",
".git/objects/d6/735e3136dde3c668682a25a5ad2833df50e72e": "3d2909929e3d13937cb2eb25449a25ab",
".git/objects/d9/237c465df860ad421bd7771168a811ec20d819": "a63887a51704f3ffd3fbc850e2e0a0c2",
".git/objects/dc/107d51ed5388984ae36f559be1dc96155484e4": "ec7ab36b7f0910aab71202397481a6a9",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/df/deb1b3834eeb49f4b431259a0c23b0e512b8fc": "7aebd4aa3ef7892f8ef6b802de292e84",
".git/objects/e1/8e8c0ba465ee2d353edba1ceab5cefca7a7104": "a70323013b677304e382ac0cfb5f3c3d",
".git/objects/e3/e7770bd60cfde21b761168d98fecbfad3d96ed": "c84ea32bd7cc9a92ddd2a1c65753c276",
".git/objects/e4/b7a4e2beb2c84ae92bd487923743c64e27f169": "c40814ef6a874ed828029bc055a53f28",
".git/objects/e5/4f472cb295ff28e44829529768fdfaa2fe486b": "1591824b5a6be1c4e9af5207fb227c9a",
".git/objects/e5/6cebce0b6d7a69967812e9e0312b5871f10063": "9124406292ac7e0458e09d9f638d8b8f",
".git/objects/e5/715491ed462fd521975dce5fdda5f3e2d5d705": "82cd12a48a3ea7887f7cae5303521cb9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3d486b50f3050efe79abde6a41984563c96404": "5665fa0cae1bcc5e52326f33a83f5995",
".git/objects/ea/4fc66af11b8dad5888cb536023db34cbf55958": "8133b82d41217dbdc6cccb20131945e2",
".git/objects/ed/2c361caa2079e84ca2b0dbf83a00c3552a2380": "2c1876f5ab455372bbb79a535924a7dc",
".git/objects/f0/ce977ec1ff551132b9e55621d07e49d91cdbb7": "c345db7a348a178b534ee1602ba6744a",
".git/objects/f9/89bcd2ec811662556d06da703e91dbda444c91": "60d0ed313ae1dc4da60153eee25e7b4e",
".git/objects/f9/93940b26313b8c32ef9f033584bfa3ac2026bb": "62e45dcb772ab94340c323715a2682b7",
".git/objects/fc/912d0a01e54b24a5cb130ef7217616dac6cb1b": "819b7626e415eff6704b72d0c5dbccb6",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/3ffea96d12d7ff07056f62206566ccc861247b": "851ab8b0cd56c8d6c4383bc1119ccbc7",
".git/refs/heads/main": "42d6cc523c0b3222328b7ac7266c255a",
".git/refs/remotes/web/main": "42d6cc523c0b3222328b7ac7266c255a",
"assets/AssetManifest.json": "47d7b6f37b18284153b557fcddadc9cb",
"assets/assets/images/col_cities.csv": "75a745cad88df79a096322a380f753da",
"assets/assets/images/E00.png": "bff4ee186c23c8abe3ecd8d50834b0c5",
"assets/assets/images/E01.png": "00856140ef80893dffab319fd57a2418",
"assets/assets/images/E02.png": "a6dd696fa0d6c7c1e1478b20f9f8f6c5",
"assets/assets/images/E0P.png": "329df584d3ec78fea14d3c072756bf07",
"assets/assets/images/invertaga.png": "99538ab4ade870b2f0955541a1b66a8a",
"assets/assets/images/L01.png": "efda2726221c5c3ffc9b275378ed6f8b",
"assets/assets/images/L02.png": "fd42fdbd3a200f2fb55763c5e483d1ba",
"assets/assets/images/L03.png": "c4dbcc81220a20ea9eafa5e869f477d9",
"assets/assets/images/L04.png": "06feb24ecf3b0838d416611f9a7ca5bb",
"assets/assets/images/L05.png": "645dc53c305566f6a6d8c7498f294f6e",
"assets/assets/images/L06.png": "5ad5de3f890121d0bb9b7877bc8157a4",
"assets/assets/images/L07.png": "7a2776b7bda5b4fd78502ac3c7ccbefc",
"assets/assets/images/L08.png": "8055d6849e143ae41591755693013061",
"assets/assets/images/L09.png": "a2708d0cd20fdf7af05b580dca16a641",
"assets/assets/images/L10.png": "65d714938e7309332646da4adc66cd8e",
"assets/assets/images/L11.png": "e9d5770d6d920b6d4c001b84338c649e",
"assets/assets/images/L12.png": "a0f9493b3b79bf164a4c55be1340259b",
"assets/assets/images/L13.png": "4c2ab0c128e20c58d908fb63ee555e7f",
"assets/assets/images/L14.png": "965e6bc5f71f95728968c300908b720b",
"assets/assets/images/L15.png": "9b01a3ac18b63403390bac3a576be84d",
"assets/assets/images/L16.png": "f8b62839a63692e1be200b5d190f7588",
"assets/assets/images/L17.png": "518e55840b1e7092f1fab5eb5e39be60",
"assets/assets/images/L18.png": "19e0a2d1d8549f9acacfbabdd48a2736",
"assets/assets/images/L19.png": "8800cca8ca5360a85bea498e45a8affe",
"assets/assets/images/L20.png": "d581d02cf45cbb7d53939cd72656b0f3",
"assets/assets/images/L21.png": "df9f5775a2b19d4c39a9e6610aea36b8",
"assets/assets/images/L22.png": "194ca931052650e61480855a37e05b8d",
"assets/assets/images/L23.png": "4baea3c023a38d222a67eb859e8b2f22",
"assets/assets/images/L24.png": "12678e02176aa0ed579a513fac68f2d4",
"assets/assets/images/L25.png": "94ca242914dd8685e8358ac82243d8a6",
"assets/assets/images/L26.png": "1ac012429c4367352306a7862dcb3311",
"assets/assets/images/L27.png": "dbd650b5bc73f0b3cfd39199254c06a0",
"assets/assets/images/L28.png": "b812065004b4d4596aeafdcca0576d0c",
"assets/assets/images/L29.png": "8e81cefeaac50af6b94c60d738de8411",
"assets/assets/images/L30.png": "ecc31fe04af80d6fe797ee8691846b34",
"assets/assets/images/L31.png": "3523630b2b05247a7df0a282a1a4d394",
"assets/assets/images/L32.png": "e29e6cf6c1da5258932490303a2ee91c",
"assets/assets/images/L33.png": "531f3d5a67c6514543565f0e05eaa102",
"assets/assets/images/L34.png": "4edc38d9416ab95126189fce3f237b46",
"assets/assets/images/L35.png": "8a5422f44f1a0e43393110ba3b63d977",
"assets/assets/images/L36.png": "8595ee53c901d449d265fbc331f8c5df",
"assets/assets/images/L37.png": "eeaca9eac1e6f5ece73fa46c2b273f07",
"assets/assets/images/L38.png": "5b56b7f554556cbbfbfb2fa85145858c",
"assets/assets/images/L39.png": "49acce09e18935740766954a57843a0c",
"assets/assets/images/L40.png": "49cabbc886c4906a6355f10cd668e914",
"assets/assets/images/L41.png": "aeb70cd6e626cc873091e714a1414e00",
"assets/assets/images/L42.png": "6cd9f5f596774a91e7ca2e2046728b75",
"assets/assets/images/L43.png": "87137ad6e02a43e32f73624902bc1b07",
"assets/assets/images/L44.png": "8c0cefcc48033350bf5ebd046bf7469f",
"assets/assets/images/L45.png": "8602e5dfc5d31d08ab642865c877e1b0",
"assets/assets/images/L46.png": "7fe46000ff67d8ad6ca7e323aae9793d",
"assets/assets/images/L47.png": "5bf9c55559c2c4ec4c23a50515daa2f2",
"assets/assets/images/L48.png": "c5f99e12cb5b273605efa25149557da7",
"assets/assets/images/L49.png": "f89ab2bd5b109bd1bd92051fe8559626",
"assets/assets/images/L50.png": "bc0da673d9c8d8fdd97d2af3382461fa",
"assets/assets/images/L51.png": "f9c10154caaaaad0ce528cc9aa9ad2c7",
"assets/assets/images/L52.png": "d7612e37059e4918450549fd62d85a6e",
"assets/assets/images/L53.png": "9a5ba3a34e366039d8ee3fed4a5abe82",
"assets/assets/images/L54.png": "8cca6fac23722a5ca3cb5e59727089a8",
"assets/assets/images/L55.png": "64b609f2704f4de3ee06bba4483a6db8",
"assets/assets/images/L56.png": "15127b64de8bb3d6998659255cdf5dc7",
"assets/assets/images/L57.png": "b1c8a631a55b7d3337685586193064c6",
"assets/assets/images/L58.png": "eed9b7426dac831211842ed5771c0e73",
"assets/assets/images/L59.png": "94495bea82d94633656b731f14b42f73",
"assets/assets/images/L60.png": "a25fb5a052719d67a6cf3c76e99d982e",
"assets/assets/images/L61.png": "a70e8f6f190c194e12d2d293d28c2f90",
"assets/assets/images/L62.png": "e1ef45df46cc3a82c26bab146f5d8367",
"assets/assets/images/L63.png": "490f601e2d0e1d18aa690390021985d5",
"assets/assets/images/L64.png": "1e03ead2435fec3568d7fc64b91a6835",
"assets/assets/images/L65.png": "6149a9f5765cfe995ee93f49b9f6f904",
"assets/assets/images/L66.png": "d0b3420a5c8b3c024da035a49cbc9628",
"assets/assets/images/L67.png": "329df584d3ec78fea14d3c072756bf07",
"assets/assets/images/logo.png": "a7c5b1beaa4d19b41c1693f06be557e4",
"assets/assets/images/lote_general.png": "bff4ee186c23c8abe3ecd8d50834b0c5",
"assets/assets/images/vision.png": "e1bae521b30f18b2450eec6fbcadea97",
"assets/assets/images/world_countries.csv": "f4821393189e0906141ccbe2ccbffaa9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "96c5b76d30e5fd69230818ba3fae8aaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f5acb776dedc8bf4f04cea8256871887",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "8408934557fa1000a8744faa6b1c2e13",
"icons/Icon-512.png": "485224332a5f78b11ea6e0c8128a1a58",
"icons/Icon-maskable-192.png": "d6b50f5744b405e1a56d3659d7ad2591",
"icons/Icon-maskable-512.png": "50947c6915140511591da4bb146acd02",
"index.html": "95f0774d1e029df43d8dd58f7aa8fa21",
"/": "95f0774d1e029df43d8dd58f7aa8fa21",
"main.dart.js": "7274cc1ae9c56b1722f37701d783ffb2",
"manifest.json": "d0ba7fca21c41a56a60eb5c821bbe17e",
"version.json": "f4812e959d4432be401573b415f9a234"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
