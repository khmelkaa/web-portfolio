(() => {
  'use strict';

  const I18N = {
    cs: {
      'a11y.skip': 'Přeskočit na obsah',
      'nav.services': 'Služby & Ceník',
      'nav.team': 'Barbeři',
      'nav.booking': 'Online rezervace',
      'nav.gallery': 'Galerie',
      'nav.vouchers': 'Poukazy',
      'nav.contact': 'Kontakt',
      'cta.bookShort': 'Objednat se',
      'cta.book': 'Objednat se online',
      'cta.prices': 'Zobrazit ceník',
      'hero.badge': 'Nově otevřeno · Sokolovská 88, Karlín',
      'hero.title': 'Řemeslný střih.<br>Čisté linie.<br><em>Bez čekání.</em>',
      'hero.lead': 'Pánský barbershop v srdci Karlína zaměřený na precizní střih nůžkami, ostrý skin fade a klasický hot towel rituál. K tomu dobrá káva nebo sklenka rumu v ceně.',
      'stat.rating': 'Hodnocení',
      'stat.time': 'Průměrná délka',
      'stat.metro': 'Metro Křižíkova',
      'status.open': 'Otevřeno teď · do {close}',
      'status.closed': 'Zavřeno · otevíráme {next}',
      'services.eyebrow': '01 / Služby & Ceník',
      'services.title': 'Poctivá práce, férové ceny',
      'services.intro': 'Každá návštěva zahrnuje konzultaci, mytí hlavy, styling prémiovou kosmetikou a nápoj na účet podniku.',
      'services.pick': 'Vybrat & objednat',
      'team.eyebrow': '02 / Tým',
      'team.title': 'Kdo vás bude stříhat',
      'team.intro': 'Tři zkušení barbeři s odlišným rukopisem. Vyberte si svého nebo nechte volbu na nás podle nejbližšího volného termínu.',
      'team.pick': 'Objednat k barberovi',
      'booking.eyebrow': '03 / Online rezervace',
      'booking.title': 'Rezervujte si křeslo za 60 sekund',
      'booking.intro': 'Vyberte službu, barbera a volný čas. Rezervaci uložíme a okamžitě potvrdíme.',
      'step.1': 'Služba',
      'step.2': 'Barber',
      'step.3': 'Datum & čas',
      'step.4': 'Údaje',
      'pane.1': '1. Vyberte službu',
      'pane.2': '2. Vyberte barbera',
      'pane.3': '3. Zvolte den a volný čas',
      'pane.3hint': 'Neděle máme zavřeno. Zobrazeny jsou nejbližší 2 týdny.',
      'pane.4': '4. Vaše kontaktní údaje',
      'btn.back': 'Zpět',
      'btn.continue': 'Pokračovat',
      'btn.confirm': 'Potvrdit rezervaci',
      'form.name': 'Jméno a příjmení *',
      'form.phone': 'Telefon *',
      'form.email': 'E-mail (pro potvrzení) *',
      'form.note': 'Poznámka pro barbera (nepovinné)',
      'err.name': 'Zadejte prosím jméno.',
      'err.phone': 'Zadejte platný telefon.',
      'err.email': 'Zadejte platný e-mail.',
      'confirm.title': 'Termín je váš!',
      'confirm.sub': 'Rezervaci najdete uloženou v panelu „Vaše rezervace“ vpravo. Můžete ji kdykoli zrušit.',
      'confirm.new': 'Vytvořit další rezervaci',
      'saved.title': 'Vaše rezervace',
      'saved.sub': 'Uloženo ve vašem prohlížeči (localStorage).',
      'saved.empty': 'Zatím nemáte žádnou aktivní rezervaci.',
      'saved.cancel': 'Zrušit rezervaci',
      'gallery.eyebrow': '04 / Ukázky práce',
      'gallery.title': 'Preciznost v detailu',
      'gallery.intro': 'Kliknutím na fotografii otevřete detailní náhled.',
      'gal.0': 'Mid Skin Fade & Kontura vousů',
      'gal.1': 'Interiér studia v Karlíně',
      'gal.2': 'Classic Scissor Cut & Hot Towel',
      'vouchers.eyebrow': '05 / Dárkové poukazy',
      'vouchers.title': 'Darujte hodinu klidu a perfektní střih',
      'vouchers.intro': 'Tištěný poukaz v černé obálce s pečetí k vyzvednutí na recepci, nebo okamžitě v PDF na e-mail. Platnost 6 měsíců.',
      'voucher.1': 'Pokryje kompletní střih včetně mytí, stylingu a drinku, nebo úpravu vousů s kosmetikou.',
      'voucher.2': 'Nejoblíbenější volba: kompletní balíček Bart & Co. (střih + hot towel vousy + prémiový olej).',
      'voucher.3': 'Dvě kompletní návštěvy nebo kombinace střihu a setu kvalitní stylingové kosmetiky.',
      'voucher.cta': 'Poptat poukaz',
      'reviews.eyebrow': '06 / Recenze',
      'reviews.title': 'Klienti se vrací',
      'rev.1': '„Matěj mi udělal nejlepší skin fade, co jsem kdy v Praze měl. Skvělá atmosféra bez zbytečného hluku, online rezervace funguje bezchybně.“',
      'rev.2': '„Konečně barbershop v Karlíně, kde umí pracovat i s delšími vlasy nůžkami a neshodí všechno strojkem. Hot towel na závěr je top.“',
      'rev.3': '„Super čisté studio, přesně na čas a dobrá káva. Chodím sem pravidelně před důležitými schůzkami.“',
      'faq.eyebrow': '07 / Časté dotazy',
      'faq.title': 'Dobré vědět',
      'faq.q1': 'Můžu přijít i bez objednání?',
      'faq.a1': 'Doporučujeme online rezervaci, abyste nečekali. Pokud máme zrovna volné křeslo, rádi vás vezmeme i z ulice.',
      'faq.q2': 'Berete platební karty a Apple Pay?',
      'faq.a2': 'Ano, přijímáme všechny karty, Apple Pay, Google Pay i hotovost.',
      'faq.q3': 'Co když potřebuji termín zrušit?',
      'faq.a3': 'Stačí zrušit rezervaci alespoň 4 hodiny předem zde na webu nebo krátkou SMS na naše číslo.',
      'faq.q4': 'Jak se k vám dostanu MHD a kde zaparkuji?',
      'faq.a4': 'Jsme 2 minuty pěšky od metra B Křižíkova (i tramvají 3 a 8). V přilehlých ulicích jsou fialové parkovací zóny.',
      'contact.eyebrow': '08 / Kontakt & Otevírací doba',
      'contact.addr': 'Adresa:',
      'contact.phone': 'Telefon:',
      'hours.monfri': 'Pondělí – Pátek',
      'hours.sat': 'Sobota',
      'hours.sun': 'Neděle',
      'hours.closed': 'Zavřeno',
      'contact.dir': 'Otevřít trasu v Google Maps',
      'footer.demo': 'Demo projekt – koncept webu vytvořil Khmelevoi Oleksii',
      'anyBarber': 'Kdokoliv (nejbližší termín)',
      'anyBarberDesc': 'Vybereme prvního volného barbera pro váš čas.',
      'slotsFor': 'Volné časy pro {date}:'
    },
    en: {
      'a11y.skip': 'Skip to content',
      'nav.services': 'Services & Pricing',
      'nav.team': 'Barbers',
      'nav.booking': 'Book Online',
      'nav.gallery': 'Gallery',
      'nav.vouchers': 'Gift Vouchers',
      'nav.contact': 'Contact',
      'cta.bookShort': 'Book now',
      'cta.book': 'Book online',
      'cta.prices': 'View price list',
      'hero.badge': 'Newly opened · Sokolovská 88, Karlín',
      'hero.title': 'Sharp Cuts.<br>Clean Lines.<br><em>Zero Wait.</em>',
      'hero.lead': 'A modern men’s barbershop in the heart of Karlín focused on scissor craft, crisp skin fades, and classic hot towel rituals — with specialty coffee or rum on the house.',
      'stat.rating': 'Rating',
      'stat.time': 'Avg. session',
      'stat.metro': 'Křižíkova Metro',
      'status.open': 'Open now · until {close}',
      'status.closed': 'Closed · opens {next}',
      'services.eyebrow': '01 / Services & Pricing',
      'services.title': 'Honest Craft, Clear Prices',
      'services.intro': 'Every appointment includes consultation, wash, premium styling products, and a complimentary drink.',
      'services.pick': 'Select & book',
      'team.eyebrow': '02 / Team',
      'team.title': 'Meet Your Barbers',
      'team.intro': 'Three seasoned barbers with distinct styles. Pick your favourite or choose anyone for the earliest slot.',
      'team.pick': 'Book with barber',
      'booking.eyebrow': '03 / Online Booking',
      'booking.title': 'Reserve Your Chair in 60 Seconds',
      'booking.intro': 'Choose service, barber, and an open slot. Instant confirmation saved directly in your browser.',
      'step.1': 'Service',
      'step.2': 'Barber',
      'step.3': 'Date & Time',
      'step.4': 'Details',
      'pane.1': '1. Choose a service',
      'pane.2': '2. Choose your barber',
      'pane.3': '3. Pick a day & open time',
      'pane.3hint': 'Closed on Sundays. Showing the next 14 days.',
      'pane.4': '4. Your contact details',
      'btn.back': 'Back',
      'btn.continue': 'Continue',
      'btn.confirm': 'Confirm booking',
      'form.name': 'Full name *',
      'form.phone': 'Phone *',
      'form.email': 'Email (for confirmation) *',
      'form.note': 'Note for your barber (optional)',
      'err.name': 'Please enter your name.',
      'err.phone': 'Please enter a valid phone number.',
      'err.email': 'Please enter a valid email.',
      'confirm.title': 'You’re booked!',
      'confirm.sub': 'Your appointment is saved under “Your bookings” on the right and can be cancelled anytime.',
      'confirm.new': 'Book another visit',
      'saved.title': 'Your bookings',
      'saved.sub': 'Saved in your browser (localStorage).',
      'saved.empty': 'You have no active bookings yet.',
      'saved.cancel': 'Cancel booking',
      'gallery.eyebrow': '04 / Work',
      'gallery.title': 'Precision in Every Detail',
      'gallery.intro': 'Click any photo to view full size.',
      'gal.0': 'Mid Skin Fade & Beard Line-up',
      'gal.1': 'Karlín Studio Interior',
      'gal.2': 'Classic Scissor Cut & Hot Towel',
      'vouchers.eyebrow': '05 / Gift Vouchers',
      'vouchers.title': 'Gift an Hour of Craft & Calm',
      'vouchers.intro': 'Printed in a sealed matte black envelope at reception or delivered instantly via PDF email. Valid 6 months.',
      'voucher.1': 'Covers a full signature haircut with wash, styling & drink, or a luxury beard ritual.',
      'voucher.2': 'Most popular: full Bart & Co. Combo (haircut + hot towel beard trim + beard oil).',
      'voucher.3': 'Two full grooming sessions or a haircut paired with our premium styling set.',
      'voucher.cta': 'Request voucher',
      'reviews.eyebrow': '06 / Reviews',
      'reviews.title': 'Built on Regulars',
      'rev.1': '“Matěj gave me the cleanest skin fade I’ve ever had in Prague. Great calm vibe and the online booking is effortless.”',
      'rev.2': '“Finally a Karlín barbershop that excels with scissors on longer hair instead of buzzing everything. Hot towel finish is unreal.”',
      'rev.3': '“Spotless studio, right on time, and great espresso. My go-to before big meetings.”',
      'faq.eyebrow': '07 / FAQ',
      'faq.title': 'Good to Know',
      'faq.q1': 'Do you accept walk-ins?',
      'faq.a1': 'We recommend booking online to skip the wait, though walk-ins are welcome whenever a chair is open.',
      'faq.q2': 'Do you accept cards and Apple Pay?',
      'faq.a2': 'Yes — all debit/credit cards, Apple Pay, Google Pay, and cash.',
      'faq.q3': 'What if I need to cancel?',
      'faq.a3': 'Simply cancel at least 4 hours ahead right here on the site or drop us a quick text.',
      'faq.q4': 'How do I get there & where to park?',
      'faq.a4': '2 minutes on foot from Křižíkova Metro (Line B) and trams 3 & 8. Purple paid parking zones nearby.',
      'contact.eyebrow': '08 / Contact & Hours',
      'contact.addr': 'Address:',
      'contact.phone': 'Phone:',
      'hours.monfri': 'Monday – Friday',
      'hours.sat': 'Saturday',
      'hours.sun': 'Sunday',
      'hours.closed': 'Closed',
      'contact.dir': 'Directions in Google Maps',
      'footer.demo': 'Demo project – website concept created by Khmelevoi Oleksii',
      'anyBarber': 'Anyone (earliest slot)',
      'anyBarberDesc': 'We’ll pair you with the first available barber.',
      'slotsFor': 'Available times for {date}:'
    }
  };

  const SERVICES = [
    { id: 'classic', price: 790, dur: 45, cs: { n: 'Klasický střih', d: 'Střih nůžkami i strojkem, zarovnání kontur, mytí a finální styling.' }, en: { n: 'Classic Haircut', d: 'Tailored scissor & clipper cut, crisp neck cleanup, wash, and styling.' } },
    { id: 'fade', price: 850, dur: 45, cs: { n: 'Skin Fade', d: 'Precizní přechod do ztracena od nuly s břitvou, mytí a styling.' }, en: { n: 'Skin Fade', d: 'Seamless razor-zero fade with clean blend, wash, and matte finish.' } },
    { id: 'beard', price: 490, dur: 30, cs: { n: 'Úprava vousů & Hot Towel', d: 'Tvarování vousů, napaření horkým ručníkem, doholení břitvou a olej.' }, en: { n: 'Beard Trim & Hot Towel', d: 'Sculpting, steam towel prep, straight-razor lines, and conditioning oil.' } },
    { id: 'combo', price: 1190, dur: 75, cs: { n: 'Bart & Co. Komplet', d: 'Střih vlasů + kompletní rituál úpravy vousů s horkým ručníkem.' }, en: { n: 'Bart & Co. Full Combo', d: 'Signature haircut paired with full hot towel beard ritual and drink.' } },
    { id: 'long', price: 920, dur: 60, cs: { n: 'Střih dlouhých vlasů', d: 'Práce čistě nůžkami, textura, mytí s masáží hlavy a foukaná.' }, en: { n: 'Long Hair Scissor Cut', d: 'Pure scissor craft, natural layering, scalp wash, and blow-dry finish.' } },
    { id: 'vip', price: 1590, dur: 90, cs: { n: 'Gentleman VIP Rituál', d: 'Střih, vousy, černá slupovací maska, depilace uší/nosu a prémiový rum.' }, en: { n: 'Gentleman VIP Ritual', d: 'Cut, hot towel beard, charcoal mask, detailing, and aged rum.' } }
  ];

  const BARBERS = [
    { id: 'matej', initials: 'MK', name: 'Matěj Král', cs: { role: 'Master Barber · 8 let praxe', bio: 'Specialista na ostré skin fady a moderní crop střihy. Zakladatel Bart & Co.', tags: ['Skin Fade', 'Crop', 'Břitva'] }, en: { role: 'Master Barber · 8 yrs exp', bio: 'Specialist in razor-sharp skin fades and modern crops. Founder of Bart & Co.', tags: ['Skin Fade', 'Crop', 'Straight Razor'] } },
    { id: 'jakub', initials: 'JD', name: 'Jakub Dvořák', cs: { role: 'Senior Barber · 6 let praxe', bio: 'Mistr práce s nůžkami pro střední i delší pánské vlasy a klasické business střihy.', tags: ['Nůžky', 'Dlouhé vlasy', 'Classic'] }, en: { role: 'Senior Barber · 6 yrs exp', bio: 'Master of scissor work for medium-to-long hair and timeless executive cuts.', tags: ['Scissor Craft', 'Long Hair', 'Classic'] } },
    { id: 'tomas', initials: 'TH', name: 'Tomáš Horák', cs: { role: 'Beard Specialist · 5 let praxe', bio: 'Precizní tvarování plnovousu, klasické holení břitvou a hot towel péče.', tags: ['Vousy', 'Hot Towel', 'Fade'] }, en: { role: 'Beard Specialist · 5 yrs exp', bio: 'Precision full-beard architecture, straight-razor shaves, and hot towel care.', tags: ['Beards', 'Hot Towel', 'Fade'] } }
  ];

  const STORAGE_KEY = 'bart_co_bookings_v1';
  const _qLang = new URLSearchParams(window.location.search).get('lang');
  const _navCs = /^cs|^sk/i.test(navigator.language || '');
  let lang = (_qLang === 'en' || _qLang === 'cs') ? _qLang : (localStorage.getItem('bart_lang') || (_navCs ? 'cs' : 'en'));
  let step = 1;
  const state = { serviceId: null, barberId: null, dateIso: null, time: null };

  const t = (key, vars = {}) => {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.cs[key] || key;
    for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
    return s;
  };

  function hashStr(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
  }

  function updateLiveStatus() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Prague', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(now);
    const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
    const mins = Number(map.hour === '24' ? 0 : map.hour) * 60 + Number(map.minute);
    const wd = map.weekday;
    let isOpen = false;
    let closeStr = '20:00';
    if (wd === 'Sat') {
      isOpen = mins >= 9 * 60 && mins < 17 * 60;
      closeStr = '17:00';
    } else if (wd !== 'Sun') {
      isOpen = mins >= 9 * 60 && mins < 20 * 60;
      closeStr = '20:00';
    }
    const pill = document.getElementById('live-status');
    const txt = document.getElementById('live-status-text');
    if (pill) pill.dataset.open = String(isOpen);
    if (txt) {
      txt.textContent = isOpen
        ? t('status.open', { close: closeStr })
        : t('status.closed', { next: lang === 'en' ? 'Mon–Sat 9:00' : 'Po–So od 9:00' });
    }
  }

  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (grid) {
      grid.innerHTML = SERVICES.map(s => `
        <article class="srv-card">
          <div class="srv-top">
            <h3>${s[lang].n}</h3>
            <span class="srv-price">${s.price.toLocaleString('cs-CZ')} Kč</span>
          </div>
          <span class="srv-dur">${s.dur} min</span>
          <p class="srv-desc">${s[lang].d}</p>
          <button type="button" class="btn btn-outline-light btn-sm" data-quick-srv="${s.id}">${t('services.pick')}</button>
        </article>
      `).join('');
    }
    const wSrv = document.getElementById('w-services');
    if (wSrv) {
      wSrv.innerHTML = SERVICES.map(s => `
        <button type="button" class="opt-btn" data-srv="${s.id}" aria-pressed="${state.serviceId === s.id}">
          <span class="opt-head"><span>${s[lang].n}</span><span class="opt-price">${s.price} Kč</span></span>
          <span class="opt-meta">${s.dur} min · ${s[lang].d}</span>
        </button>
      `).join('');
    }
  }

  function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (grid) {
      grid.innerHTML = BARBERS.map(b => `
        <article class="barber-card">
          <div class="barber-head">
            <div class="barber-avatar" aria-hidden="true">${b.initials}</div>
            <div>
              <h3>${b.name}</h3>
              <p class="barber-role">${b[lang].role}</p>
            </div>
          </div>
          <p class="barber-bio">${b[lang].bio}</p>
          <div class="barber-tags">${b[lang].tags.map(tg => `<span>${tg}</span>`).join('')}</div>
          <button type="button" class="btn btn-outline-light btn-sm" data-quick-barber="${b.id}">${t('team.pick')}</button>
        </article>
      `).join('');
    }
    const wBar = document.getElementById('w-barbers');
    if (wBar) {
      const anyCard = `
        <button type="button" class="opt-btn" data-barber="any" aria-pressed="${state.barberId === 'any'}">
          <span class="opt-head"><span>${t('anyBarber')}</span><span class="opt-price">★</span></span>
          <span class="opt-meta">${t('anyBarberDesc')}</span>
        </button>
      `;
      wBar.innerHTML = anyCard + BARBERS.map(b => `
        <button type="button" class="opt-btn" data-barber="${b.id}" aria-pressed="${state.barberId === b.id}">
          <span class="opt-head"><span>${b.name}</span></span>
          <span class="opt-meta">${b[lang].role}</span>
        </button>
      `).join('');
    }
  }

  function renderDays() {
    const wrap = document.getElementById('w-days');
    if (!wrap) return;
    const locale = lang === 'en' ? 'en-GB' : 'cs-CZ';
    const today = new Date();
    const days = [];
    for (let i = 0; i < 14; i++) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const isSun = d.getDay() === 0;
      const wd = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d);
      const dm = `${d.getDate()}.${d.getMonth() + 1}.`;
      days.push({ iso, isSun, wd, dm, isSat: d.getDay() === 6 });
    }
    if (!state.dateIso) {
      const firstOpen = days.find(x => !x.isSun);
      if (firstOpen) state.dateIso = firstOpen.iso;
    }
    wrap.innerHTML = days.map(d => `
      <button type="button" class="day-btn" data-date="${d.iso}" ${d.isSun ? 'disabled' : ''} aria-selected="${state.dateIso === d.iso}">
        <small>${d.wd}</small>
        <strong>${d.dm}</strong>
      </button>
    `).join('');
    renderSlots();
  }

  function renderSlots() {
    const grid = document.getElementById('w-slots');
    const label = document.getElementById('w-slot-label');
    const nextBtn = document.getElementById('w-to-step4');
    if (!grid || !state.dateIso) return;

    const d = new Date(state.dateIso + 'T12:00:00');
    const isSat = d.getDay() === 6;
    const endHour = isSat ? 16 : 19;
    const fmtDate = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'cs-CZ', {
      weekday: 'long', day: 'numeric', month: 'long'
    }).format(d);
    if (label) label.textContent = t('slotsFor', { date: fmtDate });

    const saved = loadBookings();
    const slots = [];
    for (let h = 9; h <= endHour; h++) {
      for (const m of [0, 30]) {
        if (h === endHour && m > 0) continue;
        const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        const seed = hashStr(`${state.dateIso}-${state.barberId || 'any'}-${time}`);
        const takenPseudo = (seed % 5 === 0);
        const takenByUser = saved.some(b => b.dateIso === state.dateIso && b.time === time);
        slots.push({ time, disabled: takenPseudo || takenByUser });
      }
    }

    if (state.time && slots.find(s => s.time === state.time && s.disabled)) {
      state.time = null;
    }

    grid.innerHTML = slots.map(s => `
      <button type="button" class="slot-btn" data-time="${s.time}" ${s.disabled ? 'disabled' : ''} aria-pressed="${state.time === s.time}">${s.time}</button>
    `).join('');

    if (nextBtn) nextBtn.disabled = !state.time;
  }

  function goToStep(n) {
    step = n;
    document.querySelectorAll('.wizard-pane').forEach(p => {
      p.hidden = Number(p.dataset.pane) !== n;
    });
    document.querySelectorAll('.w-step').forEach(el => {
      const s = Number(el.dataset.step);
      el.classList.toggle('is-active', s === n);
      el.classList.toggle('is-done', s < n);
    });
    if (n === 3) renderDays();
    if (n === 4) updateSummaryBar();
  }

  function getServiceObj() { return SERVICES.find(s => s.id === state.serviceId) || SERVICES[0]; }
  function getBarberLabel() {
    if (!state.barberId || state.barberId === 'any') return t('anyBarber');
    const b = BARBERS.find(x => x.id === state.barberId);
    return b ? b.name : t('anyBarber');
  }

  function updateSummaryBar() {
    const bar = document.getElementById('w-summary-bar');
    const srv = getServiceObj();
    if (bar) {
      bar.innerHTML = `<strong>${srv[lang].n}</strong> (${srv.price} Kč · ${srv.dur} min) · ${getBarberLabel()} · <strong>${state.dateIso} ${state.time || ''}</strong>`;
    }
    const hs = document.getElementById('hid-service');
    const hb = document.getElementById('hid-barber');
    const hd = document.getElementById('hid-datetime');
    if (hs) hs.value = srv[lang].n;
    if (hb) hb.value = getBarberLabel();
    if (hd) hd.value = `${state.dateIso} ${state.time}`;
  }

  function loadBookings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
  }
  function saveBookings(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
  function renderSavedBookings() {
    const listEl = document.getElementById('saved-list');
    if (!listEl) return;
    const list = loadBookings();
    if (!list.length) {
      listEl.innerHTML = `<li class="saved-empty">${t('saved.empty')}</li>`;
      return;
    }
    listEl.innerHTML = list.map(b => {
      const srv = SERVICES.find(s => s.id === b.serviceId);
      const srvName = srv ? srv[lang].n : b.serviceName;
      return `
        <li class="saved-item">
          <strong>${srvName} · ${b.price} Kč</strong>
          <span>${b.dateIso} · ${b.time} · ${b.barberName}</span>
          <span>${b.clientName} (${b.phone})</span>
          <button type="button" class="saved-cancel" data-cancel-id="${b.id}">${t('saved.cancel')}</button>
        </li>
      `;
    }).join('');
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    localStorage.setItem('bart_lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t(el.dataset.i18n);
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    });
    updateLiveStatus();
    renderServices();
    renderTeam();
    if (step === 3) renderDays();
    if (step === 4) updateSummaryBar();
    renderSavedBookings();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => { lang = btn.dataset.lang; applyLanguage(); });
    });

    // Burger nav
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('site-nav');
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
      });
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }));
    }

    // Delegated clicks for quick-book & wizard
    document.body.addEventListener('click', e => {
      const qSrv = e.target.closest('[data-quick-srv]');
      if (qSrv) {
        state.serviceId = qSrv.dataset.quickSrv;
        goToStep(2);
        renderServices();
        document.getElementById('rezervace')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const qBar = e.target.closest('[data-quick-barber]');
      if (qBar) {
        state.barberId = qBar.dataset.quickBarber;
        if (!state.serviceId) state.serviceId = SERVICES[0].id;
        goToStep(3);
        renderTeam();
        document.getElementById('rezervace')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const srvBtn = e.target.closest('[data-srv]');
      if (srvBtn) {
        state.serviceId = srvBtn.dataset.srv;
        renderServices();
        goToStep(2);
        return;
      }
      const barBtn = e.target.closest('[data-barber]');
      if (barBtn) {
        state.barberId = barBtn.dataset.barber;
        renderTeam();
        goToStep(3);
        return;
      }
      const dayBtn = e.target.closest('.day-btn');
      if (dayBtn && !dayBtn.disabled) {
        state.dateIso = dayBtn.dataset.date;
        state.time = null;
        renderDays();
        return;
      }
      const slotBtn = e.target.closest('.slot-btn');
      if (slotBtn && !slotBtn.disabled) {
        state.time = slotBtn.dataset.time;
        renderSlots();
        return;
      }
      const backBtn = e.target.closest('[data-back]');
      if (backBtn) {
        goToStep(Number(backBtn.dataset.back));
        return;
      }
      const cancelBtn = e.target.closest('[data-cancel-id]');
      if (cancelBtn) {
        const next = loadBookings().filter(b => b.id !== cancelBtn.dataset.cancelId);
        saveBookings(next);
        renderSavedBookings();
        if (step === 3) renderSlots();
        return;
      }
      const vBtn = e.target.closest('.voucher-btn');
      if (vBtn) {
        const note = document.getElementById('b-note');
        if (note) note.value = `${lang === 'en' ? 'Gift voucher inquiry' : 'Poptávka dárkového poukazu'}: ${vBtn.dataset.voucher}`;
        if (!state.serviceId) state.serviceId = 'classic';
        if (!state.barberId) state.barberId = 'any';
        renderDays();
        goToStep(3);
      }
    });

    document.getElementById('w-to-step4')?.addEventListener('click', () => {
      if (state.time) goToStep(4);
    });

    document.getElementById('booking-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('b-name').value.trim();
      const phone = document.getElementById('b-phone').value.trim();
      const email = document.getElementById('b-email').value.trim();

      document.getElementById('err-name').textContent = name.length < 2 ? t('err.name') : '';
      document.getElementById('err-phone').textContent = !/^[+\d][\d\s()-]{7,}$/.test(phone) ? t('err.phone') : '';
      document.getElementById('err-email').textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? t('err.email') : '';
      if (name.length < 2 || !/^[+\d][\d\s()-]{7,}$/.test(phone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

      const srv = getServiceObj();
      const record = {
        id: 'bk-' + Date.now(),
        serviceId: srv.id,
        serviceName: srv[lang].n,
        price: srv.price,
        barberName: getBarberLabel(),
        dateIso: state.dateIso,
        time: state.time,
        clientName: name,
        phone
      };
      const all = loadBookings();
      all.unshift(record);
      saveBookings(all);
      renderSavedBookings();

      const det = document.getElementById('confirm-details');
      if (det) det.textContent = `${record.serviceName} (${record.price} Kč) · ${record.barberName} · ${record.dateIso} ${record.time}`;
      goToStep(5);
    });

    document.getElementById('w-reset')?.addEventListener('click', () => {
      state.serviceId = null;
      state.barberId = null;
      state.time = null;
      document.getElementById('booking-form')?.reset();
      goToStep(1);
    });

    // Gallery lightbox
    const galSrcs = [
      { src: 'assets/img/skin-fade.jpg', key: 'gal.0' },
      { src: 'assets/img/hero.jpg', key: 'gal.1' },
      { src: 'assets/img/og-image.jpg', key: 'gal.2' }
    ];
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbCap = document.getElementById('lb-cap');
    document.querySelectorAll('.gal-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = galSrcs[Number(btn.dataset.gal)];
        if (!item || !lb) return;
        lbImg.src = item.src;
        lbImg.alt = t(item.key);
        lbCap.textContent = t(item.key);
        lb.showModal();
      });
    });
    document.getElementById('lb-close')?.addEventListener('click', () => lb?.close());
    lb?.addEventListener('click', e => { if (e.target === lb) lb.close(); });

    applyLanguage();
  });
})();
