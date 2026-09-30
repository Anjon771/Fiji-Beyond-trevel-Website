(function () {
  'use strict';

  // =========================================================================
  // DATA CATALOGS
  // =========================================================================
  var REGIONS_DATA = [
    {
      name: 'Outer Islands (Kadavu & Lau)',
      shortName: 'Outer Islands',
      coords: "18°59'S 178°10'E",
      transfer: '55m Seaplane',
      season: 'May – October',
      rate7: 2450,
      bookingValue: 'Outer Islands Kadavu & Lau|2450',
      notes: 'Ideal for travelers seeking zero light pollution, Great Astrolabe Reef diving, and private beachfront bures accessible only by amphibious floatplane.'
    },
    {
      name: 'Pacific Harbour & Beqa Lagoon',
      shortName: 'Pacific Harbour & Beqa',
      coords: "18°19'S 178°04'E",
      transfer: '35m Private Launch',
      season: 'Year-Round',
      rate7: 2150,
      bookingValue: 'Pacific Harbour & Beqa Lagoon|2150',
      notes: 'Renowned for soft-coral cathedral pinnacles, pelagic shark conservation dives, and navigable inland rainforest gorges.'
    },
    {
      name: 'Savusavu & Vanua Levu Bay',
      shortName: 'Savusavu & Surrounds',
      coords: "16°46'S 179°20'E",
      transfer: '50m Domestic Flight',
      season: 'April – November',
      rate7: 2290,
      bookingValue: 'Savusavu Thermal & Pearl Bay|2290',
      notes: 'Sheltered volcanic caldera harbor famous for rare black-lip pearl farms, geothermal coastal springs, and organic cacao estates.'
    },
    {
      name: 'Suncoast & Bligh Water',
      shortName: 'Suncoast',
      coords: "17°22'S 178°09'E",
      transfer: '2h Private Coastal Drive',
      season: 'May – November',
      rate7: 1980,
      bookingValue: 'Suncoast & Bligh Water|1980',
      notes: 'Steady trade winds and nutrient-rich currents make Bligh Water one of the South Pacific capitals for drift diving and kiteboarding.'
    },
    {
      name: 'Taveuni — The Garden Island',
      shortName: 'Taveuni',
      coords: "16°49'S 179°58'W",
      transfer: '75m Island Hopper',
      season: 'April – November',
      rate7: 2390,
      bookingValue: 'Taveuni Rainbow Reef & Falls|2390',
      notes: 'Home to Bouma National Heritage Park triple waterfalls, Lake Tagimoucia cloud forests, and the Somosomo Strait Great White Wall.'
    },
    {
      name: 'Yasawa Leeward Archipelago',
      shortName: 'Yasawa Islands',
      coords: "16°55'S 177°23'E",
      transfer: '30m Seaplane',
      season: 'May – October',
      rate7: 2680,
      bookingValue: 'Yasawa Islands Private Lagoon|2680',
      notes: 'Twenty sun-drenched volcanic islands with dramatic basalt peaks, Sawa-i-Lau flooded limestone caverns, and seasonal manta ray channels.'
    },
    {
      name: 'Nadi & Mamanuca Atolls',
      shortName: 'Nadi & Denarau',
      coords: "17°46'S 177°22'E",
      transfer: '25m Private Catamaran',
      season: 'Year-Round',
      rate7: 1850,
      bookingValue: 'Nadi & Mamanuca Private Charter|1850',
      notes: 'Effortless international arrival hub featuring the Sabeto highland orchid sanctuaries, thermal mud baths, and outer reef surf breaks.'
    }
  ];

  var PACKAGES_DATA = [
    {
      id: 'pkg-yasawa',
      category: 'fiji',
      regionLabel: 'Fiji Archipelago',
      transferLabel: 'Seaplane Included',
      title: 'Yasawa Islands Private Lagoon',
      image: 'images/recipe_slides/recipe6.jpg',
      basePrice7: 2680,
      bookingVal: 'Yasawa Islands Private Lagoon|2680',
      description: 'Private beachfront bure stay with guided Sawa-i-Lau limestone cave swims and Drawaqa manta channel drift snorkeling.'
    },
    {
      id: 'pkg-taveuni',
      category: 'fiji',
      regionLabel: 'Fiji Archipelago',
      transferLabel: 'Marine Biologist Led',
      title: 'Taveuni Rainbow Reef & Falls',
      image: 'images/recipe_slides/recipe5.jpg',
      basePrice7: 2390,
      bookingVal: 'Taveuni Rainbow Reef & Falls|2390',
      description: 'Six boat dives on the Great White Wall paired with guided treks through Bouma National Heritage Park triple cascades.'
    },
    {
      id: 'pkg-kadavu',
      category: 'fiji',
      regionLabel: 'Fiji Archipelago',
      transferLabel: 'Astrolabe Reef',
      title: 'Outer Islands Kadavu Sanctuary',
      image: 'images/recipe_slides/recipe1.jpg',
      basePrice7: 2450,
      bookingVal: 'Outer Islands Kadavu & Lau|2450',
      description: 'Off-grid eco-lodge retreat facing the Great Astrolabe Barrier Reef with sea kayaking, traditional Lovo feasts, and reef charters.'
    },
    {
      id: 'pkg-italy',
      category: 'europe',
      regionLabel: 'Mediterranean',
      transferLabel: 'Private Historian',
      title: 'Rome & Amalfi Architectural Odyssey',
      image: 'assets/images/italy.png',
      basePrice7: 1890,
      bookingVal: 'Rome, Italy Architectural Odyssey|1890',
      description: 'After-hours Vatican courtyard access, Trastevere culinary walks, and private coastal motor-yacht charter along Positano.'
    },
    {
      id: 'pkg-france',
      category: 'europe',
      regionLabel: 'Western Europe',
      transferLabel: 'Rail & Chauffeur',
      title: 'French Riviera & Provence Estates',
      image: 'assets/images/france.png',
      basePrice7: 2190,
      bookingVal: 'French Riviera & Provence|2190',
      description: 'Parisian architectural salons followed by high-speed rail to Luberon limestone villages and Cap Ferrat coastal trails.'
    },
    {
      id: 'pkg-uk',
      category: 'europe',
      regionLabel: 'British Isles',
      transferLabel: 'Private Estate Stay',
      title: 'Scottish Highlands & London Heritage',
      image: 'assets/images/uk.png',
      basePrice7: 1940,
      bookingVal: 'United Kingdom Highlands & London|1940',
      description: 'Westminster private museum briefings combined with sleeper-train passage to Isle of Skye sea lochs and single-malt distilleries.'
    },
    {
      id: 'pkg-bangkok',
      category: 'global',
      regionLabel: 'Southeast Asia',
      transferLabel: 'River Barge Charter',
      title: 'Bangkok & Chao Phraya Sanctuary',
      image: 'images/slider/bangcok.jpg',
      basePrice7: 1480,
      bookingVal: 'Bangkok, Thailand Sanctuary|1480',
      description: 'Boutique riverside residence, private longtail canal exploration at dawn, and chef-led regional Thai tasting menus.'
    },
    {
      id: 'pkg-cairo',
      category: 'global',
      regionLabel: 'North Africa',
      transferLabel: 'Egyptologist Guided',
      title: 'Cairo & Private Nile Dahabiya',
      image: 'images/slider/cario.jpg',
      basePrice7: 1620,
      bookingVal: 'Cairo, Egypt Nile Heritage|1620',
      description: 'Giza plateau private archaeological access and wind-powered Dahabiya sailing between Esna, Edfu, and Aswan.'
    },
    {
      id: 'pkg-india',
      category: 'global',
      regionLabel: 'South Asia',
      transferLabel: 'Palace & Backwaters',
      title: 'Rajasthan & Kerala Heritage Odyssey',
      image: 'assets/images/india.png',
      basePrice7: 1690,
      bookingVal: 'Rajasthan & Kerala Heritage, India|1690',
      description: 'Restored Rajput stepwells and courtyards in Udaipur paired with private teak kettuvallam houseboat cruising in Malabar.'
    }
  ];

  var GALLERY_ITEMS = [
    {
      title: 'Great White Wall Drift Dive',
      meta: 'Somosomo Strait · 18m–32m Depth · Taveuni',
      image: 'images/fiji-surprise/diving1.jpg',
      bookingVal: 'Taveuni Rainbow Reef & Falls|2390',
      notes: 'Triggered by tidal currents flowing through the Somosomo Strait, luminescent lavender and white Dendronephthya soft corals bloom across a vertical drop-off.'
    },
    {
      title: 'Pelagic Reef Sanctuary',
      meta: 'Beqa Lagoon · Marine Reserve · Southern Viti Levu',
      image: 'images/fiji-surprise/diving2.jpg',
      bookingVal: 'Pacific Harbour & Beqa Lagoon|2150',
      notes: 'Accompanied by Fijian marine wardens, divers observe up to eight species of reef and pelagic sharks in a community-protected coral arena.'
    },
    {
      title: 'Drawaqa Manta Ray Passage',
      meta: 'Yasawa Chain · May to October · Plankton Current',
      image: 'images/fiji-surprise/diving3.jpg',
      bookingVal: 'Yasawa Islands Private Lagoon|2680',
      notes: 'On incoming tides, reef manta rays with wingspans exceeding 4 meters glide through the shallow channel between Naviti and Drawaqa islands.'
    },
    {
      title: 'Volcanic Mineral Thermal Pools',
      meta: 'Sabeto Valley · Geothermal Springs · Nadi Highlands',
      image: 'images/fiji-surprise/health1.jpg',
      bookingVal: 'Nadi & Mamanuca Private Charter|1850',
      notes: 'Naturally heated sulfur-and-mineral mud pools at the base of the Sleeping Giant range offer restorative hydrotherapy after long-haul flights.'
    },
    {
      title: 'Dilo Oil & Seaweed Thalassotherapy',
      meta: 'Savusavu Coast · Botanical Spa · Vanua Levu',
      image: 'images/fiji-surprise/health2.jpg',
      bookingVal: 'Savusavu Thermal & Pearl Bay|2290',
      notes: 'Cold-pressed Tamanu (Dilo) nut oil harvested from coastal trees is paired with warm mineral seawater wraps in open-air cliffside bures.'
    },
    {
      title: 'Tavoro Highland Cascades',
      meta: 'Taveuni · Bouma National Heritage Park · Rainforest',
      image: 'images/fiji-surprise/nature1.jpg',
      bookingVal: 'Taveuni Rainbow Reef & Falls|2390',
      notes: 'Three tiered volcanic waterfalls fed by the crater lake of Tagimoucia, surrounded by endemic orchids and orange dove habitat.'
    },
    {
      title: 'Upper Navua Basalt Gorge',
      meta: 'Viti Levu Interior · Protected Ramsar Corridor',
      image: 'images/fiji-surprise/nature2.jpg',
      bookingVal: 'Pacific Harbour & Beqa Lagoon|2150',
      notes: 'A narrow slot canyon carved through volcanic black basalt where seventy waterfall tributaries cascade directly into the river channel.'
    },
    {
      title: 'Koroyanitu Cloud Forest Ridge',
      meta: 'Abaca Village · 1,195m Summit · Suncoast Hinterland',
      image: 'images/fiji-surprise/nature3.jpg',
      bookingVal: 'Suncoast & Bligh Water|1980',
      notes: 'Community-preserved montane forest trails offering panoramic views across the Mamanuca and Yasawa island chains.'
    }
  ];

  var JOURNAL_ARTICLES = [
    {
      title: 'Navigating the Lunar Tides of the Somosomo Strait',
      author: 'Chiru Vishnoi',
      date: 'August 24',
      readTime: '6 min read',
      image: 'images/fiji-surprise/diving1.jpg',
      bookingVal: 'Taveuni Rainbow Reef & Falls|2390',
      paragraphs: [
        'Stretching between Vanua Levu and Taveuni, the Somosomo Strait funnels deep Pacific water through a narrow volcanic sill. Unlike still-water lagoons, the soft corals here depend on exact tidal velocity to inflate their polyps and feed on passing plankton.',
        'Our resident dive masters consult custom harmonic tide tables for every charter. By arriving at the Great White Wall and Purple Wall twenty minutes before slack high tide, divers experience maximum water clarity exceeding 35 meters while the soft corals remain fully bloomed.',
        'For photographers and conservation divers, we recommend booking our 7- or 10-night Taveuni itinerary during the May-to-October dry trade-wind season.'
      ]
    },
    {
      title: 'Village Etiquette & The Art of the Sevusevu Ceremony',
      author: 'Mereoni Tui',
      date: 'September 12',
      readTime: '5 min read',
      image: 'images/fiji-surprise/nature2.jpg',
      bookingVal: 'Savusavu Thermal & Pearl Bay|2290',
      paragraphs: [
        'Across Fiji, reefs, rivers, and highland trails belong to traditional landowning clans (Mataqali). Entering an outer-island lagoon or rainforest waterfall trail begins with a respectful Sevusevu—the presentation of dried yaqona (kava) root to the village Turaga ni Koro.',
        'Every Fiji & Beyond expedition includes a dedicated local liaison who prepares the waka root, guides guests on sulu (sarong) attire, and translates the ceremonial welcome chants.',
        'This personal relationship unlocks quiet access to pristine caves in the Yasawas and highland ridges in Vanua Levu rarely visited by commercial tour boats.'
      ]
    },
    {
      title: 'Pairing Pacific Crossings with a 72-Hour Bangkok River Stopover',
      author: 'Chiru Vishnoi',
      date: 'October 04',
      readTime: '4 min read',
      image: 'images/slider/bangcok.jpg',
      bookingVal: 'Bangkok, Thailand Sanctuary|1480',
      paragraphs: [
        'For travelers departing from Europe or Asia, breaking a trans-oceanic journey along the Chao Phraya River transforms transit fatigue into an architectural and culinary prelude.',
        'We arrange private pier transfers directly to low-rise riverside sanctuaries in Rattanakosin, followed by early-morning longtail navigation through Thonburi orchards and private curator walks at Jim Thompson’s teak compound.'
      ]
    },
    {
      title: 'Private Dahabiya Sailing Between Luxor and Aswan',
      author: 'Tariq Al-Mansoor',
      date: 'November 18',
      readTime: '7 min read',
      image: 'images/slider/cario.jpg',
      bookingVal: 'Cairo, Egypt Nile Heritage|1620',
      paragraphs: [
        'While motorized river ships crowd the main docks of Kom Ombo and Edfu, traditional twin-masted Dahabiyas rely on the steady north breeze to glide silently up the Nile.',
        'With shallow hulls and only six to eight suites on board, our chartered Dahabiyas moor alongside Gebel el-Silsila sandstone quarries and fertile river islands for lantern-lit dinners under the desert sky.'
      ]
    }
  ];

  // =========================================================================
  // STATE
  // =========================================================================
  var currentPkgFilter = 'all';
  var currentDuration = 7;
  var currentSearchQuery = '';
  var STORAGE_KEY = 'fiji_beyond_saved_bookings_v1';

  function getSavedBookings() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveBookingRecord(record) {
    try {
      var list = getSavedBookings();
      list.unshift(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      updateSavedCountBadge();
    } catch (e) {
      // Ignore storage errors in restricted environments
    }
  }

  function updateSavedCountBadge() {
    var badge = document.getElementById('savedCountBadge');
    if (badge) {
      badge.textContent = String(getSavedBookings().length);
    }
  }

  // =========================================================================
  // HEADER & BACK-TO-TOP SCROLL HANDLERS
  // =========================================================================
  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    var header = document.getElementById('siteHeader');
    var backBtn = document.getElementById('backToTopBtn');

    if (header) {
      if (scrollY >= 60) {
        header.classList.add('nav-fixed');
      } else {
        header.classList.remove('nav-fixed');
      }
    }

    if (backBtn) {
      if (scrollY > 320) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    }
  }

  // =========================================================================
  // TYPEWRITER HERO SUBLINE
  // =========================================================================
  function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2200;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 90 - Math.random() * 40;
    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 400;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  // =========================================================================
  // 01. FIJI ARCHIPELAGO ACCORDION & DOSSIER
  // =========================================================================
  var activeRegionIndex = 0;

  function setActiveRegion(index) {
    activeRegionIndex = index;
    var panels = document.querySelectorAll('#archipelagoAccordion .region-panel');
    for (var i = 0; i < panels.length; i++) {
      if (i === index) {
        panels[i].classList.add('active');
      } else {
        panels[i].classList.remove('active');
      }
    }

    var data = REGIONS_DATA[index];
    if (!data) return;

    var coordsEl = document.getElementById('dossierCoords');
    var titleEl = document.getElementById('dossierTitle');
    var notesEl = document.getElementById('dossierNotes');
    var transferEl = document.getElementById('dossierTransfer');
    var seasonEl = document.getElementById('dossierSeason');
    var rateEl = document.getElementById('dossierRate');
    var btnEl = document.getElementById('bookActiveRegionBtn');

    if (coordsEl) coordsEl.textContent = data.coords;
    if (titleEl) titleEl.textContent = data.name;
    if (notesEl) notesEl.textContent = data.notes;
    if (transferEl) transferEl.textContent = data.transfer;
    if (seasonEl) seasonEl.textContent = data.season;
    if (rateEl) rateEl.textContent = '$' + data.rate7.toLocaleString() + ' / 7 Nights';
    if (btnEl) btnEl.textContent = 'Reserve ' + data.shortName;
  }

  function prefillBookingAndScroll(bookingValue, nightsOverride, guestsOverride) {
    var destSelect = document.getElementById('bookDestination');
    if (destSelect && bookingValue) {
      for (var i = 0; i < destSelect.options.length; i++) {
        if (destSelect.options[i].value === bookingValue || destSelect.options[i].text.indexOf(bookingValue.split(',')[0]) !== -1) {
          destSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (nightsOverride) {
      var nightsSelect = document.getElementById('bookNights');
      if (nightsSelect) nightsSelect.value = String(nightsOverride);
    }

    if (guestsOverride) {
      var guestsSelect = document.getElementById('bookTravelers');
      if (guestsSelect) guestsSelect.value = String(guestsOverride);
    }

    updateLiveBookingEstimate();

    var conciergeSection = document.getElementById('concierge');
    if (conciergeSection) {
      conciergeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // =========================================================================
  // 02. PACKAGES RENDERING, FILTERING & DURATION SWITCHER
  // =========================================================================
  function computePackagePrice(base7, duration) {
    if (Number(duration) === 10) {
      return Math.round(base7 * 1.35);
    }
    return base7;
  }

  function renderPackagesGrid() {
    var container = document.getElementById('packagesGrid');
    if (!container) return;

    var query = currentSearchQuery.trim().toLowerCase();
    var filtered = PACKAGES_DATA.filter(function (pkg) {
      var matchesCategory = currentPkgFilter === 'all' || pkg.category === currentPkgFilter;
      var matchesQuery =
        !query ||
        pkg.title.toLowerCase().indexOf(query) !== -1 ||
        pkg.description.toLowerCase().indexOf(query) !== -1 ||
        pkg.regionLabel.toLowerCase().indexOf(query) !== -1;
      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML =
        '<div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #fff; border-radius: 10px; border: 1px solid rgba(15,29,38,0.1);">' +
        '<p style="font-size: 1rem; color: #485662; margin-bottom: 12px;">No curated itineraries matched your filter criteria.</p>' +
        '<button type="button" class="btn-secondary-sm" id="resetPkgFiltersBtn">Reset Filters</button>' +
        '</div>';
      var resetBtn = document.getElementById('resetPkgFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          currentPkgFilter = 'all';
          currentSearchQuery = '';
          var searchInput = document.getElementById('packageSearchInput');
          if (searchInput) searchInput.value = '';
          updatePkgFilterButtons();
          renderPackagesGrid();
        });
      }
      return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var item = filtered[i];
      var displayPrice = computePackagePrice(item.basePrice7, currentDuration);
      html +=
        '<article class="package-card">' +
        '  <div class="package-media">' +
        '    <img src="' + item.image + '" alt="' + item.title + '" referrerpolicy="no-referrer" onerror="this.style.display=\'none\'" />' +
        '  </div>' +
        '  <div class="package-body">' +
        '    <div class="unboxed-metadata">' +
        '      <span>' + item.regionLabel + '</span>' +
        '      <span aria-hidden="true">·</span>' +
        '      <span>' + currentDuration + ' Nights</span>' +
        '      <span aria-hidden="true">·</span>' +
        '      <span>' + item.transferLabel + '</span>' +
        '    </div>' +
        '    <h3 class="package-title">' + item.title + '</h3>' +
        '    <p class="package-desc">' + item.description + '</p>' +
        '    <div class="package-footer">' +
        '      <div class="price-block">' +
        '        <span class="price-amount">$' + displayPrice.toLocaleString() + '</span> ' +
        '        <span class="price-unit">/ guest (' + currentDuration + 'N)</span>' +
        '      </div>' +
        '      <button type="button" class="btn-secondary-sm select-pkg-btn" data-booking-val="' + item.bookingVal + '">' +
        '        Select Itinerary' +
        '      </button>' +
        '    </div>' +
        '  </div>' +
        '</article>';
    }

    container.innerHTML = html;

    var selectBtns = container.querySelectorAll('.select-pkg-btn');
    for (var j = 0; j < selectBtns.length; j++) {
      selectBtns[j].addEventListener('click', function () {
        var val = this.getAttribute('data-booking-val');
        prefillBookingAndScroll(val, currentDuration);
      });
    }
  }

  function updatePkgFilterButtons() {
    var btns = document.querySelectorAll('[data-pkg-filter]');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-pkg-filter') === currentPkgFilter) {
        btns[i].classList.add('active');
      } else {
        btns[i].classList.remove('active');
      }
    }
  }

  // =========================================================================
  // 03. GALLERY FILTER & LIGHTBOX MODAL
  // =========================================================================
  function openModalWithHTML(htmlContent) {
    var modal = document.getElementById('universalModal');
    var body = document.getElementById('modalBodyContent');
    if (!modal || !body) return;
    body.innerHTML = htmlContent;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    var modal = document.getElementById('universalModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function openGalleryLightbox(index) {
    var item = GALLERY_ITEMS[index];
    if (!item) return;

    var prevIndex = (index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    var nextIndex = (index + 1) % GALLERY_ITEMS.length;

    var html =
      '<div>' +
      '  <p class="unboxed-metadata" style="margin-bottom: 6px;">' + item.meta + '</p>' +
      '  <h2 class="section-title" style="font-size: 1.85rem; margin-bottom: 16px;">' + item.title + '</h2>' +
      '  <div style="aspect-ratio: 16/10; border-radius: 8px; overflow: hidden; background: #112634; margin-bottom: 20px;">' +
      '    <img src="' + item.image + '" alt="' + item.title + '" style="width: 100%; height: 100%; object-fit: cover;" referrerpolicy="no-referrer" />' +
      '  </div>' +
      '  <p style="font-size: 0.95rem; color: #485662; margin-bottom: 24px;">' + item.notes + '</p>' +
      '  <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-top: 16px; border-top: 1px solid rgba(15,29,38,0.1);">' +
      '    <div style="display: flex; gap: 8px;">' +
      '      <button type="button" class="btn-secondary-sm" id="lightboxPrevBtn">&larr; Previous</button>' +
      '      <button type="button" class="btn-secondary-sm" id="lightboxNextBtn">Next &rarr;</button>' +
      '    </div>' +
      '    <button type="button" class="btn-primary" id="lightboxBookBtn">Include in My Voyage</button>' +
      '  </div>' +
      '</div>';

    openModalWithHTML(html);

    var prevBtn = document.getElementById('lightboxPrevBtn');
    var nextBtn = document.getElementById('lightboxNextBtn');
    var bookBtn = document.getElementById('lightboxBookBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        openGalleryLightbox(prevIndex);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        openGalleryLightbox(nextIndex);
      });
    }
    if (bookBtn) {
      bookBtn.addEventListener('click', function () {
        closeModal();
        prefillBookingAndScroll(item.bookingVal);
      });
    }
  }

  // =========================================================================
  // 05. COUNTDOWN & LIVE BOOKING CONCIERGE
  // =========================================================================
  function initializeCountdown() {
    var clock = document.getElementById('clockdiv');
    if (!clock) return;

    var deadline = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 6 * 3600 * 1000);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var total = deadline.getTime() - Date.now();
      if (total <= 0) {
        total = 0;
      }
      var seconds = Math.floor((total / 1000) % 60);
      var minutes = Math.floor((total / 1000 / 60) % 60);
      var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      var days = Math.floor(total / (1000 * 60 * 60 * 24));

      if (daysSpan) daysSpan.textContent = String(days);
      if (hoursSpan) hoursSpan.textContent = ('0' + hours).slice(-2);
      if (minutesSpan) minutesSpan.textContent = ('0' + minutes).slice(-2);
      if (secondsSpan) secondsSpan.textContent = ('0' + seconds).slice(-2);
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  function calculateCurrentEstimate() {
    var destSelect = document.getElementById('bookDestination');
    var nightsSelect = document.getElementById('bookNights');
    var guestsSelect = document.getElementById('bookTravelers');

    var rawVal = destSelect ? destSelect.value : 'Yasawa Islands Private Lagoon|2680';
    var parts = rawVal.split('|');
    var pkgName = parts[0] || 'Custom Fiji Voyage';
    var basePerGuest = parseInt(parts[1], 10) || 2200;

    var nights = nightsSelect ? parseInt(nightsSelect.value, 10) : 7;
    var guests = guestsSelect ? parseInt(guestsSelect.value, 10) : 2;

    var durationMultiplier = 1;
    if (nights === 10) durationMultiplier = 1.35;
    if (nights === 14) durationMultiplier = 1.7;

    var total = Math.round(basePerGuest * durationMultiplier * guests);
    return {
      pkgName: pkgName,
      nights: nights,
      guests: guests,
      total: total
    };
  }

  function updateLiveBookingEstimate() {
    var est = calculateCurrentEstimate();
    var display = document.getElementById('liveEstimateDisplay');
    if (display) {
      display.textContent = '$' + est.total.toLocaleString() + ' USD (' + est.guests + (est.guests === 1 ? ' Guest, ' : ' Guests, ') + est.nights + ' Nights)';
    }
  }

  // =========================================================================
  // 06. JOURNAL READER & SAVED ITINERARIES MODAL
  // =========================================================================
  function openJournalArticle(id) {
    var article = JOURNAL_ARTICLES[id];
    if (!article) return;

    var bodyParagraphs = article.paragraphs
      .map(function (p) {
        return '<p style="font-size: 1rem; line-height: 1.7; color: #2D3B45; margin-bottom: 16px;">' + p + '</p>';
      })
      .join('');

    var html =
      '<article>' +
      '  <div class="unboxed-metadata" style="margin-bottom: 8px;">' +
      '    <span>' + article.author + '</span>' +
      '    <span aria-hidden="true">·</span>' +
      '    <span>' + article.date + '</span>' +
      '    <span aria-hidden="true">·</span>' +
      '    <span>' + article.readTime + '</span>' +
      '  </div>' +
      '  <h2 class="section-title" style="font-size: 2rem; margin-bottom: 20px;">' + article.title + '</h2>' +
      '  <div style="aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; margin-bottom: 24px; background: #112634;">' +
      '    <img src="' + article.image + '" alt="' + article.title + '" style="width: 100%; height: 100%; object-fit: cover;" referrerpolicy="no-referrer" />' +
      '  </div>' +
      bodyParagraphs +
      '  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(15,29,38,0.1); display: flex; justify-content: space-between; align-items: center;">' +
      '    <span style="font-size: 0.8125rem; color: #6E7C87;">Interested in this route?</span>' +
      '    <button type="button" class="btn-primary" id="journalBookRouteBtn">Configure This Itinerary</button>' +
      '  </div>' +
      '</article>';

    openModalWithHTML(html);

    var btn = document.getElementById('journalBookRouteBtn');
    if (btn) {
      btn.addEventListener('click', function () {
        closeModal();
        prefillBookingAndScroll(article.bookingVal);
      });
    }
  }

  function openSavedBookingsModal() {
    var list = getSavedBookings();
    var html = '<h2 class="section-title" style="font-size: 1.85rem; margin-bottom: 8px;">Saved Voyage Dossiers</h2>';

    if (list.length === 0) {
      html +=
        '<p style="font-size: 0.95rem; color: #485662; margin-bottom: 24px;">You have not saved any custom itineraries yet. Use the Booking Concierge to configure and save your voyage.</p>' +
        '<button type="button" class="btn-primary" id="emptySavedGoBookBtn">Configure a Voyage</button>';
      openModalWithHTML(html);
      var goBtn = document.getElementById('emptySavedGoBookBtn');
      if (goBtn) {
        goBtn.addEventListener('click', function () {
          closeModal();
          var c = document.getElementById('concierge');
          if (c) c.scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    html += '<p style="font-size: 0.875rem; color: #6E7C87; margin-bottom: 20px;">Your confirmed itinerary requests stored on this device:</p>';
    html += '<div style="display: flex; flex-direction: column; gap: 14px;">';
    for (var i = 0; i < list.length; i++) {
      var b = list[i];
      html +=
        '<div style="padding: 16px; border-radius: 8px; border: 1px solid rgba(15,29,38,0.12); background: #FAF8F5;">' +
        '  <div class="unboxed-metadata" style="margin-bottom: 4px;">' +
        '    <span class="tabular-nums" style="font-weight: 600; color: #0B6E78;">Ref ' + b.refCode + '</span>' +
        '    <span aria-hidden="true">·</span>' +
        '    <span class="tabular-nums">Arrival: ' + b.arrival + '</span>' +
        '    <span aria-hidden="true">·</span>' +
        '    <span>' + b.guests + ' Guests / ' + b.nights + ' Nights</span>' +
        '  </div>' +
        '  <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 4px;">' + b.pkgName + '</h3>' +
        '  <p style="font-size: 0.8125rem; color: #485662;">Lead Traveler: ' + b.traveler + ' (' + b.email + ') · Est. Total: <strong class="tabular-nums">$' + b.total.toLocaleString() + ' USD</strong></p>' +
        '</div>';
    }
    html += '</div>';
    openModalWithHTML(html);
  }

  // =========================================================================
  // INITIALIZATION ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Scroll & Back to top
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    var backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 2. Mobile menu toggle
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var primaryNav = document.getElementById('primaryNav');
    if (mobileMenuBtn && primaryNav) {
      mobileMenuBtn.addEventListener('click', function () {
        var isOpen = primaryNav.classList.toggle('nav-open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      var navLinks = primaryNav.querySelectorAll('.nav-link');
      for (var n = 0; n < navLinks.length; n++) {
        navLinks[n].addEventListener('click', function () {
          primaryNav.classList.remove('nav-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      }
    }

    // 3. Typewriter initialization
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        try {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        } catch (e) {}
      }
    }

    // 4. Quick Finder Form in Hero
    var quickForm = document.getElementById('quickFinderForm');
    if (quickForm) {
      quickForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var regionVal = document.getElementById('quickRegion').value;
        var durVal = parseInt(document.getElementById('quickDuration').value, 10) || 7;
        var guestsVal = parseInt(document.getElementById('quickGuests').value, 10) || 2;

        if (regionVal === 'fiji') currentPkgFilter = 'fiji';
        else if (regionVal === 'europe') currentPkgFilter = 'europe';
        else if (regionVal === 'asia') currentPkgFilter = 'global';
        else currentPkgFilter = 'all';

        currentDuration = durVal;

        // Sync duration buttons
        var durBtns = document.querySelectorAll('[data-duration-btn]');
        for (var d = 0; d < durBtns.length; d++) {
          if (parseInt(durBtns[d].getAttribute('data-duration-btn'), 10) === currentDuration) {
            durBtns[d].classList.add('active');
          } else {
            durBtns[d].classList.remove('active');
          }
        }

        // Sync concierge guests & nights
        var bookNights = document.getElementById('bookNights');
        var bookTravelers = document.getElementById('bookTravelers');
        if (bookNights) bookNights.value = String(currentDuration);
        if (bookTravelers) bookTravelers.value = String(guestsVal);
        updateLiveBookingEstimate();

        updatePkgFilterButtons();
        renderPackagesGrid();

        var pkgSec = document.getElementById('packages');
        if (pkgSec) pkgSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 5. Archipelago Accordion Regions
    var regionPanels = document.querySelectorAll('#archipelagoAccordion .region-panel');
    for (var r = 0; r < regionPanels.length; r++) {
      (function (idx) {
        regionPanels[idx].addEventListener('click', function () {
          setActiveRegion(idx);
        });
        regionPanels[idx].addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            setActiveRegion(idx);
          }
        });
      })(r);
    }

    var bookActiveRegionBtn = document.getElementById('bookActiveRegionBtn');
    if (bookActiveRegionBtn) {
      bookActiveRegionBtn.addEventListener('click', function () {
        var activeData = REGIONS_DATA[activeRegionIndex];
        if (activeData) {
          prefillBookingAndScroll(activeData.bookingValue);
        }
      });
    }

    // Footer region links
    var footerRegionLinks = document.querySelectorAll('[data-select-region]');
    for (var fr = 0; fr < footerRegionLinks.length; fr++) {
      footerRegionLinks[fr].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-select-region'), 10) || 0;
        setActiveRegion(idx);
      });
    }

    // Footer package filter links
    var footerPkgLinks = document.querySelectorAll('[data-footer-pkg]');
    for (var fp = 0; fp < footerPkgLinks.length; fp++) {
      footerPkgLinks[fp].addEventListener('click', function () {
        currentPkgFilter = this.getAttribute('data-footer-pkg') || 'all';
        updatePkgFilterButtons();
        renderPackagesGrid();
      });
    }

    // 6. Packages Filter, Search & Duration Controls
    renderPackagesGrid();

    var pkgFilterBtns = document.querySelectorAll('[data-pkg-filter]');
    for (var pf = 0; pf < pkgFilterBtns.length; pf++) {
      pkgFilterBtns[pf].addEventListener('click', function () {
        currentPkgFilter = this.getAttribute('data-pkg-filter') || 'all';
        updatePkgFilterButtons();
        renderPackagesGrid();
      });
    }

    var durationBtns = document.querySelectorAll('[data-duration-btn]');
    for (var db = 0; db < durationBtns.length; db++) {
      durationBtns[db].addEventListener('click', function () {
        currentDuration = parseInt(this.getAttribute('data-duration-btn'), 10) || 7;
        for (var k = 0; k < durationBtns.length; k++) {
          durationBtns[k].classList.remove('active');
        }
        this.classList.add('active');
        renderPackagesGrid();
      });
    }

    var searchInput = document.getElementById('packageSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearchQuery = this.value || '';
        renderPackagesGrid();
      });
    }

    // 7. Experience Gallery Filter & Lightbox
    var galFilterBtns = document.querySelectorAll('[data-gal-filter]');
    var galCards = document.querySelectorAll('#galleryGrid .gallery-card');

    for (var gf = 0; gf < galFilterBtns.length; gf++) {
      galFilterBtns[gf].addEventListener('click', function () {
        var cat = this.getAttribute('data-gal-filter');
        for (var b = 0; b < galFilterBtns.length; b++) {
          galFilterBtns[b].classList.remove('active');
        }
        this.classList.add('active');

        for (var c = 0; c < galCards.length; c++) {
          var cardCat = galCards[c].getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            galCards[c].style.display = 'block';
          } else {
            galCards[c].style.display = 'none';
          }
        }
      });
    }

    for (var gc = 0; gc < galCards.length; gc++) {
      (function (cardEl) {
        cardEl.addEventListener('click', function () {
          var idx = parseInt(cardEl.getAttribute('data-index'), 10) || 0;
          openGalleryLightbox(idx);
        });
        cardEl.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            var idx = parseInt(cardEl.getAttribute('data-index'), 10) || 0;
            openGalleryLightbox(idx);
          }
        });
      })(galCards[gc]);
    }

    // 8. Global Gateway Tall Cards
    var gatewayCards = document.querySelectorAll('.destination-tall-card');
    for (var gw = 0; gw < gatewayCards.length; gw++) {
      gatewayCards[gw].addEventListener('click', function () {
        var gwName = this.getAttribute('data-gateway') || '';
        prefillBookingAndScroll(gwName);
      });
    }

    // 9. Countdown & Booking Concierge Form
    initializeCountdown();

    var arrivalInput = document.getElementById('bookArrival');
    if (arrivalInput && !arrivalInput.value) {
      var future = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      var yyyy = future.getFullYear();
      var mm = ('0' + (future.getMonth() + 1)).slice(-2);
      var dd = ('0' + future.getDate()).slice(-2);
      arrivalInput.value = yyyy + '-' + mm + '-' + dd;
    }

    var destSelectEl = document.getElementById('bookDestination');
    var nightsSelectEl = document.getElementById('bookNights');
    var guestsSelectEl = document.getElementById('bookTravelers');

    if (destSelectEl) destSelectEl.addEventListener('change', updateLiveBookingEstimate);
    if (nightsSelectEl) nightsSelectEl.addEventListener('change', updateLiveBookingEstimate);
    if (guestsSelectEl) guestsSelectEl.addEventListener('change', updateLiveBookingEstimate);
    updateLiveBookingEstimate();

    var bookingForm = document.getElementById('bookingConciergeForm');
    var feedbackBox = document.getElementById('bookingFeedbackContainer');

    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var fname = (document.getElementById('bookFirstName').value || '').trim();
        var lname = (document.getElementById('bookLastName').value || '').trim();
        var email = (document.getElementById('bookEmail').value || '').trim();
        var arrival = (document.getElementById('bookArrival').value || '').trim();
        var origin = document.getElementById('bookOrigin').value;
        var notes = (document.getElementById('bookNotes').value || '').trim();

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!fname || !lname || !emailRegex.test(email) || !arrival) {
          if (feedbackBox) {
            feedbackBox.innerHTML =
              '<div class="booking-confirmation-box" style="background-color: #FDF2F2; border-color: #E5A3A3; color: #7F1D1D;">' +
              '  <strong>Missing Required Details:</strong> Please enter your first name, last name, a valid email address, and preferred arrival date.' +
              '</div>';
          }
          return;
        }

        var est = calculateCurrentEstimate();
        var refCode = 'FJ-' + Math.floor(100000 + Math.random() * 900000);

        var record = {
          refCode: refCode,
          traveler: fname + ' ' + lname,
          email: email,
          origin: origin,
          pkgName: est.pkgName,
          arrival: arrival,
          nights: est.nights,
          guests: est.guests,
          total: est.total,
          notes: notes
        };

        saveBookingRecord(record);

        if (feedbackBox) {
          feedbackBox.innerHTML =
            '<div class="booking-confirmation-box">' +
            '  <div class="unboxed-metadata" style="color: #0B6E78; font-weight: 600; margin-bottom: 6px;">' +
            '    <span>Reservation Dossier Logged</span>' +
            '    <span aria-hidden="true">·</span>' +
            '    <span class="tabular-nums">Reference #' + refCode + '</span>' +
            '  </div>' +
            '  <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 6px;">We have reserved your provisional allocation for ' + est.pkgName + '.</h3>' +
            '  <p style="font-size: 0.875rem; color: #2D3B45; margin-bottom: 12px;">' +
            '    Prepared for <strong>' + record.traveler + '</strong> (' + record.email + ') · Departing from ' + record.origin + ' on <span class="tabular-nums">' + record.arrival + '</span> (' + record.nights + ' Nights, ' + record.guests + ' Guests). Estimated investment: <strong class="tabular-nums">$' + record.total.toLocaleString() + ' USD</strong>.' +
            '  </p>' +
            '  <button type="button" class="text-action-link" id="viewSavedFromConfirmBtn">View All Saved Itineraries &rarr;</button>' +
            '</div>';

          var viewBtn = document.getElementById('viewSavedFromConfirmBtn');
          if (viewBtn) {
            viewBtn.addEventListener('click', openSavedBookingsModal);
          }
        }
      });
    }

    // 10. Journal Reader Buttons
    var journalBtns = document.querySelectorAll('[data-journal-id]');
    for (var jb = 0; jb < journalBtns.length; jb++) {
      journalBtns[jb].addEventListener('click', function () {
        var jId = parseInt(this.getAttribute('data-journal-id'), 10) || 0;
        openJournalArticle(jId);
      });
    }

    // 11. Universal Modal Close & Saved Bookings Triggers
    updateSavedCountBadge();

    var openSavedBtn = document.getElementById('openSavedBookingsBtn');
    var footerSavedLink = document.getElementById('footerOpenSavedLink');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modalBackdrop = document.getElementById('universalModal');

    if (openSavedBtn) {
      openSavedBtn.addEventListener('click', openSavedBookingsModal);
    }
    if (footerSavedLink) {
      footerSavedLink.addEventListener('click', function (e) {
        e.preventDefault();
        openSavedBookingsModal();
      });
    }
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', function (e) {
        if (e.target === modalBackdrop) {
          closeModal();
        }
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
})();
