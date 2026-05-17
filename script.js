/* ============================================================
   Примерочная себя — interactivity
   Только мягкие fade-in и базовая логика. Без эффектов.
   ============================================================ */

(() => {
  /* ── REVEAL ON SCROLL ── */
  const reveals = document.querySelectorAll('.reveal, .reveal-image');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // лёгкая каскадная задержка для соседних элементов
          const siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.children).filter(c =>
                c.classList && (c.classList.contains('reveal') || c.classList.contains('reveal-image'))
              )
            : [];
          const idx = siblings.indexOf(entry.target);
          if (idx >= 0) {
            entry.target.style.transitionDelay = Math.min(idx * 70, 280) + 'ms';
          }
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* ── HEADER SHADOW ON SCROLL ── */
  const header = document.querySelector('[data-header]');
  if (header) {
    let ticking = false;
    const updateHeader = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 16);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
    updateHeader();
  }

  /* ── BURGER + MOBILE MENU ── */
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const closeMenu = () => {
    burger?.classList.remove('is-open');
    menu?.classList.remove('is-open');
    document.body.style.overflow = '';
  };
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      burger.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ── CONTACT MODALS (success + privacy) ── */
  const contactModalOverlays = document.querySelectorAll('[data-contact-modal]');
  const contactModalOpen = [];
  const syncContactModalScroll = () => {
    document.body.style.overflow = contactModalOpen.length ? 'hidden' : '';
  };
  const openContactModal = (overlay) => {
    if (!overlay || contactModalOpen.includes(overlay)) return;
    overlay.hidden = false;
    contactModalOpen.push(overlay);
    syncContactModalScroll();
    overlay.querySelector('.dressing-modal-close')?.focus();
  };
  const closeContactModal = (overlay) => {
    if (!overlay) return;
    overlay.hidden = true;
    const idx = contactModalOpen.indexOf(overlay);
    if (idx >= 0) contactModalOpen.splice(idx, 1);
    syncContactModalScroll();
  };

  if (contactModalOverlays.length) {
    contactModalOverlays.forEach((overlay) => {
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closeContactModal(overlay);
      });
      overlay.querySelectorAll('.dressing-modal-close').forEach((btn) => {
        btn.addEventListener('click', () => closeContactModal(overlay));
      });
    });

    document.querySelectorAll('[data-privacy-open]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        openContactModal(document.getElementById('contact-privacy-modal'));
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !contactModalOpen.length) return;
      closeContactModal(contactModalOpen[contactModalOpen.length - 1]);
    });
  }

  /* ── FORM SUBMIT (#contact → Google Sheets, no-cors) ── */
  const GOOGLE_SHEETS_URL =
    'https://script.google.com/macros/s/AKfycby2CJUnR7A80ebd5QYN7XEhmmk17ifHcVfoEPHsDaGss59V9pjT6UejFS-mcjT7yBzsFQ/exec';

  const form = document.querySelector('[data-form]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value?.trim();
      const contact = form.querySelector('[name="contact"]')?.value?.trim();
      const message = form.querySelector('[name="message"]')?.value?.trim() || '';

      if (!name || !contact) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({ name, contact, message }).toString(),
        });

        form.classList.add('is-sent');
        openContactModal(document.getElementById('contact-success-modal'));
      } catch (err) {
        console.error(
          '[contact form] Не удалось отправить заявку в Google Sheets. Проверьте сеть и развёртывание Apps Script.',
          err
        );
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ───────────── REQUEST LETTERS ───────────── */
  const requestLetterOverlay = document.querySelector('.request-letter-overlay');
  const requestLetterContent = document.getElementById('request-letter-content');
  const requestLetterClose = requestLetterOverlay?.querySelector('.request-letter-close');
  const requestLetterTriggers = document.querySelectorAll('[data-request-letter]');
  let requestLetterLastTrigger = null;

  const closeRequestLetter = () => {
    if (!requestLetterOverlay || !requestLetterContent) return;
    requestLetterOverlay.hidden = true;
    requestLetterContent.innerHTML = '';
    if (requestLetterLastTrigger) {
      requestLetterLastTrigger.focus();
      requestLetterLastTrigger = null;
    }
  };

  const requestLetterTemplates = {
    boundaries: "request-letter-boundaries",
    "roles-masks": "request-letter-roles-masks",
    burnout: "request-letter-burnout",
    relationships: "request-letter-relationships",
    "inner-voice": "request-letter-inner-voice",
    choice: "request-letter-choice",
    "format-first-meeting": "format-letter-first-meeting",
    "format-individual": "format-letter-individual",
    "format-deep-work": "format-letter-deep-work",
  };

  const openRequestLetter = (letterId, trigger) => {
    if (!requestLetterOverlay || !requestLetterContent) return;
    const templateId = requestLetterTemplates[letterId];
    if (!templateId) return;
    const template = document.getElementById(templateId);
    if (!template) return;
    requestLetterContent.innerHTML = '';
    requestLetterContent.appendChild(template.content.cloneNode(true));
    const dialogEl = requestLetterOverlay.querySelector('.request-letter-dialog');
    const titleEl = requestLetterContent.querySelector('.request-letter-title[id]');
    if (dialogEl && titleEl?.id) {
      dialogEl.setAttribute('aria-labelledby', titleEl.id);
    }
    requestLetterOverlay.hidden = false;
    requestLetterLastTrigger = trigger;
    requestLetterClose?.focus();
  };

  if (requestLetterOverlay && requestLetterContent && requestLetterClose) {
    requestLetterTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        openRequestLetter(trigger.dataset.requestLetter, trigger);
      });
      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openRequestLetter(trigger.dataset.requestLetter, trigger);
      });
    });

    const formatLetterCards = [
      'format-first-meeting',
      'format-individual',
      'format-deep-work',
    ];
    const formatCards = document.querySelectorAll('#formats a.format-card');
    formatLetterCards.forEach((letterId, index) => {
      const card = formatCards[index];
      if (!card) return;
      card.addEventListener('click', (event) => {
        event.preventDefault();
        openRequestLetter(letterId, card);
      });
      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openRequestLetter(letterId, card);
      });
    });

    requestLetterClose.addEventListener('click', closeRequestLetter);

    requestLetterOverlay.addEventListener('click', (event) => {
      if (event.target === requestLetterOverlay) {
        closeRequestLetter();
      }
      if (event.target.closest('.request-letter-button')) {
        closeRequestLetter();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !requestLetterOverlay.hidden) {
        closeRequestLetter();
      }
    });
  }
})();
