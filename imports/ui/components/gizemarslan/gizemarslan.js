import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap3';
import 'angular-translate';

import template from './gizemarslan.html';

import { name as Home } from '../home/home';
import { name as About } from '../about/about';
import { name as Blog } from '../blog/blog';
import { name as Contact } from '../contact/contact';
import { name as Pictures } from '../pictures/pictures';

class Gizemarslan {
    constructor () {}
}

const name = 'gizemarslan';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Home,
    About,
    Blog,
    Contact,
    Pictures,
    'pascalprecht.translate'

]).component(name, {
        template,
        controllerAs: name,
        controller: Gizemarslan
    })
    .config(config);

function config($locationProvider, $urlRouterProvider, $translateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/')

    $translateProvider.preferredLanguage('tr');

    $translateProvider.translations('en', {
        'about': 'About',
        'blog' : 'Blog',
        'contact': 'Contact',
        'pictures':'Pictures',
        'language' : 'Türkçe',
        'Profile' :'PROFILE' ,
        'Skills' :'SKILLS',
        'developerMusician': 'Software Developer & Vocal',
        'hi' : 'Hi ! This is ',
        'home' : 'Home',
        'name' : 'Name :',
        'Date of birth ' : 'Date of birth ',
        'June'  : 'June' ,
        'Address'  : 'Address',
        'Email' : 'Email',
        'Skype' : 'Skype',
        'Interest' : 'Interest',
        'Music, Sport, Web Techbologies' : 'Music, Sport, Web Technologies',
        'Feb' : 'Feb',
        'Sept' : 'Sept',
        'Current' : 'Current',
        'June' :'June',
        'July' :'July',

        'aboutMe1' : 'I am a pretty young (!) software developer. ' +
        'It should be the most suitable job for me.',
        'aboutMe2' : 'I think the world we created with our codes is so excited, and if people use it gladly,' +
        ' satisfaction it gives to its coders very very high.',
        'aboutMe3' :  'As you see, I really love coding and i want to make my imaginary world real  with my design and code.',

        'aboutMe4' : 'Besides, I love something else, ' +
        'of course I love my boyfriend :) but the point is different, the music. ',

        'aboutMe5' : 'I have been interesting with music since i was a very little girl.' +
        'I started singing songs before many other activities. ',

        'aboutMe6' : 'Of course having a child who try to sing with yelling ,could be a disaster for my mother but ' +
        'for many years I think I made a remarkable progress.',

        'aboutMe7' : ' Now, I am a lead singer of TEB Band which is a rock group of our company and' +
        'we will have some live performances in next months.',

        'TechnicalSkills' : 'Technical Skills',

        'years experience' : 'Years Experience',

        'Know How' : 'Know How',

        'Job Experiences ' : 'Job Experiences',
        'Interests' :'Interests',

        'Software Expert Teb' :  'SOFTWARE DEVELOPMENT PROJECT EXPERT TEB BANK (BNP PARIBAS JOINT VENTURE)',
        'Software Expert Netas': 'GPS ENGINEER AT NETAS',
        'Software Expert Koc'  : 'SOFTWARE DEVELOPMENT PROJECT EXPERT AT KOCSISTEM',

        'Teb Job Explanation 1' : 'Implementing the three-tier architecture using '  +
        ' Presentation Layer (JSF + RichFaces + Ajax +Java),  ' +
        ' Business Layer(StarFramework- Java), ' +
        ' Data Access Layer  (PL/SQL)',
        'Teb Job Explanation 2' : ' Participation in the developing, coding, testing, documentation , production and maintenance phases.',
        'Netas Job Explanation 1' : 'Experience with VOIP technology ,network topologies and SIP technologies (SIP Lines, SIP-PBX)',
        'Netas Job Explanation 2' : 'Problem investigation of communication problems, providing configuration, develop solutions for A2 Communication Server.',
        'Koc Job Explanation 1' : ' Building call center  IVR application with Java Based development tools (Genesys- Composer & Avaya Dialog Designer),PL/SQL for the database tier',
        'Koc Job Explanation 2' : ' Participation in the developing, testing and production phases and fixing defects as an Outsourcing consultant for YapıKredi Bank',
        'Education' : 'Education',
        'Boun Istanbul' :'Boğaziçi University - Istanbul',
        'Boun Explanation 1':'MS in Software Engineering Program ',
        'Boun Explanation 2':'Specific topics and experiences: Managing Software Development,Software Design Process,Software Quality Assurance and Reliability, Software Design Patterns,Android Programming and Game Programming ',
        'Yeditepe Istanbul' :'Yeditepe University - İstanbul',
        'Yeditepe Explanation 1':'BS in Computer Engineering Program',
        'Yeditepe Explanation 2':'Specific topics and experiences: Software Development Methodologies,Analysis of Algorithms,Computer Organization,Automata Theory and Formal Languages,Data Communications and Computer Networks,Digital Signal Processing',
        'Web Design' :'Web Programming',
        'Music' :'Music',
        'Travel' :'Travel',
        'Web Design Exp' :'Web Programming is much more than hobby for me. I love creating an imaginary dynamic web pages which has animations,material reflections of real world.',
        'Music Exp' :'I have been interesting in music since i was little. I was a lead vocal of Plugin, Nevermind ve TEB Band music groups. ' +
        'I am still singing actively in Teb Band as lead vocal.',
        'Game Exp' : 'With no overdo, i can honestly say i love all kind of games. I can play any game, from chess,puzzle games to counter,PS4 games. I can even enjoy watching the game. ',
        'Travel Exp' :'I love traveling in all seasons and I try to visit new places whenever possible. My favourite place is Kaputas.',
        'Sport Exp' :'Even if it is hard to find time for sport, I am not ignoring cycling,hiking and swimming a lot.' +
        'Besides, I really enjoy watching basketball games ',
        'Sailing and Diving Exp' :'I interested with sailing and diving at university club. I have certifications for sailing education and I have one-star diving badge.',
        'All' : 'All',
        'Just Me' :'Just Me',
        'Friends' :'Friends',
        'I can be transparent with sun' :'I can be transparent with sun!',
        'TEB prize-giving ceremony ' :'TEB prize-giving ceremony',
        'Graduation' :'Graduation',
        'Backstreetgame' :'Backstreetgame  prize-giving ceremony',
        'WithGirls' :'A day with the girls again',
        'Plugin' :'Plugin concert',
        'With children' :'Art for children',
        'Paragliding' :'Paragliding',
        'Sailing' :'It is true that I was the captain',
        'Cousin' :'Lux cousins with costume',
        'Ballantines Music' :'Ballantines Music Competition',
        'Plugin konser' :'On the stage',
        'Venice' :'Venice',
        'The Princes islands':'The Princes Islands',
        'Blog' : 'My Blog',
        'PostedBy' :'Posted By',
        'Post1Title' :'Why people prefer working with Meteor Framework',
        'Post1exp1' : 'If you curious about why people prefer meteor framework, maybe this post can help you. '+
        'I searched the benefits and strong sides of meteor framework and here my results:',

        'Post1exp2' : 'Firstly, Meteor provides real time web applications. I mean, you dont need the refresh the page if anything'+
        'change on server, you will be informed by server if you subscribed to it. You dont need to request server,'+
        'it will be brodcast the data to you , so this makes meteor really powerful.',

        'Post1exp3' : 'Secondly, If you using meteor, you dont need to be learn many other programming languages.' +
        'If you have already known Javascript, thats it. Just one language enough to create web applications.',

        'Post1exp4' : 'Thirdly, You can find many smart-packages which many developer already coded some libraries. So, many duty can be easily done with meteor packages.'+
        'Atmosphere packages are packages written specifically for Meteor but With the release of version 1.3, Meteor has full support for npm.',

        'Post1exp5' : 'Finally, Meteor community is very supportive, energic and participative. There are many technical materials, documents,examples,videos.'+
        'So, especially for the beginners it would be more easily to learn and develop meteor applications.'+
        'Also,meteor forum is working actively , so many people can find answers from other developers.',

        'GetInTouch':'Get In Touch',
        'Your Name' :'Your Name',
        'Your Email' :'Your Email',
        'Your Message' :'Your Message',
        'Send Message' :'Send Message'

    });


    $translateProvider.translations('tr', {
        'about': 'Hakkımda',
        'blog' : 'Blog',
        'contact': 'İletişim',
        'pictures':'Fotoğraflar',
        'language' : 'English',
        'Profile' :'PROFİL' ,
        'Skills' :'Beceriler',
        'developerMusician': 'YAZILIMCI & VOKAL',
        'hi' : 'Merhaba Ben, ',
        'home' : 'Anasayfa',
        'name' : 'Ad ',
        'Date of birth ' : 'Doğum Tarihi ',
        'June'  : 'Haziran' ,
        'Address'  : 'Adres' ,
        'Email' : 'E posta',
        'Skype' : 'Skype',
        'Interest' : 'İlgi Alanlarım ',
        'Music, Sport, Web Techbologies' : 'Müzik, Spor, Web Teknolojileri',
        'Feb' : 'Şubat',
        'Sept' : 'Eylül',
        'Current' : 'Şimdi',
        'June' :'Haziran',
        'July' :'Temmuz',

        'aboutMe1' : 'Genç sayılabilecek bir yazılımcıyım. ' +
        'Şimdilerde bana en uygun işin yazılım işi olduğunu düşünüyorum.',

        'aboutMe2' : 'Bence, yazılımcıların kodları ile oluşturdukları bu sanal dünya çok heyecan verici,Hele bir de' +
        'bol kullanıcılı , bol beğenili bir ürününüz var ise büyük bir tatmin sağlayacağı aşikar.',

        'aboutMe3' :  'Anlayacağınız üzere, kodlamayı gerçekten seviyorum ve kendi hayal dünyamı design ve kodlama ile gerçeğe dönüştürmek istiyorum. ',

        'aboutMe4' : 'Bunun yanında, sevdiğim başka bir şey daha var, ' +
        'Tabiki erkek arkadaşımı çok seviyorum :) ama şimdi konumuz başka, müzik ',

        'aboutMe5' : 'Çok küçük yaşlardan beri müzik ile ilgileniyorum' +
        'Hatta bir çok aktiviteden önce şarkı söylemeye başladım.  ',

        'aboutMe6' : 'Tabiki bağıra çağıra şarkı söylemeye çalışan bir çocuğa sahip olmak annem için feci olmuştur.' +
        'Ancak aradan geçen uzun zaman içerisinde dikkate değer bir gelişim gösterdiğimi düşünüyorum.',

        'aboutMe7' : 'Şimdi, şirketimizin grubu olan TEB BAND bünyesinde ana vokalim. ' +
        'İlerleyen aylarda konserlerimiz de olacak :) ',

        'TechnicalSkills' : 'Teknik Beceriler',

        'years experience' : 'Yıllık Tecrübe',

        'Know How' : 'Tecrübeler',

        'Job Experiences' : 'İş Tecrübeleri',
        'Interests' :'İlgi Alanlarım',

        'Software Expert Teb'  : 'Yazılım Geliştirme Uzmanı (TEB , BNP PARIBAS)',
        'Software Expert Netas': 'GPS Mühendisi (NETAS)',
        'Software Expert Koc'  : 'Yazılım Geliştirme Uzmanı (KOCSISTEM)',

        'Teb Job Explanation 1' : 'Üç katmanlı mimari yapısı kullanılarak yazılım geliştirme '  +
        ' Sunum Katmanı (JSF + RichFaces + Ajax +Java),  ' +
        ' İş Katmanı(StarFramework- Java), ' +
        ' Veri Katmanı (PL/SQL)',
        'Teb Job Explanation 2' : ' Yazılım geliştirme ve kodlama, test ve dökümantasyon, kurulum ,dağıtım ve  bakım  aşamalarında çalışmalar.',
        'Netas Job Explanation 1' : 'VOIP ,SIP teknolojileri ve ağ topolojileri hakkında tecrübeler,',
        'Netas Job Explanation 2' : 'SIP Haberleşme ve farklı network elemanları ile ilgili problemleri inceleme ve çözüm sağlanması ,A2 uygulama serverı hata tespit, fix hazırlanması,test ve bakım ',
        'Koc Job Explanation 1' : ' Java tabanlı eklentiler ile çağrı Merkezi IVR yazılımlarını  geliştirme. (Java, Genesys- Composer & Avaya Dialog Designer ,PL/SQL for the database tier)',
        'Koc Job Explanation 2' : ' Yapı Kredi Bankasında danışman olarak geliştirme ,test,kurulum,dağıtım,hata ayıklama ve bakım aşamalarında çalışmalar.',
        'Education' : 'Eğitim',
        'Boun Istanbul' :'Boğaziçi Üniversitesi - İstanbul',
        'Boun Explanation 1':'Yazılım Mühendisliği Yüksek Lisans Programı',
        'Boun Explanation 2':'Belirleyici konular ve tecrübeler: Yazilim Gelistirme Yonetimi,Yazilim Tasarimi Sureci,Yazilim Kalite Guvencesi ve Guvenilirligi,Yazılım Örüntüleri ,Android Programlama and Oyun Programlama ',
        'Yeditepe Istanbul' :'Yeditepe Üniversitesi - İstanbul',
        'Yeditepe Explanation 1':'Bilgisayar Mühendisliği Lisans Programı',
        'Yeditepe Explanation 2':'Belirleyici konular ve tecrübeler: Yazılım Geliştirme Yöntemleri,Algoritma Analizi, Bilgisayar Organizasyonu,Otomata Teorisi ve Formal Diller,Veri İletişimi ve Bilgisayar Ağları,Dijital Sinyal işleme',
        'Web Design' :'Web Programlama',
        'Music' :'Muzik',
        'Travel' :'Seyahat',
        'Sport' :'Spor',
        'Web Design Exp' :'Web Programlama benim için hobiden çok daha öte. Animasyonlar, gerçek hayatın yansımalarını içeren dinamik web sayfaları yaratmaya bayılıyorum.',
        'Music Exp' :'Muzik ile küçük yaşlardan beri ilgilenmekteyim. Plugin, Nevermind ve TEB Band gruplarında solistlik yaptım. Halen de aktif olarak solistliğe devam etmekteyim.',
        'Game Exp' : 'Abartısız,tüm oyunlara baylıyorum. Satrançtan, puzzle oyunlardan , PS4 , Counter oyunlara kadar bir çok oyunu oynayabilirim.Hatta sadece oyunları izleyerek bile eğlenebilirim.',
        'Travel Exp' :'Yılın her vakti seyahat etmeyi çok severim ve mümkün oldukça yeni yerler görmeye çalışırım. En favori mekanım ise Kaputaş.',
        'Sport Exp' :'Zaman bulmak zor olsada bisiklete binmeyi, uzun süreli yürüyüşler yapmayı ve bolca yüzmeyi ihmal etmiyorum.' +
        'Bir de basket maçlarını izlerken acayip keyif alıyorum.',
        'Sailing and Diving' :'Yelken ve Dalış',
        'Sailing and Diving Exp' :'Üniversite klüplerinde yelken ve dalış sporları ile ilgilendim. Yelken eğitimlerime dair sertifikalarım ve dalış yetkinliğim için 1 yıldız brövem bulunmakta.',
        'All' : 'Hepsi',
        'Just Me' :'Sadece Ben',
        'Friends' :'Arkadaşlar',
        'I can be transparent with sun' :'Güneşle transparan olabilirim!',
        'TEB prize-giving ceremony' :'TEB ödül töreni ',
        'Graduation' :'Mezuniyet',
        'Backstreetgame' :'Backstreetgame ödül töreni',
        'WithGirls' :'Bir gün yine kızlarla oturuyoruz',
        'Plugin' :'Plugin konser',
        'With children' :'Küçüklere sanat',
        'Paragliding' :'Yamaç paraşütünden',
        'Sailing' :'Kaptanlık yaptığım doğrudur',
        'Cousin' :'Kostümlü lüxler',
        'Ballantines Music' :'Ballantines Müzik Yarışması',
        'Plugin konser' :'Sahneden',
        'Venice' :'Venedik',
        'The Princes islands':'Adalar',
        'Blog' : 'Blogum',
        'PostedBy' :'Yazar:',
        'Post1Title' :'Neden Meteor frameworku tercih ediliyor?',
        'Post1exp1' : 'Eğer kimilerinin neden Meteor Frameworkünü tercih ettiğini merak ediyorsanız, bu yazı size yardımcı olabilir.'+
        'Meteor yapısının yararlarını ve güçlü yönlerini araştırdım,işte bulduklarım:',
        'Post1exp2' : 'Öncelikle, meteor gerçek zamanlı web uygulamaları yapmamızı sağlayan bir yapı. Yani , sunucu tarafında bir değişiklik olduğunda bunu sayfayı refresh etmeden de'+
        'ya da request göndermeden de gerçekleştirebilirsiniz. Eğer sunucuya kaydoldu iseniz, sunucu tarafından yeni bilgiler için bilgilendiriliyor olacaksınız.'+
        'Bu özellik meteor frameworkünü gerçekten güçlü kılmakta.',
        'Post1exp3' : 'İkinci olarak eğer meteor kullanıyorsanız, tek bir programlama dili öğrenmeniz yeterli.'+
        'Javascript biliyorsanız, başka bir dil öğrenmeye gerek kalmadan web uygulamaları yaratabilirsiniz.',

        'Post1exp3' : 'İkinci olarak eğer meteor kullanıyorsanız, tek bir programlama dili öğrenmeniz yeterli.'+
        'Javascript biliyorsanız, başka bir dil öğrenmeye gerek kalmadan web uygulamaları yaratabilirsiniz.',

        'Post1exp4' : 'Üçüncü olarak, developerların hali hazırda yazmış olduğu bir çok kütüphaneleri Meteorda bulabilirsiniz.'+
        'Bu kütüphaneler sayesinde bir çok işlemi kolaylıkla meteorda yapabilirsiniz. Atmosphere paketleri sadece Meteoraa özgü yazılmış bir çok paketi içerirken,'+
        'Meteor 1.3ten sonra npm kütüphaelerini de artık Meteor frameworkü ile kullanabiliyoruz.',

        'Post1exp5' : 'Son olarak Meteor topluluğu oldukça enerjik,destekleyici ve paylaşımcı.Meteor hakkında bir çok teknik materyaller bulunmakta.'+
        'Özellikle yeni başlayanlar için öğrenme ve meteor uygulaması geliştirme diğer yazılım platformlarına kıyasla daha kolay olacaktır.'+
         'Ayrıca Meteor forum akif olarak kullanılmakta, bir çok yazılımcı forumda sorularına cevap bulabilir. ',

        'GetInTouch':'İLETİŞİM',
        'Your Name' :'Adınız',
        'Your Email' :'Mail Adresiniz',
        'Your Message' :'Mesajınız',
        'Send Message' :'Mesajı Gönder'

    });



}