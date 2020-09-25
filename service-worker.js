/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "23921c603498dd728dbd7f8a090bb7cf"
  },
  {
    "url": "about/index.html",
    "revision": "13f6bc97c1f8fd963dde448a6c9b7217"
  },
  {
    "url": "about/LOGs.html",
    "revision": "b580492d149d297b2e3301c70286b601"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "assets/css/0.styles.a5442244.css",
    "revision": "b25f183c6514385f2376180e877d959a"
  },
  {
    "url": "assets/img/CustomerOrdersView.6311d5d4.png",
    "revision": "6311d5d419093fd2e1ad7a6b03b308ec"
  },
  {
    "url": "assets/img/dbms.cc8d824b.png",
    "revision": "cc8d824b5f6bf7ab4ba2356a20c26093"
  },
  {
    "url": "assets/img/DesignProcess.98d3a5b2.png",
    "revision": "98d3a5b2fa237481264b56581a3c0144"
  },
  {
    "url": "assets/img/ESP-1-ERD-CustomerOrdersView.40628f59.png",
    "revision": "40628f5970c156e3e1c3614ab8353341"
  },
  {
    "url": "assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png",
    "revision": "3f72a51c875f924d916787c0d69da45d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-A.60658a0d.png",
    "revision": "60658a0da24855d4a15c767972abbfd8"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-B.38eedb63.png",
    "revision": "38eedb63265a820934ebdcb645f0917d"
  },
  {
    "url": "assets/img/ESP-2-Payments-Log-View-C.57734797.png",
    "revision": "5773479785995bda45c142c6574be0dd"
  },
  {
    "url": "assets/img/ESP-3-ERD-Inventory-Control-View.035f952a.png",
    "revision": "035f952a5c1510c52cfb8063aead6eb2"
  },
  {
    "url": "assets/img/ESP-3-ERD-Purchase-Orders-View.a538692a.png",
    "revision": "a538692a19b1db735c47c22623362e88"
  },
  {
    "url": "assets/img/ESP-3-Inventory-Control-View.a6309142.png",
    "revision": "a63091421adb8b779bd31748de46d211"
  },
  {
    "url": "assets/img/ESP-3-Purchase-Orders-View.56b0efed.png",
    "revision": "56b0efed3a25ca6688515447086bd0a6"
  },
  {
    "url": "assets/img/ESP-4-Cheque-Register-View.b55c141a.png",
    "revision": "b55c141a089c58ca93c4ee1a1a1692f7"
  },
  {
    "url": "assets/img/ESP-4-ERD-Cheque-Register-View.5dce58fc.png",
    "revision": "5dce58fcc57eec752e7059eeda0e4f34"
  },
  {
    "url": "assets/img/ESP-5-ERD-OrderShipment.48f96eda.png",
    "revision": "48f96eda9d4d9e8ad8d95908d38f3e99"
  },
  {
    "url": "assets/img/ESP-5-Order-Shipment-View.6bb435b4.png",
    "revision": "6bb435b4c8168c378bfa599ef80c4632"
  },
  {
    "url": "assets/img/ESP-6-Driver-Details-View.90181f44.png",
    "revision": "90181f44628c808d5658b50eb0fb4a28"
  },
  {
    "url": "assets/img/ESP-6-ERD-Driver-Details-View.a66d7cc0.png",
    "revision": "a66d7cc0c42d116e7e722cb9aa6d4f1a"
  },
  {
    "url": "assets/img/ESP-Merge-With-ESP-3.ffca8ca0.png",
    "revision": "ffca8ca0cc7040a1163e04196c3f3526"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical-Part-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP-Merged-ERD-Physical.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-ERD.8a64b161.png",
    "revision": "8a64b161121f1b02d0bd8d5a7bd8f3f4"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-1.685f2816.png",
    "revision": "685f281667153030ac47c5dd53a03c98"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-2.beecb18b.png",
    "revision": "beecb18b0dd7a0f1f9eedd4e3653d2a5"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-3.9d5b39aa.png",
    "revision": "9d5b39aa64ba764c17acd05a3dd42aaf"
  },
  {
    "url": "assets/img/ESP-Physical-Spec-4.b375e458.png",
    "revision": "b375e458737fa6b3af034b87361af987"
  },
  {
    "url": "assets/img/ESP.fb67f7da.png",
    "revision": "fb67f7da9ac37ca9287672e0a2bd610e"
  },
  {
    "url": "assets/img/IQSchool-ERD.9589c95f.png",
    "revision": "9589c95f711c7726c88b9d1d1cb5c52c"
  },
  {
    "url": "assets/img/IQSchool-ERD.f2f3ede0.png",
    "revision": "f2f3ede04ac83e7ec400ffd56e59f45d"
  },
  {
    "url": "assets/img/Logical-ERD.0a4805f7.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "assets/img/Logical-ERD.2053813d.svg",
    "revision": "2053813d8e67dea7ae14019be06aa316"
  },
  {
    "url": "assets/img/Merge-ESP-1and2.cd8ae504.png",
    "revision": "cd8ae50456d45d43430845bcf14ec328"
  },
  {
    "url": "assets/img/SampleForm.9387c4d4.png",
    "revision": "9387c4d460c5493156564791ecaeeb7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SQL-Developer.c1d66211.png",
    "revision": "c1d6621182bee5a6440137fbedadb37e"
  },
  {
    "url": "assets/img/view1.fa1dab5e.png",
    "revision": "fa1dab5eccde499b8ff8a02d5d4cf701"
  },
  {
    "url": "assets/img/view2.440b8485.png",
    "revision": "440b8485c7ea8e4368dc90a0e4834408"
  },
  {
    "url": "assets/js/10.8a80f91c.js",
    "revision": "4f1a25d6d8464c7db9d1f3286289a310"
  },
  {
    "url": "assets/js/11.049215c2.js",
    "revision": "6feed38380ac6c63b206741939b6949e"
  },
  {
    "url": "assets/js/12.d96fa0b5.js",
    "revision": "3d0476a009fe8130cd7fe81d77e8bfc5"
  },
  {
    "url": "assets/js/13.ae1e9262.js",
    "revision": "6ff37c56db05259ef835820511257af2"
  },
  {
    "url": "assets/js/14.ffe5f950.js",
    "revision": "b30232a2381922c1a35d990966d184ff"
  },
  {
    "url": "assets/js/15.19ea4cf3.js",
    "revision": "280b167b63eb6580600e58f621250ec6"
  },
  {
    "url": "assets/js/16.c4cef524.js",
    "revision": "840a6b873e8f8c102e886e2a848dc21a"
  },
  {
    "url": "assets/js/17.d259a97f.js",
    "revision": "ceabb4c851230414f659a3297e14b055"
  },
  {
    "url": "assets/js/18.c1afba55.js",
    "revision": "f0d5cbbcdfead66ef719823136c8a08d"
  },
  {
    "url": "assets/js/19.d47cafb6.js",
    "revision": "f5aad2eb04edbc1c5eb8e0c25de50093"
  },
  {
    "url": "assets/js/2.666d8fcf.js",
    "revision": "fb87bb9aecd720ae2d531a2e77b53fc2"
  },
  {
    "url": "assets/js/20.d65fe95f.js",
    "revision": "f90b1e1dc3f2f5c7ef4dbaee7a21dd56"
  },
  {
    "url": "assets/js/21.0c0100dc.js",
    "revision": "56da7b1e5c276ce365c4a709095e0528"
  },
  {
    "url": "assets/js/22.1dfdcda1.js",
    "revision": "35761e40b56537d0fa28b4ff594e16e4"
  },
  {
    "url": "assets/js/23.d233dbbf.js",
    "revision": "366ea5b476f82cdfc9da28144dc401fe"
  },
  {
    "url": "assets/js/24.aaf4ac95.js",
    "revision": "6cd03f91741285891e4b54dc6719356e"
  },
  {
    "url": "assets/js/25.d94cf5cd.js",
    "revision": "f724234a27a85941b5ec3a49e68001ea"
  },
  {
    "url": "assets/js/26.b1a9eac2.js",
    "revision": "db1b9df5353a2ced4b22fafc46e52950"
  },
  {
    "url": "assets/js/27.fe465423.js",
    "revision": "5cefde18ba4fdc79406e1a92aa167969"
  },
  {
    "url": "assets/js/28.2bb55b7a.js",
    "revision": "b744a4d6917caee66258fb935e9606dc"
  },
  {
    "url": "assets/js/29.e0872310.js",
    "revision": "d407adce6c916cf68b3a164d802df17d"
  },
  {
    "url": "assets/js/3.a5180923.js",
    "revision": "290a062ef3eb826c689afe252d8b18f4"
  },
  {
    "url": "assets/js/30.44d570ae.js",
    "revision": "777330e91173433aae0ab08408dc7338"
  },
  {
    "url": "assets/js/31.475f47cf.js",
    "revision": "32c1ef53f4fb68b882f4c1d4c75164d0"
  },
  {
    "url": "assets/js/32.d2baa42e.js",
    "revision": "deb904bf5351798b21b06d9ac11abd63"
  },
  {
    "url": "assets/js/33.eb39dabc.js",
    "revision": "4ff84c887711567b2a119e68d82baa1e"
  },
  {
    "url": "assets/js/34.cfddf031.js",
    "revision": "795b2aa94cf69e900de4af89a9a07002"
  },
  {
    "url": "assets/js/35.2d833ac9.js",
    "revision": "1662873fe1481f0a88c5b8fe7dcdc55d"
  },
  {
    "url": "assets/js/36.821694f4.js",
    "revision": "d8a64d8953ba6523fb49fca1c06f770b"
  },
  {
    "url": "assets/js/37.91be4958.js",
    "revision": "d5dc1f651fa605127df1a7fdbb56b346"
  },
  {
    "url": "assets/js/38.c5e4e50f.js",
    "revision": "519c00ddbb9a974f8b36bd17c6e727f3"
  },
  {
    "url": "assets/js/39.c39e069d.js",
    "revision": "b2af690033af8a1439cc076c410283d5"
  },
  {
    "url": "assets/js/4.9d6fa1d5.js",
    "revision": "6176c2db26a0149ad70698e3203a1d75"
  },
  {
    "url": "assets/js/40.f85f8d86.js",
    "revision": "8b96bba3ba36585f74be513660ecc4eb"
  },
  {
    "url": "assets/js/41.205d99ea.js",
    "revision": "3af8ae6fae224b657e7483a1b1f2657f"
  },
  {
    "url": "assets/js/42.aa6208ae.js",
    "revision": "92e272f57027383829050c060511981e"
  },
  {
    "url": "assets/js/43.f617f461.js",
    "revision": "210af6ddc184241320372154cb904da2"
  },
  {
    "url": "assets/js/44.a56e5c80.js",
    "revision": "5c98ce7f03f19a0a92f17b30611b516b"
  },
  {
    "url": "assets/js/45.5940954d.js",
    "revision": "45c21a5366ba68a55508b5111ed37c4b"
  },
  {
    "url": "assets/js/46.8b68413c.js",
    "revision": "d0569ca40e950928435c1439c13cddc1"
  },
  {
    "url": "assets/js/47.ad8d7ea4.js",
    "revision": "1bd8ac4d30ce78567e0c2967f4743dd2"
  },
  {
    "url": "assets/js/48.9a3bcced.js",
    "revision": "20f2ec9bf5def9b7a51419869930ba40"
  },
  {
    "url": "assets/js/49.d3601617.js",
    "revision": "ba83d61ac97a3cb32cc0625cf6cbab73"
  },
  {
    "url": "assets/js/5.00e30cb7.js",
    "revision": "4fd99cfd5c2c3713e732e8f1e99ac633"
  },
  {
    "url": "assets/js/50.225580f0.js",
    "revision": "e6ce8dfd4b53cbf8cf28e172bdd09d3d"
  },
  {
    "url": "assets/js/51.f0a678d4.js",
    "revision": "6f71ba800a6443518ad81ca90135ea42"
  },
  {
    "url": "assets/js/52.bbbd712f.js",
    "revision": "501e1bbe5e7f2afdf5eccdab2adf4343"
  },
  {
    "url": "assets/js/53.58bad696.js",
    "revision": "ff28759344cab4e29aeb26ccbd805fed"
  },
  {
    "url": "assets/js/54.9cf050b8.js",
    "revision": "ecbca1c9ef35ee0cc52b42b9d07661ba"
  },
  {
    "url": "assets/js/55.f79ef97e.js",
    "revision": "91e3700c26a9321dc573110181292de2"
  },
  {
    "url": "assets/js/56.eeef2e50.js",
    "revision": "b59663fa42dffe24ec8642ef2035f6c0"
  },
  {
    "url": "assets/js/57.ea7a1fbe.js",
    "revision": "12c28c3124deb5fe976d4f7414105c57"
  },
  {
    "url": "assets/js/58.b1391b64.js",
    "revision": "bad51d1a4241e02b5dd58b98c97f99fa"
  },
  {
    "url": "assets/js/59.5fc5a5bf.js",
    "revision": "53f6262318e76ad7624ff2b6ab374b49"
  },
  {
    "url": "assets/js/6.7a421ca2.js",
    "revision": "dd485496d0cc88181f6b63e9d6d53256"
  },
  {
    "url": "assets/js/60.3625bae1.js",
    "revision": "f37fcd4eaf06018dbe5be3767f8fa049"
  },
  {
    "url": "assets/js/61.ad8cf978.js",
    "revision": "c805a6e4e79968b54aa16063414f2155"
  },
  {
    "url": "assets/js/62.a8242ce8.js",
    "revision": "ec8968224a60fe123ad8a0ec590c083f"
  },
  {
    "url": "assets/js/63.f9702198.js",
    "revision": "35f7fdd8fe987d56e4a2e81c62834cd3"
  },
  {
    "url": "assets/js/64.2ec7ca72.js",
    "revision": "0cfdca6abec65c27d8a02aeb3815339a"
  },
  {
    "url": "assets/js/65.e9b04e9e.js",
    "revision": "32dc6db5fd689f724939b592fa854dec"
  },
  {
    "url": "assets/js/66.e37342ed.js",
    "revision": "c91883754866cc6f2843ff2556da8788"
  },
  {
    "url": "assets/js/67.572f0df3.js",
    "revision": "4df588501d602f20d7e0adeb3af7fd58"
  },
  {
    "url": "assets/js/68.811da81d.js",
    "revision": "adf5c2e513637d82b4190c5972b1581e"
  },
  {
    "url": "assets/js/69.2e8acee4.js",
    "revision": "e646a983f879cd8b38ed014f17dbd2e7"
  },
  {
    "url": "assets/js/7.b77319a8.js",
    "revision": "9f0d2ea27861437d29a73e06aea4e2a1"
  },
  {
    "url": "assets/js/70.e8ad2c94.js",
    "revision": "d0b13dec450898b037ee47028c19f408"
  },
  {
    "url": "assets/js/71.a789b8cb.js",
    "revision": "d42b2720e96cc8d87b7f22c25fb4f32e"
  },
  {
    "url": "assets/js/72.0351209a.js",
    "revision": "8c9d7c13c1f30c9fb8311bb0e7dd7a61"
  },
  {
    "url": "assets/js/73.aff5d922.js",
    "revision": "686808bb0fc36df6abb9a8a572f987e3"
  },
  {
    "url": "assets/js/8.7a807e79.js",
    "revision": "2f9537e075d88517c698711be46c24d4"
  },
  {
    "url": "assets/js/9.043c7eb1.js",
    "revision": "572eabe5b8627cbc0c94eb539809d772"
  },
  {
    "url": "assets/js/app.42d88a37.js",
    "revision": "499d840f3210ac9e48285a10293ea349"
  },
  {
    "url": "DDL/alterTable.html",
    "revision": "3ba36f32e0e2bcb02e34e10c9905afe4"
  },
  {
    "url": "DDL/checkConstraint.html",
    "revision": "49efcfabd3eafce15afede99abe87440"
  },
  {
    "url": "DDL/createTable.html",
    "revision": "3560644c1e33a7759851601071e6939f"
  },
  {
    "url": "DDL/createView.html",
    "revision": "09ed9bd74bdc740175f8dff8a90b4b74"
  },
  {
    "url": "DDL/defaultConstraint.html",
    "revision": "93df3c127715ba26341c36e7b304d4dd"
  },
  {
    "url": "DDL/foreignKey.html",
    "revision": "75c6639fde3eec5772b519d64d62eb4e"
  },
  {
    "url": "DDL/index.html",
    "revision": "dfbea18e96210d470c8427f34173fb09"
  },
  {
    "url": "DDL/primaryKey.html",
    "revision": "d5e120460849f4572c225d3c5f4412f8"
  },
  {
    "url": "DDL/sql-data-types.html",
    "revision": "169ada5fe0eeaf3c09d70299d029a8af"
  },
  {
    "url": "DDL/uniqueConstraint.html",
    "revision": "a7f3f2708034ea1259ec61c18cff1909"
  },
  {
    "url": "demos/esp/ddl/AlterTable.html",
    "revision": "4051cf5c588b2551ded53420ed182fbd"
  },
  {
    "url": "demos/esp/ddl/BasicTables.html",
    "revision": "096d7e66653f8fb3b9ed72a0638c2527"
  },
  {
    "url": "demos/esp/ddl/Complete.html",
    "revision": "cb7effc18aac10de44c4380f7bfa134c"
  },
  {
    "url": "demos/esp/ddl/Computed.html",
    "revision": "89ea986b058a23a936297e10fe7a940d"
  },
  {
    "url": "demos/esp/ddl/DefaultAndCheck.html",
    "revision": "1d29d90d69393870413a0f510332105e"
  },
  {
    "url": "demos/esp/ddl/index.html",
    "revision": "f6f48679a290e2e7c78c202f2bc5947b"
  },
  {
    "url": "demos/esp/ddl/Indexes.html",
    "revision": "cba846ee15736e0520bb7a7f967de558"
  },
  {
    "url": "demos/esp/ddl/PkFk.html",
    "revision": "ed77a7075cc68ca5856b7298d99c4b9d"
  },
  {
    "url": "demos/esp/ddl/TestData.html",
    "revision": "38ecae85e9c088caa1fa431a8c754983"
  },
  {
    "url": "demos/esp/ddl/UseDb.html",
    "revision": "9107e8c60eaa404af6ab7a16ff0c3dd9"
  },
  {
    "url": "demos/esp/dml/index.html",
    "revision": "14ac117c9ee3f4a5f532c2ab25f3377b"
  },
  {
    "url": "demos/esp/index.html",
    "revision": "aab6a61315a0a14b6d5970efb45b7062"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerDetails.html",
    "revision": "61f169ef5911e0e13c543f9c54f51f7f"
  },
  {
    "url": "demos/esp/specs/ESP-1-CustomerOrders.html",
    "revision": "f27d4933885ee47c29df6b311285c647"
  },
  {
    "url": "demos/esp/specs/ESP-1-Proof.html",
    "revision": "964c29fdd1f0236bb687834f82c14eb0"
  },
  {
    "url": "demos/esp/specs/ESP-1-Specs.html",
    "revision": "1235109b5953ca2da7ddb37401ce5493"
  },
  {
    "url": "demos/esp/specs/ESP-1.html",
    "revision": "5a123d886c378f32c44a830bb5ed1f68"
  },
  {
    "url": "demos/esp/specs/ESP-2-Specs.html",
    "revision": "e1ffcbfbab8d6fb95115acb9c6eff6ec"
  },
  {
    "url": "demos/esp/specs/ESP-2.html",
    "revision": "e91330aaf66f9b9336c0418aee78f413"
  },
  {
    "url": "demos/esp/specs/ESP-3-Specs.html",
    "revision": "947d164c15071430985e2684c25f71ee"
  },
  {
    "url": "demos/esp/specs/ESP-3.html",
    "revision": "6f303183ae86ab3f2bc0e7cedc296aa3"
  },
  {
    "url": "demos/esp/specs/ESP-4-Specs.html",
    "revision": "e26c4e8cc16674c5908df6cadfd444c4"
  },
  {
    "url": "demos/esp/specs/ESP-4.html",
    "revision": "30b4eaf30d64705702dbead2ed78258e"
  },
  {
    "url": "demos/esp/specs/ESP-5-Specs.html",
    "revision": "c758cbd32b21f2ee70f7b7303e257944"
  },
  {
    "url": "demos/esp/specs/ESP-5.html",
    "revision": "62efe4157cf8e59d0e2132fdcdb9623e"
  },
  {
    "url": "demos/esp/specs/ESP-6-Specs.html",
    "revision": "af9a2d6b7c97989fecf78e858b469d7d"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-1and2.html",
    "revision": "3c6f700fa19c2122d5936feaf9f34b47"
  },
  {
    "url": "demos/esp/specs/ESP-Merge-With-ESP-3.html",
    "revision": "f9fad53c89fd955d44bb8def7d66b644"
  },
  {
    "url": "demos/esp/specs/index.html",
    "revision": "beaf00940774657f79eaf26282af21ad"
  },
  {
    "url": "demos/esp/specs/legend.html",
    "revision": "136081ae836ddb58f2d16b857b73b504"
  },
  {
    "url": "demos/iqSchool/exercises.html",
    "revision": "f30719b98cff7481417a1570ce854c1e"
  },
  {
    "url": "demos/joes-videos/index.html",
    "revision": "c723f4af2c8a8210bddcb6924e13c115"
  },
  {
    "url": "demos/joes-videos/view1.html",
    "revision": "a876f9934d4f3eebd05081d6966ed262"
  },
  {
    "url": "Design/erdIntro.html",
    "revision": "7166e24e33987afd3970488dd5e4bc63"
  },
  {
    "url": "Design/erdToEnglish.html",
    "revision": "40c57d883e71f0dda787075e8106560f"
  },
  {
    "url": "Design/index.html",
    "revision": "3ab71dfd2605add8da11f7fbfebd0914"
  },
  {
    "url": "Design/labTemplate.html",
    "revision": "6a4dbe6f6f2ad06f99fd8ea1dcfc3e88"
  },
  {
    "url": "Design/lucidChart.html",
    "revision": "25dffefc0eab525316584da502fa6b0f"
  },
  {
    "url": "Design/normalization.html",
    "revision": "49bc49218e87ac85f0e9c6519c5e545c"
  },
  {
    "url": "DMIT-1508.github.png",
    "revision": "4387056da54af3d8bbcc0d8b2cc3d2c2"
  },
  {
    "url": "DMIT-1508.png",
    "revision": "4f1e0c3d7fd329e2f9d715429f5f3c23"
  },
  {
    "url": "DML/delete.html",
    "revision": "a8b11f3bcac764093ad105a01e90ad49"
  },
  {
    "url": "DML/index.html",
    "revision": "31a5df210726fed3a0a4a15d060e6529"
  },
  {
    "url": "DML/insert.html",
    "revision": "8b9314adf219f80a5cbefc891c9652bf"
  },
  {
    "url": "DML/update.html",
    "revision": "49e2cb1e9b7ff9d8092caad17cbbc565"
  },
  {
    "url": "downloads/Logical-ERD.png",
    "revision": "0a4805f7669231d6f53aba7d4498fe65"
  },
  {
    "url": "index.html",
    "revision": "37da2a6a81b4faeb76f0daf616f50b02"
  },
  {
    "url": "SQL/aggregateFunctions.html",
    "revision": "343f95e95c149c7384a9e2ebebdf3065"
  },
  {
    "url": "SQL/aggregateGroupBy.html",
    "revision": "2e5bf4a9217906969929758d0d9670e1"
  },
  {
    "url": "SQL/dateFunctions.html",
    "revision": "edd92cd38d05fbc3ae697e632d4d3708"
  },
  {
    "url": "SQL/index.html",
    "revision": "e093bcfdc061fc530dd98eb37ab87372"
  },
  {
    "url": "SQL/innerJoins.html",
    "revision": "8a7a79e09d0a931b0d51dae9eb3fc0c6"
  },
  {
    "url": "SQL/outerJoins.html",
    "revision": "1fd8b3ec963f002b1898b7a2d1beca38"
  },
  {
    "url": "SQL/simpleQueries.html",
    "revision": "26426b80fbf7d4f61f8cc0c5cf87039e"
  },
  {
    "url": "SQL/stringFunctions.html",
    "revision": "ce200f8270ca52f13aef5b5129be6f13"
  },
  {
    "url": "SQL/subqueries.html",
    "revision": "d541711d0850cfb26bd90e47ca0e6af0"
  },
  {
    "url": "SQL/unions.html",
    "revision": "1fe29f8e0b3c4807434e635c2465e657"
  },
  {
    "url": "topics/sql-intro.html",
    "revision": "9e75941a17b96b06ff1cd7ab77367ead"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
