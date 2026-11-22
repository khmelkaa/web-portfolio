(() => {
  'use strict';

  const EN = {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'cta.book': 'Book appointment',
    'cta.services': 'Explore services',
    'cta.pricing': 'View pricing',
    'home.badge': 'Newly opened clinic · Prague 5 – Smíchov',
    'home.title': 'Physiotherapy that solves the root cause, not just the pain',
    'home.lead': 'Individual physiotherapy, sports rehabilitation, and post-operative care in a calm riverside clinic near Anděl. Full 55-minute sessions with no rush.',
    'home.t1': '55 min', 'home.t1d': 'Full 1-on-1 session',
    'home.t2': 'Within 48 h', 'home.t2d': 'First available slot',
    'home.t3': 'CZ / EN', 'home.t3d': 'Care in Czech & English',
    'home.whyEyebrow': 'Why Fyzio Vltava',
    'home.whyTitle': 'Modern evidence-based rehabilitation',
    'home.w1t': 'No assembly-line clinics', 'home.w1d': 'Each therapist works exclusively with you in a quiet, daylight treatment room.',
    'home.w2t': 'Clear home exercise plan', 'home.w2d': 'After every session you receive a practical video & exercise summary tailored to your schedule.',
    'home.w3t': 'Easy reimbursement', 'home.w3d': 'We issue itemized receipts for Czech insurer prevention funds and employer benefit cards.',
    'home.srvEyebrow': 'Core therapies',
    'home.srvTitle': 'How we can help you move freely',
    'home.stepEyebrow': 'How it works',
    'home.stepTitle': 'From first visit to lasting relief',
    'home.s1t': 'Thorough diagnostics', 'home.s1d': 'Movement screening, posture analysis, and medical history review.',
    'home.s2t': 'Targeted therapy', 'home.s2d': 'Manual mobilization, soft-tissue work, and dry needling where appropriate.',
    'home.s3t': 'Active recovery plan', 'home.s3d': 'Simple, realistic exercises to lock in progress between visits.',
    'home.s4t': 'Long-term prevention', 'home.s4d': 'Ergonomics and load management so the pain does not return.',
    'home.insTitle': 'Payment & insurance funds',
    'home.insLead': 'We operate as a private clinic without long insurance referrals. You can pay by card, Apple Pay, or employer benefits (Benefit Plus, Pluxee, Edenred) and claim prevention allowances from VZP, OZP, and ZPMV.',
    'home.ctaTitle': 'Ready to move without pain?',
    'home.ctaLead': 'Send a booking request in under a minute — we confirm most appointments the same day.',
    'srv.eyebrow': 'Services',
    'srv.title': 'Individual physiotherapy & sports rehab',
    'srv.lead': 'Every appointment lasts a full 55 minutes and combines hands-on therapy with active movement coaching.',
    'prc.eyebrow': 'Pricing & Packages',
    'prc.title': 'Transparent prices, no hidden fees',
    'prc.lead': 'Save up to 15% with multi-session rehabilitation packages. Invoices ready for insurer prevention funds.',
    'calc.title': 'Interactive treatment calculator',
    'calc.lead': 'Estimate your total cost including automatic package discounts.',
    'calc.service': 'Therapy type',
    'calc.count': 'Number of sessions',
    'calc.resultLabel': 'Estimated total',
    'team.eyebrow': 'Our Team',
    'team.title': 'Licensed physiotherapists who listen',
    'team.lead': 'All four clinicians hold university degrees in physiotherapy and complete ongoing international postgraduate training.',
    'cnt.eyebrow': 'Contact & Booking',
    'cnt.title': 'Book your appointment',
    'cnt.lead': 'Nádražní 25, Prague 5 – Smíchov (3 minutes from Anděl Metro B). Fill in the form and we will confirm your exact time.',
    'form.service': 'Preferred service *',
    'form.days': 'Preferred days',
    'form.time': 'Preferred time of day',
    'form.name': 'Full name *',
    'form.phone': 'Phone *',
    'form.email': 'Email *',
    'form.note': 'Brief note about your issue (optional)',
    'form.gdpr': 'I agree to the processing of my personal data solely to arrange my physiotherapy appointment (GDPR). *',
    'form.submit': 'Send booking request',
    'form.okTitle': 'Request received — thank you!',
    'form.okText': 'We will get back to you within 2 working hours to confirm your exact slot.',
    'footer.demo': 'Demo projekt – website concept created by Khmelevoi Oleksii'
  };

  const _qLang = new URLSearchParams(window.location.search).get('lang');
  const _navCs = /^cs|^sk/i.test(navigator.language || '');
  let lang = (_qLang === 'en' || _qLang === 'cs') ? _qLang : (localStorage.getItem('fyzio_lang') || (_navCs ? 'cs' : 'en'));

  // Save initial Czech text for every data-i18n element so toggling back works seamlessly
  const CS_CACHE = new Map();

  function applyLang() {
    document.documentElement.lang = lang;
    localStorage.setItem('fyzio_lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!CS_CACHE.has(el)) CS_CACHE.set(el, el.innerHTML);
      if (lang === 'en' && EN[key]) el.innerHTML = EN[key];
      else el.innerHTML = CS_CACHE.get(el);
    });
    updateCalculator();
  }

  function updateCalculator() {
    const srvSel = document.getElementById('calc-service');
    const cntInput = document.getElementById('calc-count');
    const cntOut = document.getElementById('calc-count-val');
    const totalEl = document.getElementById('calc-total');
    const saveEl = document.getElementById('calc-save');
    if (!srvSel || !cntInput || !totalEl) return;

    const unit = Number(srvSel.value);
    const n = Number(cntInput.value);
    if (cntOut) cntOut.textContent = String(n);

    const raw = unit * n;
    let discount = 0;
    if (n >= 10) discount = 0.15;
    else if (n >= 5) discount = 0.10;

    const final = Math.round((raw * (1 - discount)) / 10) * 10;
    const saved = raw - final;

    totalEl.textContent = `${final.toLocaleString('cs-CZ')} Kč`;
    if (saveEl) {
      if (saved > 0) {
        saveEl.textContent = lang === 'en'
          ? `Includes ${Math.round(discount * 100)}% package discount (you save ${saved.toLocaleString('cs-CZ')} Kč)`
          : `Zahrnuje balíčkovou slevu ${Math.round(discount * 100)} % (ušetříte ${saved.toLocaleString('cs-CZ')} Kč)`;
      } else {
        saveEl.textContent = lang === 'en'
          ? 'Tip: 5+ sessions unlock 10% off, 10 sessions 15% off'
          : 'Tip: od 5 návštěv získáte slevu 10 %, při 10 návštěvách 15 %';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => { lang = btn.dataset.lang; applyLang(); });
    });

    // Burger menu
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('site-nav');
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', String(open));
      });
    }

    // Price calculator
    document.getElementById('calc-service')?.addEventListener('change', updateCalculator);
    document.getElementById('calc-count')?.addEventListener('input', updateCalculator);

    // Preselect service from URL query ?sluzba=...
    const params = new URLSearchParams(window.location.search);
    const preSrv = params.get('sluzba');
    const sel = document.getElementById('f-service');
    if (preSrv && sel) {
      for (const opt of sel.options) {
        if (opt.value === preSrv) { sel.value = preSrv; break; }
      }
    }

    // Contact booking form validation
    const form = document.getElementById('contact-form');
    const okBox = document.getElementById('form-success');
    form?.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('f-name').value.trim();
      const phone = document.getElementById('f-phone').value.trim();
      const email = document.getElementById('f-email').value.trim();
      const gdpr = document.getElementById('f-gdpr').checked;

      const eName = name.length < 2 ? (lang === 'en' ? 'Enter your name.' : 'Zadejte prosím jméno.') : '';
      const ePhone = !/^[+\d][\d\s()-]{7,}$/.test(phone) ? (lang === 'en' ? 'Enter a valid phone.' : 'Zadejte platný telefon.') : '';
      const eEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (lang === 'en' ? 'Enter a valid email.' : 'Zadejte platný e-mail.') : '';
      const eGdpr = !gdpr ? (lang === 'en' ? 'Consent is required to contact you.' : 'Pro odeslání je nutný souhlas GDPR.') : '';

      document.getElementById('err-name').textContent = eName;
      document.getElementById('err-phone').textContent = ePhone;
      document.getElementById('err-email').textContent = eEmail;
      document.getElementById('err-gdpr').textContent = eGdpr;

      if (eName || ePhone || eEmail || eGdpr) return;
      form.hidden = true;
      if (okBox) okBox.hidden = false;
    });

    applyLang();
  });
})();
