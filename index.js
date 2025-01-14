//README DOSYASINDAKİ ADIMLARI TAKİP ETTİKTEN SONRA AŞAĞIDAKİLERİ YAPINIZ

// Başlangıç Challenge'ı

/**Örnek Görev: İlkini Dön
 * 
 * Bu örnek sonradan gelecek olan görevleri nasıl çözeceğinizi size gösterecek.
 * 
 * Aşağdıaki Yüksek dereceden fonskiyonu(higher-order function) kullanarak aşağıdakileri yapınız
 *  1. Stringlerden oluşan bir array'i parametre olarak alın
 *  2. Bir string'i değişken olarak alan bir callback fonksiyonunu parametre olarak alın 
 *  3. Array'in İLK elemanını değişken olarak alarak çalışacak olan callback fonksiyonunun sonucunu dönün
 * 
 * Aşağıdaki kodlar bu görevin nasıl yapılacağına örnek olacaktır
 * Bu fonskiyon 'asas' dönmeli(return)
*/

function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0])
}
console.log('örnek görev:', ilkiniDon(['as','sa'],function(metin){return metin+metin}));

// Başlangıç Challenge'ı Sonu


///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?
  
  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  
  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?
*/

// skor1 kodları
function skorArtirici() {
  let skor = 0;
  return function skorGuncelle() {
   return skor++;
  }
}
const skor1 = skorArtirici();



// skor2 kodları
let skor = 0;

function skor2() {
  return skor++;
}


/*  C1- Göze çarpan ilk fark birinde iki fonksiyon olması diğerinde tek fonksiyon olması ikinci en büyük fark ise birinde let skor local scope ta diğerinde global scopeta. 
Böyle bir durumun olması "skor2" başkası tarafında  müdahelesini kolaylaştırır. Kod js esnekliğinde dolayı gene çalışabilir ama doğru bir kullanım değildir. 
"sko1 ise daha doğru bir kullanımdır."

    C2- Bence "skor1" bir closure kullanmaktadır. Çünkü "skor1" ekstra 1 fonksiyona daha sahiptir. Buda araba içindeki kart örneğinde olduğu gibi sadece bu kodu yazan kişi 2. fonksiyonun
    nasıl çalıştığını bildiği gibi bir anlamak çıkartır.
    
    C3- 2 farklı spor müsabakası için yukarıdaki 2 fonksiyonu kullanalım dersek. 1. fonksiyon bunu için daha uygun olucaktır. Çünkü ikinci fonksiyon değeri globalda güncelleyeceği için
    hafızada kalıcaktır ve bir sonraki oyun için bu fonksiyon çağrıldığında let skor değeri=0 olmadığı için ilk oyundan kalan skordan devam edicektir ve bu da sonuçta hatalı bir şey çıkaracaktır.
    2. Fonksiyonu daha çok tek oyun ve bu oyun aralıklı oynanıyorsa kullanabiliriz bir oyun oynanıyor ve ara verildi oyuna yarın sabah tekrar devam edilecek o zaman skorun dünkü gibi kalması daha mantıklı olur.




/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/


function takimSkoru(){
  return Math.floor(Math.random()*(25- 10 + 1 ) + 10); 
}




/*function takimSkoru(){

  let birceyrekskor = 0;
  birceyrekskor =Math.floor(Math.random()*25);
  if(10 < birceyrekskor  && 25 > birceyrekskor){
    return birceyrekskor;
  } else {
  birceyrekskor = 10 + birceyrekskor;
  return birceyrekskor;
  }
}
console.log(takimSkoru());*/




/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/ 

function macSonucu(oldfonk, ceyreksayisi){
  
  let evSahibipuan = 0;
  let konukpuan = 0;
  
  for(let i = 0; i<ceyreksayisi; i++){
    evSahibipuan += oldfonk();
    konukpuan += oldfonk();
    }
  
  let newObj = {
      "EvSahibi": evSahibipuan,
      "KonukTakim": konukpuan
    };
  
  return (newObj);
}

console.log(macSonucu(takimSkoru, 4))

/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */
 

function periyotSkoru(ikidekifonk) {
  let evSahibipuan = 0;
  let konukpuan = 0;
  
  evSahibipuan = ikidekifonk();
  konukpuan = ikidekifonk();

  let newObj = {
    "EvSahibi": evSahibipuan,
    "KonukTakim": konukpuan
  };

return (newObj);

}
console.log(periyotSkoru(takimSkoru));

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Gröev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru,takimSkoru,4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru,takimSkoru,4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tmamlandı sayabilirsiniz.

function skorTabelasi(mfour,mtwo,period) {
  let topEvSa = 0;
  let topKoTa = 0;
  let yenidizi = [];

  for(let i= 1; i <=period; i++){
    const fonk = mfour(mtwo);
    const evSahibiPeriodPuan = fonk.EvSahibi;
    const konukTakımPeriodPuan = fonk.KonukTakim;

    const ekran = `${i}. Periyot: Ev Sahibi ${evSahibiPeriodPuan} - Konuk Takım ${konukTakımPeriodPuan}`
    yenidizi.push(ekran);

    topEvSa += evSahibiPeriodPuan;
    topKoTa += konukTakımPeriodPuan;

    if(i == period && topEvSa == topKoTa){
      const uzatma1 = `1. Uzatma: Ev Sahibi ${evSahibiPeriodPuan} - Konuk Takım ${konukTakımPeriodPuan}`
      yenidizi.push(uzatma1);

      topEvSa = topEvSa + evSahibiPeriodPuan;
      topKoTa = topKoTa + konukTakımPeriodPuan;
    } 
    
    
  }
  
  yenidizi.push(`Maç Sonucu: Ev Sahibi ${topEvSa} - Konuk Takım ${topKoTa}`);


  return yenidizi;
}
console.log(skorTabelasi(periyotSkoru,takimSkoru,3));



/* Aşağıdaki satırları lütfen değiştirmeyiniz*/
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
}
