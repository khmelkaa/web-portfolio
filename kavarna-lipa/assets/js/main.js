(() => {
  'use strict';

  /* ========================================================================
     1. I18N DICTIONARY (CZ default + EN)
     ======================================================================== */
  const I18N = {
    cs: {
      'a11y.skip': 'Přeskočit na obsah',
      'a11y.nav': 'Hlavní navigace',
      'a11y.menuOpen': 'Otevřít menu',
      'a11y.menuClose': 'Zavřít menu',
      'a11y.newTab': '(otevře se v novém okně)',
      'a11y.close': 'Zavřít',
      'a11y.prev': 'Předchozí',
      'a11y.next': 'Další',
      'nav.story': 'Příběh',
      'nav.menu': 'Menu',
      'nav.gallery': 'Galerie',
      'nav.visit': 'Návštěva',
      'nav.reviews': 'Recenze',
      'nav.book': 'Rezervace',
      'header.cta': 'Rezervovat',
      'cta.book': 'Rezervovat stůl',
      'cta.menu': 'Prohlédnout menu',
      'hero.badge': 'Nově otevřeno na Vinohradech',
      'hero.title': 'Káva, chléb<br> a&nbsp;chvíle <em>pod lípou</em>',
      'hero.lead': 'Výběrová káva z\u00A0malých pražíren, kváskové pečivo z\u00A0vlastní pece a\u00A0snídaně po celý den. Na rohu Korunní, pět minut od náměstí Míru.',
      'hero.stamp': 'PEČENO KAŽDÉ RÁNO · KORUNNÍ 42 · PRAHA ·',
      'hero.cardLabel': 'Nejoblíbenější',
      'alt.hero': 'Světlý interiér Kavárny Lípa s dubovým barem, zelenými kachlíky a vitrínou plnou croissantů',
      'alt.barista': 'Ruce baristy nalévají vodu z konvice do dripperu V60',
      'alt.pastry': 'Kardamomoví šneci a kváskové croissanty na dřevěném prkénku',
      'alt.breakfast': 'Kváskový toast s avokádem a pošírovaným vejcem, vedle filtrovaná káva',
      'story.eyebrow': 'Náš příběh',
      'story.title': 'Švédská skořice, český kvásek a\u00A0lípa za oknem',
      'story.p1': 'Lípu jsme otevřeli v\u00A0listopadu 2026 v\u00A0přízemí secesního domu na Korunní. Tereza léta pekla v\u00A0pražských pekárnách, Jonas se naučil připravovat kávu v\u00A0rodném Göteborgu. Spojili jsme to, co máme rádi z\u00A0obou světů: severskou jednoduchost, poctivý kváskový chléb a\u00A0pohostinnost, při které se člověk cítí jako doma.',
      'story.p2': 'Pečeme každé ráno přímo za barem, kávu střídáme podle sezóny a\u00A0na nic nespěcháme. Švédové tomu říkají <em>fika</em>\u00A0– zastavit se, dát si kávu, něco sladkého a\u00A0chvíli jen být.',
      'story.v1t': 'Pečeme od pěti ráno',
      'story.v1': 'Croissanty, šneci i\u00A0chléb vznikají každý den v\u00A0naší malé pekárně. Náš kvásek se jmenuje Bohouš.',
      'story.v2t': 'Káva s\u00A0jasným původem',
      'story.v2': 'Výběrové kávy z\u00A0malých českých a\u00A0severských pražíren. Ke každé víme, z\u00A0jaké farmy pochází.',
      'story.v3t': 'Fika bez spěchu',
      'story.v3': 'Žádné časové limity u\u00A0stolu. Přineste si knížku, sedněte si k\u00A0oknu a\u00A0zpomalte.',
      'story.sign': 'zakladatelé Kavárny Lípa',
      'menu.eyebrow': 'Menu',
      'menu.title': 'Co u\u00A0nás ochutnáte',
      'menu.intro': 'Krátké menu, které se mění se sezónou. Rostlinné mléko (ovesné, mandlové) nabízíme ke každému nápoji za 15\u00A0Kč navíc.',
      'menu.tabsLabel': 'Kategorie menu',
      'menu.cat.coffee': 'Káva',
      'menu.cat.tea': 'Čaj & další',
      'menu.cat.bakery': 'Pečivo',
      'menu.cat.breakfast': 'Snídaně',
      'menu.filterLabel': 'Filtrovat podle stravování',
      'menu.filter': 'Filtr:',
      'menu.f.all': 'Vše',
      'menu.f.vegan': 'Veganské',
      'menu.f.gf': 'Bez lepku',
      'menu.empty': 'V této kategorii zrovna nemáme položku s vybraným filtrem. Zkuste jiný filtr nebo se zeptejte obsluhy.',
      'menu.note': 'Informace o\u00A0alergenech vám rádi sdělíme u\u00A0baru. Ceny jsou uvedeny včetně DPH.',
      'tag.vegan': 'Veganské',
      'tag.gf': 'Bez lepku',
      'tag.house': 'Oblíbené',
      'specials.eyebrow': 'Dnes u nás',
      'specials.title': 'Speciality dne',
      'specials.intro': 'Každý den připravujeme něco navíc\u00A0– podle toho, co přivezli farmáři a\u00A0jakou kávu jsme zrovna upražili. Dokud zásoby stačí.',
      'gallery.eyebrow': 'Galerie',
      'gallery.title': 'Světlo, dřevo a\u00A0vůně pečiva',
      'gallery.intro': 'Velká okna do ulice, dubové stoly a\u00A0bar obložený kachlíky v\u00A0barvě lipového listu. Přijďte se podívat osobně.',
      'gallery.dialog': 'Galerie',
      'gallery.a0': 'Interiér kavárny s dubovým barem a velkým oknem do Korunní ulice',
      'gallery.a1': 'Flat white s latte art v zeleném keramickém šálku',
      'gallery.a2': 'Čerstvě upečení kardamomoví šneci a kváskové croissanty',
      'gallery.a3': 'Snídaně s avokádovým toastem, pošírovaným vejcem a filtrem',
      'gallery.a4': 'Příprava výběrové filtrované kávy metodou V60',
      'visit.eyebrow': 'Návštěva',
      'visit.title': 'Kdy a\u00A0kde nás najdete',
      'visit.mapTitle': 'Mapa – Kavárna Lípa, Korunní 42, Praha 2',
      'visit.tram': 'Tram 10, 16 – zastávka Jana Masaryka (2\u00A0min pěšky)',
      'visit.metro': 'Metro A – Náměstí Míru (6\u00A0min pěšky)',
      'visit.directions': 'Naplánovat cestu',
      'hours.title': 'Otevírací doba',
      'hours.caption': 'Otevírací doba podle dnů v týdnu',
      'hours.note': 'Snídaně podáváme po celý den. Kuchyně končí hodinu před zavírací dobou.',
      'day.0': 'Pondělí',
      'day.1': 'Úterý',
      'day.2': 'Středa',
      'day.3': 'Čtvrtek',
      'day.4': 'Pátek',
      'day.5': 'Sobota',
      'day.6': 'Neděle',
      'status.open': 'Otevřeno teď · do {close}',
      'status.closedToday': 'Zavřeno · dnes od {open}',
      'status.closedNext': 'Zavřeno · {day} od {open}',
      'amen.access': 'Bezbariérový vstup',
      'amen.dogs': 'Pejsci vítáni',
      'amen.wifi': 'Wi-Fi zdarma',
      'booking.eyebrow': 'Rezervace',
      'booking.title': 'Rezervujte si stůl',
      'booking.intro': 'O\u00A0víkendech bývá na snídaně plno, proto doporučujeme rezervaci předem. Stůl vám podržíme 15\u00A0minut, potvrzení pošleme SMS.',
      'booking.pt1': 'Rezervace až 60 dní dopředu',
      'booking.pt2': 'Stoly pro 1–8 hostů',
      'booking.pt3': 'Větší skupiny a\u00A0oslavy řešíme telefonicky',
      'form.date': 'Datum',
      'form.guests': 'Počet hostů',
      'form.less': 'Ubrat hosta',
      'form.more': 'Přidat hosta',
      'form.time': 'Čas příchodu',
      'form.pickDate': 'Vyberte volný čas příchodu:',
      'form.noSlots': 'Pro dnešní den už nejsou volné časy. Vyberte prosím zítřejší nebo pozdější datum.',
      'form.name': 'Jméno a příjmení',
      'form.namePh': 'Jana Nováková',
      'form.phone': 'Telefon',
      'form.note': 'Poznámka',
      'form.optional': '(nepovinné)',
      'form.notePh': 'Např. dětská židlička, stůl u okna, alergie…',
      'form.submit': 'Odeslat rezervaci',
      'form.privacy': 'Odesláním souhlasíte se zpracováním údajů pouze za účelem rezervace. Nic dalšího vám posílat nebudeme.',
      'err.date': 'Vyberte prosím platné datum v rozmezí příštích 60 dní.',
      'err.guests': 'Počet hostů musí být 1 až 8.',
      'err.time': 'Vyberte prosím čas příchodu.',
      'err.name': 'Zadejte prosím své jméno (alespoň 2 znaky).',
      'err.phone': 'Zadejte prosím platné telefonní číslo.',
      'success.title': 'Děkujeme, máme to!',
      'success.summary': 'Rezervace na jméno {name} pro {guests} ({date} v {time}).',
      'success.small': 'Do 30 minut vám rezervaci potvrdíme SMS zprávou. Kdyby se cokoliv změnilo, stačí zavolat.',
      'success.again': 'Nová rezervace',
      'insta.title': 'Sledujte nás',
      'insta.follow': 'Otevřít Instagram',
      'insta.note': '„Bohouš dnes vstal ve 4:50. Chleba je v\u00A0peci.“',
      'insta.a1': 'Detail kardamomových šneků',
      'insta.a2': 'Latte art zblízka',
      'insta.a3': 'Barista při přípravě filtrované kávy',
      'insta.a4': 'Výhled z kavárny na secesní dům naproti',
      'insta.a5': 'Avokádový toast s vejcem',
      'reviews.eyebrow': 'Recenze',
      'reviews.title': 'Co říkají naši hosté',
      'reviews.starsLabel': '4,9 z 5 hvězdiček',
      'reviews.five': '5 z 5',
      'reviews.count': '87 hodnocení na Googlu',
      'reviews.r1': 'Nejlepší kardamomový šnek, jakého jsem mimo Stockholm jedla. A\u00A0flat white s\u00A0ovesným mlékem je přesně takový, jaký má být.',
      'reviews.src1': 'Google · před 2 týdny',
      'reviews.r2': 'Konečně kavárna na Vinohradech, kde se dá v\u00A0klidu posedět s\u00A0knížkou. Světlo, dřevo, tichá hudba a\u00A0obsluha, která si po druhé návštěvě pamatuje, co pijete.',
      'reviews.src2': 'Google · před měsícem',
      'reviews.r3': 'Chodíme sem s\u00A0dětmi na sobotní snídaně. Šakšuka je výborná, dětská židlička je vždycky po ruce a\u00A0kváskový chleba si bereme i\u00A0domů.',
      'reviews.src3': 'Google · před 3 týdny',
      'footer.tagline': 'Výběrová káva, kváskové pečivo a\u00A0chvíle klidu na Vinohradech.',
      'footer.contact': 'Kontakt',
      'footer.hours': 'Otevřeno',
      'footer.h1': 'Po–Pá',
      'footer.h2': 'Sobota',
      'footer.h3': 'Neděle',
      'footer.nav': 'Navigace',
      'footer.demo': 'Demo projekt – koncept webu vytvořil Khmelevoi Oleksii'
    },
    en: {
      'a11y.skip': 'Skip to content',
      'a11y.nav': 'Main navigation',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.newTab': '(opens in a new tab)',
      'a11y.close': 'Close',
      'a11y.prev': 'Previous',
      'a11y.next': 'Next',
      'nav.story': 'Story',
      'nav.menu': 'Menu',
      'nav.gallery': 'Gallery',
      'nav.visit': 'Visit',
      'nav.reviews': 'Reviews',
      'nav.book': 'Reservations',
      'header.cta': 'Book a table',
      'cta.book': 'Book a table',
      'cta.menu': 'Explore menu',
      'hero.badge': 'Newly opened in Vinohrady',
      'hero.title': 'Coffee, sourdough<br> &amp; quiet mornings <em>under the linden</em>',
      'hero.lead': 'Specialty coffee from small roasters, naturally leavened bakery goods straight from our oven, and all-day breakfast. On Korunní street, five minutes from Náměstí Míru.',
      'hero.stamp': 'BAKED EVERY MORNING · KORUNNÍ 42 · PRAGUE ·',
      'hero.cardLabel': 'Guest favourite',
      'alt.hero': 'Bright interior of Kavárna Lípa with oak coffee bar, linden green tiles, and pastry display',
      'alt.barista': 'Barista pouring hot water from a gooseneck kettle into a V60 dripper',
      'alt.pastry': 'Cardamom buns and sourdough croissants on a wooden board',
      'alt.breakfast': 'Sourdough avocado toast with poached egg alongside filter coffee',
      'story.eyebrow': 'Our story',
      'story.title': 'Swedish cardamom, Czech sourdough &amp; a linden tree outside',
      'story.p1': 'We opened Lípa in November 2026 on the ground floor of an Art Nouveau building on Korunní. Tereza spent years baking in Prague’s artisan bakeries; Jonas learned his craft in Gothenburg. Together we blended Nordic calm, honest sourdough bread, and neighbourhood warmth.',
      'story.p2': 'Everything is baked fresh behind the bar each morning, our coffees rotate with the harvest, and nobody rushes your table. In Sweden it is called <em>fika</em> — pausing for good coffee, something warm from the oven, and unhurried company.',
      'story.v1t': 'Ovens on at 5 AM',
      'story.v1': 'Croissants, cardamom knots, and country loaves are baked every morning in-house with our starter Bohouš.',
      'story.v2t': 'Traceable specialty coffee',
      'story.v2': 'Lightly roasted beans from Czech and Nordic micro-roasters — every cup traced back to its farm.',
      'story.v3t': 'Unhurried fika',
      'story.v3': 'No table time limits. Bring a book, grab a window seat, and take your morning slow.',
      'story.sign': 'founders of Kavárna Lípa',
      'menu.eyebrow': 'Menu',
      'menu.title': 'What’s on the bar &amp; in the oven',
      'menu.intro': 'A focused seasonal menu. Plant-based milk (oat or almond) is available with any drink for +15\u00A0Kč.',
      'menu.tabsLabel': 'Menu categories',
      'menu.cat.coffee': 'Coffee',
      'menu.cat.tea': 'Tea & More',
      'menu.cat.bakery': 'Bakery',
      'menu.cat.breakfast': 'Breakfast',
      'menu.filterLabel': 'Filter by diet',
      'menu.filter': 'Filter:',
      'menu.f.all': 'All',
      'menu.f.vegan': 'Vegan',
      'menu.f.gf': 'Gluten-free',
      'menu.empty': 'No items match that dietary filter in this category right now. Try another filter or ask our baristas.',
      'menu.note': 'Full allergen details are available at the bar. All prices include VAT.',
      'tag.vegan': 'Vegan',
      'tag.gf': 'Gluten-free',
      'tag.house': 'Popular',
      'specials.eyebrow': 'Today at Lípa',
      'specials.title': 'Today’s specials',
      'specials.intro': 'Every day we add a few small-batch specials inspired by the morning market and our current guest roast. Available until sold out.',
      'gallery.eyebrow': 'Gallery',
      'gallery.title': 'Daylight, oak &amp; warm pastry',
      'gallery.intro': 'Tall street-facing windows, solid oak tables, and linden-green ceramics. Stop by and see it in person.',
      'gallery.dialog': 'Gallery',
      'gallery.a0': 'Bright café interior with oak bar and tall windows onto Korunní',
      'gallery.a1': 'Flat white with tulip latte art in a handmade green ceramic cup',
      'gallery.a2': 'Freshly baked Swedish cardamom buns and sourdough croissants',
      'gallery.a3': 'All-day breakfast with sourdough avocado toast and filter coffee',
      'gallery.a4': 'Hand-poured V60 specialty filter coffee',
      'visit.eyebrow': 'Visit us',
      'visit.title': 'Opening hours &amp; location',
      'visit.mapTitle': 'Map – Kavárna Lípa, Korunní 42, Prague 2',
      'visit.tram': 'Tram 10, 16 – Jana Masaryka stop (2\u00A0min walk)',
      'visit.metro': 'Metro Line A – Náměstí Míru (6\u00A0min walk)',
      'visit.directions': 'Get directions',
      'hours.title': 'Opening hours',
      'hours.caption': 'Opening hours by day of week',
      'hours.note': 'Breakfast is served all day. Kitchen closes one hour before closing time.',
      'day.0': 'Monday',
      'day.1': 'Tuesday',
      'day.2': 'Wednesday',
      'day.3': 'Thursday',
      'day.4': 'Friday',
      'day.5': 'Saturday',
      'day.6': 'Sunday',
      'status.open': 'Open now · until {close}',
      'status.closedToday': 'Closed · opens today at {open}',
      'status.closedNext': 'Closed · opens {day} at {open}',
      'amen.access': 'Step-free access',
      'amen.dogs': 'Dogs welcome',
      'amen.wifi': 'Free Wi-Fi',
      'booking.eyebrow': 'Reservations',
      'booking.title': 'Book your table',
      'booking.intro': 'Weekend mornings fill up fast, so we recommend booking ahead. We hold tables for 15\u00A0minutes and confirm via SMS.',
      'booking.pt1': 'Book up to 60 days ahead',
      'booking.pt2': 'Tables for 1–8 guests',
      'booking.pt3': 'Larger groups &amp; celebrations by phone',
      'form.date': 'Date',
      'form.guests': 'Guests',
      'form.less': 'Remove guest',
      'form.more': 'Add guest',
      'form.time': 'Arrival time',
      'form.pickDate': 'Choose an available arrival time:',
      'form.noSlots': 'No slots left for today. Please choose tomorrow or a later date.',
      'form.name': 'Full name',
      'form.namePh': 'Alex Mercer',
      'form.phone': 'Phone number',
      'form.note': 'Note',
      'form.optional': '(optional)',
      'form.notePh': 'E.g. high chair, window table, allergies…',
      'form.submit': 'Confirm reservation',
      'form.privacy': 'By submitting, you agree to us using your details solely to confirm your table. No marketing messages.',
      'err.date': 'Please select a valid date within the next 60 days.',
      'err.guests': 'Number of guests must be between 1 and 8.',
      'err.time': 'Please pick an arrival time.',
      'err.name': 'Please enter your name (at least 2 characters).',
      'err.phone': 'Please enter a valid phone number.',
      'success.title': 'Thank you, you’re booked!',
      'success.summary': 'Table for {guests} under {name} on {date} at {time}.',
      'success.small': 'We will confirm your booking via SMS within 30 minutes. Just give us a call if your plans change.',
      'success.again': 'Make another booking',
      'insta.title': 'Follow us',
      'insta.follow': 'Open Instagram',
      'insta.note': '“Bohouš woke up at 4:50 today. Country loaves are in the oven.”',
      'insta.a1': 'Fresh cardamom buns close-up',
      'insta.a2': 'Latte art close-up',
      'insta.a3': 'Barista brewing V60 filter coffee',
      'insta.a4': 'View out onto the Vinohrady street',
      'insta.a5': 'Avocado sourdough toast with poached egg',
      'reviews.eyebrow': 'Reviews',
      'reviews.title': 'What our guests say',
      'reviews.starsLabel': '4.9 out of 5 stars',
      'reviews.five': '5 out of 5',
      'reviews.count': '87 reviews on Google',
      'reviews.r1': 'Best cardamom bun I’ve had outside Stockholm. And the oat flat white is poured to perfection.',
      'reviews.src1': 'Google · 2 weeks ago',
      'reviews.r2': 'Finally a Vinohrady café where you can actually read a book in peace. Daylight, oak tables, gentle music, and staff who remember your order.',
      'reviews.src2': 'Google · a month ago',
      'reviews.r3': 'Our go-to spot for Saturday breakfast with the kids. Great shakshuka, high chair always ready, and we never leave without a sourdough loaf.',
      'reviews.src3': 'Google · 3 weeks ago',
      'footer.tagline': 'Specialty coffee, sourdough bakery, and unhurried mornings in Vinohrady.',
      'footer.contact': 'Contact',
      'footer.hours': 'Hours',
      'footer.h1': 'Mon–Fri',
      'footer.h2': 'Saturday',
      'footer.h3': 'Sunday',
      'footer.nav': 'Navigation',
      'footer.demo': 'Demo project – website concept created by Khmelevoi Oleksii'
    }
  };

  /* ========================================================================
     2. MENU & SPECIALS DATA
     ======================================================================== */
  const MENU = {
    coffee: [
      { price: 65, tags: ['vegan', 'gf'], cs: { n: 'Espresso / Doppio', d: 'Sezónní směs z české pražírny, tóny lískového oříšku a mléčné čokolády.' }, en: { n: 'Espresso / Doppio', d: 'Seasonal blend from a local micro-roaster with hazelnut and cocoa notes.' } },
      { price: 85, tags: ['gf', 'house'], cs: { n: 'Flat white', d: 'Dvojité espresso s jemně našlehaným farmářským mlékem (možno s ovesným).' }, en: { n: 'Flat white', d: 'Double espresso with silky microfoam from farm milk (oat available).' } },
      { price: 80, tags: ['gf'], cs: { n: 'Cappuccino', d: 'Krémové cappuccino v ručně točené keramice.' }, en: { n: 'Cappuccino', d: 'Classic velvety cappuccino served in handmade stoneware.' } },
      { price: 95, tags: ['vegan', 'gf', 'house'], cs: { n: 'Filtrovaná káva V60', d: 'Ručně zalévaný jednodruhový filtr — aktuálně Etiopie Guji (jasmín, broskev).' }, en: { n: 'V60 Pour-over', d: 'Hand-brewed single origin — currently Ethiopia Guji (jasmine, white peach).' } },
      { price: 75, tags: ['vegan', 'gf'], cs: { n: 'Batch brew', d: 'Rychlý výběrový filtr z ranní várky, čistá ovocná chuť.' }, en: { n: 'Batch brew', d: 'Bright, clean specialty filter brewed fresh each morning.' } },
      { price: 95, tags: ['vegan', 'gf'], cs: { n: 'Espresso tonic', d: 'Dvojité espresso na ledu s řemeslným tonikem a kůrou z grepu.' }, en: { n: 'Espresso tonic', d: 'Double espresso over ice with craft tonic and fresh grapefruit zest.' } }
    ],
    tea: [
      { price: 95, tags: ['vegan', 'gf', 'house'], cs: { n: 'Matcha latte', d: 'Ceremoniální matcha z Uji s ovesným nebo plnotučným mlékem.' }, en: { n: 'Matcha latte', d: 'Ceremonial-grade Uji matcha whisked with oat or whole milk.' } },
      { price: 75, tags: ['vegan', 'gf'], cs: { n: 'Lipový čaj s medem / agáve', d: 'Náš podpisový sypaný lipový květ z jižní Moravy.' }, en: { n: 'Linden blossom infusion', d: 'Our signature loose-leaf Moravian linden blossom tea.' } },
      { price: 85, tags: ['vegan', 'gf'], cs: { n: 'Domácí chai latte', d: 'Černý čaj pomalu vařený s kardamomem, zázvorem, skořicí a hřebíčkem.' }, en: { n: 'House spiced chai', d: 'Black tea slow-simmered with cardamom, ginger, cinnamon, and clove.' } },
      { price: 80, tags: ['vegan', 'gf'], cs: { n: 'Rakytníková limonáda', d: 'Čerstvý rakytníkový sirup, rozmarýn a jemně perlivá voda.' }, en: { n: 'Sea-buckthorn spritz', d: 'House sea-buckthorn cordial, rosemary sprig, and sparkling water.' } },
      { price: 90, tags: ['vegan', 'gf'], cs: { n: 'Horká čokoláda 70 %', d: 'Rozpuštěná kolumbijská single-origin čokoláda, špetka mořské soli.' }, en: { n: '70% hot chocolate', d: 'Melted single-origin Colombian dark chocolate with a pinch of sea salt.' } },
      { price: 70, tags: ['vegan', 'gf'], cs: { n: 'Jablečný mošt ze sadu', d: 'Za studena lisovaný nefiltrovaný mošt z Českého středohoří.' }, en: { n: 'Orchard apple juice', d: 'Cold-pressed unfiltered apple juice from Bohemian orchards.' } }
    ],
    bakery: [
      { price: 78, tags: ['house'], cs: { n: 'Švédský kardamomový šnek', d: 'Čerstvě drcený zelený kardamom, máslové těsto a perlový cukr.' }, en: { n: 'Swedish cardamom bun', d: 'Freshly cracked green cardamom, cultured butter dough, pearl sugar.' } },
      { price: 72, tags: [], cs: { n: 'Kváskový croissant', d: 'Tři dny zrající máslové listové těsto, křupavá kůrka.' }, en: { n: 'Sourdough croissant', d: 'Three-day fermented butter pastry with a crisp honeycomb crumb.' } },
      { price: 85, tags: ['vegan'], cs: { n: 'Skořicový uzel (veganský)', d: 'Měkké kynuté těsto s cejlonskou skořicí a javorovou glazurou.' }, en: { n: 'Cinnamon knot (vegan)', d: 'Soft swirled bun with Ceylon cinnamon and light maple glaze.' } },
      { price: 95, tags: ['vegan', 'gf', 'house'], cs: { n: 'Mandlovo-pohankový koláč se švestkami', d: 'Vláčný bezlepkový koláč z mandlové mouky a pečených švestek.' }, en: { n: 'Almond & buckwheat plum cake', d: 'Tender gluten-free cake with toasted almonds and roasted plums.' } },
      { price: 115, tags: ['vegan'], cs: { n: 'Pšenično-žitný kváskový bochník (750 g)', d: 'Náš chléb z kvásku Bohouš — s sebou domů i nakrájený.' }, en: { n: 'Country sourdough loaf (750 g)', d: 'Baked daily from our starter Bohouš — whole or sliced to take home.' } },
      { price: 88, tags: ['gf'], cs: { n: 'Baskický tvarohový koláč', d: 'Krémový pečený cheesecake s karamelizovaným povrchem a citrónovou kůrou.' }, en: { n: 'Burnt Basque cheesecake', d: 'Custardy gluten-free baked cheesecake with caramelized top.' } }
    ],
    breakfast: [
      { price: 215, tags: ['house'], cs: { n: 'Avokádový toast s pošírovaným vejcem', d: 'Náš kváskový chléb, mačkané avokádo, vejce z volného chovu, dukkah, bylinky.' }, en: { n: 'Avocado toast & poached egg', d: 'House sourdough, smashed avocado, free-range egg, dukkah, micro herbs.' } },
      { price: 235, tags: ['gf'], cs: { n: 'Domácí šakšuka z pánve', d: 'Pečená rajčata, paprika, římský kmín, dvě vejce, feta a koriandr (bezlepková verze bez chleba).' }, en: { n: 'Skillet shakshuka', d: 'Roasted tomato and pepper sauce, cumin, two baked eggs, feta, herbs.' } },
      { price: 175, tags: ['vegan', 'gf', 'house'], cs: { n: 'Teplá pohanková kaše s hruškou', d: 'Vařená v ovesném mléce, pečená hruška v kardamomu, pražené lískové ořechy.' }, en: { n: 'Warm buckwheat porridge', d: 'Cooked in oat milk with cardamom-roasted pear and toasted hazelnuts.' } },
      { price: 245, tags: [], cs: { n: 'Severský snídaňový talíř', d: 'Kváskový chléb, uleželý sýr, měkké vejce, šlehané máslo a rybízová marmeláda.' }, en: { n: 'Nordic breakfast plate', d: 'Sourdough, aged cheese, soft-boiled egg, whipped cultured butter, currant jam.' } },
      { price: 195, tags: ['vegan'], cs: { n: 'Hummus z pečené mrkve na kvásku', d: 'Krémový hummus, nakládaná červená cibulka, tahini a sezam.' }, en: { n: 'Roasted carrot hummus toast', d: 'Silky hummus on grilled sourdough with pickled red onion and tahini.' } },
      { price: 165, tags: ['gf'], cs: { n: 'Domácí granola s řeckým jogurtem', d: 'Pečené vločky bez lepku s medem, pekanovými ořechy a sezónním kompotem.' }, en: { n: 'House granola & Greek yogurt', d: 'Honey-baked gluten-free oats, pecans, and seasonal fruit compote.' } }
    ]
  };

  const SPECIALS = [
    { price: '105 Kč', cs: { n: 'Hostující filtr: Kenya Nyeri (La Cabra)', d: 'Šťavnatý černý rybíz a červený pomeranč — ručně na V60.' }, en: { n: 'Guest pour-over: Kenya Nyeri (La Cabra)', d: 'Juicy blackcurrant and blood orange — hand-poured on V60.' } },
    { price: '92 Kč', cs: { n: 'Hruškový danish s vanilkovým krémem', d: 'Pečeno dnes v 6:30, pouze 24 kusů na celý den.' }, en: { n: 'Poached pear & vanilla danish', d: 'Out of the oven at 6:30 AM — strictly 24 pieces today.' } },
    { price: '165 Kč', cs: { n: 'Krémová polévka z pečeného celeru', d: 'S lanýžovým olejem, praženými semínky a krajícem teplého kvásku (od 11:30).' }, en: { n: 'Roasted celeriac velouté', d: 'Finished with herb oil, toasted seeds, and warm sourdough (from 11:30).' } }
  ];

  // Opening hours: Monday=0 .. Sunday=6 (minutes from midnight)
  const HOURS = [
    { open: 7 * 60 + 30, close: 19 * 60, openStr: '7:30', closeStr: '19:00' }, // Mon
    { open: 7 * 60 + 30, close: 19 * 60, openStr: '7:30', closeStr: '19:00' }, // Tue
    { open: 7 * 60 + 30, close: 19 * 60, openStr: '7:30', closeStr: '19:00' }, // Wed
    { open: 7 * 60 + 30, close: 19 * 60, openStr: '7:30', closeStr: '19:00' }, // Thu
    { open: 7 * 60 + 30, close: 19 * 60, openStr: '7:30', closeStr: '19:00' }, // Fri
    { open: 8 * 60 + 30, close: 18 * 60, openStr: '8:30', closeStr: '18:00' }, // Sat
    { open: 9 * 60,      close: 17 * 60, openStr: '9:00', closeStr: '17:00' }  // Sun
  ];

  const GALLERY = [
    { src: 'assets/img/hero.jpg', key: 'gallery.a0' },
    { src: 'assets/img/latte.jpg', key: 'gallery.a1' },
    { src: 'assets/img/pastry.jpg', key: 'gallery.a2' },
    { src: 'assets/img/breakfast.jpg', key: 'gallery.a3' },
    { src: 'assets/img/barista.jpg', key: 'gallery.a4' }
  ];

  /* ========================================================================
     3. STATE & HELPERS
     ======================================================================== */
  const _qLang = new URLSearchParams(window.location.search).get('lang');
  const _navCs = /^cs|^sk/i.test(navigator.language || '');
  let lang = (_qLang === 'en' || _qLang === 'cs') ? _qLang : (localStorage.getItem('lipa_lang') || (_navCs ? 'cs' : 'en'));
  let activeCat = 'coffee';
  let activeFilter = 'all';
  let selectedSlot = '';
  let lbIndex = 0;

  const t = (key, vars = {}) => {
    let str = (I18N[lang] && I18N[lang][key]) || I18N.cs[key] || key;
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v);
    }
    return str;
  };

  function getPragueNow() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Prague',
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(now);
    const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
    const dayMap = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
    return {
      dayIndex: dayMap[map.weekday] ?? 0,
      hour: Number(map.hour === '24' ? 0 : map.hour),
      minute: Number(map.minute),
      isoDate: `${map.year}-${map.month}-${map.day}`
    };
  }

  /* ========================================================================
     4. APPLY LANGUAGE
     ======================================================================== */
  function applyLanguage() {
    document.documentElement.lang = lang;
    localStorage.setItem('lipa_lang', lang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = el.dataset.i18nAttr.split(',');
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    renderMenu();
    renderSpecials();
    updateOpenStatus();
    renderSlots();
  }

  /* ========================================================================
     5. MENU TABS & DIETARY FILTER
     ======================================================================== */
  function renderMenu() {
    const list = document.getElementById('menu-list');
    if (!list) return;
    const items = (MENU[activeCat] || []).filter(item => {
      if (activeFilter === 'all') return true;
      return item.tags.includes(activeFilter);
    });

    if (!items.length) {
      list.innerHTML = `<li class="menu-empty">${t('menu.empty')}</li>`;
      return;
    }

    list.innerHTML = items.map(item => {
      const copy = item[lang];
      const tagsHtml = item.tags.map(tg => `<span class="tag tag-${tg}">${t('tag.' + tg)}</span>`).join('');
      return `
        <li class="menu-item">
          <div class="menu-item-top">
            <h3 class="menu-item-name">${copy.n}</h3>
            <span class="menu-item-price">${item.price}&nbsp;Kč</span>
          </div>
          <p class="menu-item-desc">${copy.d}</p>
          ${tagsHtml ? `<div class="menu-tags">${tagsHtml}</div>` : ''}
        </li>
      `;
    }).join('');
  }

  function renderSpecials() {
    const list = document.getElementById('specials-list');
    const dateEl = document.getElementById('specials-date');
    if (dateEl) {
      dateEl.textContent = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'cs-CZ', {
        timeZone: 'Europe/Prague',
        day: 'numeric',
        month: 'long'
      }).format(new Date());
    }
    if (!list) return;
    list.innerHTML = SPECIALS.map((sp, i) => {
      const copy = sp[lang];
      return `
        <li class="special-card">
          <span class="special-num">0${i + 1}</span>
          <div>
            <h3>${copy.n}</h3>
            <p>${copy.d}</p>
          </div>
          <span class="special-price">${sp.price}</span>
        </li>
      `;
    }).join('');
  }

  /* ========================================================================
     6. LIVE OPEN / CLOSED STATUS (Europe/Prague)
     ======================================================================== */
  function updateOpenStatus() {
    const now = getPragueNow();
    const mins = now.hour * 60 + now.minute;
    const today = HOURS[now.dayIndex];
    const isOpen = mins >= today.open && mins < today.close;

    let label;
    if (isOpen) {
      label = t('status.open', { close: today.closeStr });
    } else if (mins < today.open) {
      label = t('status.closedToday', { open: today.openStr });
    } else {
      const nextIdx = (now.dayIndex + 1) % 7;
      label = t('status.closedNext', { day: t('day.' + nextIdx).toLowerCase(), open: HOURS[nextIdx].openStr });
    }

    document.querySelectorAll('[data-status]').forEach(el => {
      el.dataset.state = isOpen ? 'open' : 'closed';
      const txt = el.querySelector('.status-text');
      if (txt) txt.textContent = label;
    });

    document.querySelectorAll('.hours-table tbody tr').forEach(tr => {
      tr.classList.toggle('is-today', Number(tr.dataset.day) === now.dayIndex);
    });
  }

  /* ========================================================================
     7. RESERVATION FORM & TIME SLOTS
     ======================================================================== */
  const form = document.getElementById('booking-form');
  const dateInput = document.getElementById('f-date');
  const guestsInput = document.getElementById('f-guests');
  const timeHidden = document.getElementById('f-time-value');
  const slotsWrap = document.getElementById('slots');
  const slotsHint = document.getElementById('slots-hint');

  function initDateLimits() {
    if (!dateInput) return;
    const prague = getPragueNow();
    const min = prague.isoDate;
    const maxDate = new Date(min + 'T12:00:00');
    maxDate.setDate(maxDate.getDate() + 60);
    const max = maxDate.toISOString().slice(0, 10);
    dateInput.min = min;
    dateInput.max = max;
    if (!dateInput.value) dateInput.value = min;
  }

  function renderSlots() {
    if (!dateInput || !slotsWrap) return;
    const val = dateInput.value;
    if (!val) {
      slotsWrap.innerHTML = '';
      if (slotsHint) slotsHint.textContent = t('form.pickDate');
      return;
    }

    const d = new Date(val + 'T12:00:00');
    const jsDay = d.getDay(); // 0=Sun .. 6=Sat
    const idx = jsDay === 0 ? 6 : jsDay - 1; // Mon=0 .. Sun=6
    const h = HOURS[idx];
    const prague = getPragueNow();
    const isToday = val === prague.isoDate;
    const minStart = isToday ? prague.hour * 60 + prague.minute + 45 : h.open;

    const slots = [];
    // Slots every 60 mins starting 30 mins after opening until 90 mins before closing
    for (let m = h.open + 30; m <= h.close - 90; m += 60) {
      if (m >= minStart) {
        const hh = String(Math.floor(m / 60)).padStart(2, '0');
        const mm = String(m % 60).padStart(2, '0');
        slots.push(`${hh}:${mm}`);
      }
    }

    if (!slots.length) {
      slotsWrap.innerHTML = '';
      selectedSlot = '';
      if (timeHidden) timeHidden.value = '';
      if (slotsHint) slotsHint.textContent = t('form.noSlots');
      return;
    }

    if (slotsHint) slotsHint.textContent = t('form.pickDate');
    if (!slots.includes(selectedSlot)) {
      selectedSlot = slots[0];
    }
    if (timeHidden) timeHidden.value = selectedSlot;

    slotsWrap.innerHTML = slots.map(s =>
      `<button type="button" class="slot-btn" data-slot="${s}" aria-pressed="${s === selectedSlot}">${s}</button>`
    ).join('');
  }

  function setError(inputId, errId, msg) {
    const input = inputId ? document.getElementById(inputId) : null;
    const err = document.getElementById(errId);
    if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) err.textContent = msg || '';
    return !msg;
  }

  function formatGuests(n) {
    if (lang === 'en') return n === 1 ? '1 guest' : `${n} guests`;
    if (n === 1) return '1 hosta';
    if (n >= 2 && n <= 4) return `${n} hosty`;
    return `${n} hostů`;
  }

  /* ========================================================================
     8. LIGHTBOX
     ======================================================================== */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-cap');

  function showLightbox(index) {
    if (!lightbox || !lbImg) return;
    lbIndex = (index + GALLERY.length) % GALLERY.length;
    const item = GALLERY[lbIndex];
    lbImg.src = item.src;
    lbImg.alt = t(item.key);
    if (lbCap) lbCap.textContent = t(item.key);
    if (!lightbox.open) lightbox.showModal();
  }

  /* ========================================================================
     9. EVENTS & INIT
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Language switch
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        applyLanguage();
      });
    });

    // Menu category tabs
    const tabs = [...document.querySelectorAll('.tab[role="tab"]')];
    const panel = document.getElementById('menu-panel');
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        activeCat = tab.dataset.cat;
        tabs.forEach(tb => {
          const on = tb === tab;
          tb.setAttribute('aria-selected', String(on));
          tb.tabIndex = on ? 0 : -1;
        });
        if (panel) panel.setAttribute('aria-labelledby', tab.id);
        renderMenu();
      });
      tab.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const next = (idx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          tabs[next].focus();
          tabs[next].click();
        }
      });
    });

    // Dietary filter chips
    document.querySelectorAll('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        activeFilter = chip.dataset.filter;
        document.querySelectorAll('.chip[data-filter]').forEach(c => {
          c.setAttribute('aria-pressed', String(c === chip));
        });
        renderMenu();
      });
    });

    // Mobile burger nav
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('site-nav');
    const closeNav = () => {
      if (!burger || !nav) return;
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', t('a11y.menuOpen'));
      document.body.style.overflow = '';
    };
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', t(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
        document.body.style.overflow = open ? 'hidden' : '';
      });
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
    }

    // Sticky header state
    const header = document.querySelector('.site-header');
    const onScroll = () => {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-visible'));
    }

    // Gallery lightbox
    document.querySelectorAll('.g-btn').forEach(btn => {
      btn.addEventListener('click', () => showLightbox(Number(btn.dataset.index)));
    });
    if (lightbox) {
      lightbox.querySelector('.lb-close')?.addEventListener('click', () => lightbox.close());
      lightbox.querySelector('.lb-prev')?.addEventListener('click', () => showLightbox(lbIndex - 1));
      lightbox.querySelector('.lb-next')?.addEventListener('click', () => showLightbox(lbIndex + 1));
      lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
      lightbox.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
        if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
      });
    }

    // Reservation form interactions
    initDateLimits();
    dateInput?.addEventListener('change', () => {
      selectedSlot = '';
      renderSlots();
      setError('f-date', 'f-date-err', '');
    });

    slotsWrap?.addEventListener('click', e => {
      const btn = e.target.closest('.slot-btn');
      if (!btn) return;
      selectedSlot = btn.dataset.slot;
      if (timeHidden) timeHidden.value = selectedSlot;
      slotsWrap.querySelectorAll('.slot-btn').forEach(b => {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      setError(null, 'f-time-err', '');
    });

    document.querySelectorAll('.stepper-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!guestsInput) return;
        const step = Number(btn.dataset.step);
        const cur = Number(guestsInput.value) || 2;
        guestsInput.value = String(Math.min(8, Math.max(1, cur + step)));
        setError('f-guests', 'f-guests-err', '');
      });
    });

    const successBox = document.getElementById('booking-success');
    const successSummary = document.getElementById('success-summary');
    const againBtn = document.getElementById('booking-again');

    form?.addEventListener('submit', e => {
      e.preventDefault();
      const nameVal = document.getElementById('f-name').value.trim();
      const phoneVal = document.getElementById('f-phone').value.trim();
      const dateVal = dateInput.value;
      const guestsVal = Number(guestsInput.value);

      const okDate = setError('f-date', 'f-date-err', (!dateVal || dateVal < dateInput.min || dateVal > dateInput.max) ? t('err.date') : '');
      const okGuests = setError('f-guests', 'f-guests-err', (Number.isNaN(guestsVal) || guestsVal < 1 || guestsVal > 8) ? t('err.guests') : '');
      const okTime = setError(null, 'f-time-err', !selectedSlot ? t('err.time') : '');
      const okName = setError('f-name', 'f-name-err', nameVal.length < 2 ? t('err.name') : '');
      const okPhone = setError('f-phone', 'f-phone-err', !/^[+\d][\d\s()-]{7,}$/.test(phoneVal) ? t('err.phone') : '');

      if (!(okDate && okGuests && okTime && okName && okPhone)) return;

      // Note: When deployed on Netlify, POST form data via fetch('/', { method: 'POST', body: new URLSearchParams(new FormData(form)) }).
      const formattedDate = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'cs-CZ', {
        day: 'numeric',
        month: 'long'
      }).format(new Date(dateVal + 'T12:00:00'));

      if (successSummary) {
        successSummary.textContent = t('success.summary', {
          name: nameVal,
          guests: formatGuests(guestsVal),
          date: formattedDate,
          time: selectedSlot
        });
      }
      form.hidden = true;
      if (successBox) {
        successBox.hidden = false;
        successBox.focus();
      }
    });

    againBtn?.addEventListener('click', () => {
      if (!form || !successBox) return;
      form.reset();
      initDateLimits();
      selectedSlot = '';
      renderSlots();
      successBox.hidden = true;
      form.hidden = false;
    });

    applyLanguage();
    setInterval(updateOpenStatus, 60000);
  });
})();
