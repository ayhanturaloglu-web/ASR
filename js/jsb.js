
    const modalData = {
        qida: {
        title: 'Qida Təhlükəsizliyi',
    body: `<p>Müəssisənizin qida təhlükəsizliyi sistemlərinin qurulması və sertifikasiyası üçün tam dəstək təqdim edirik.</p>
    <ul>
        <li>ISO 22000 tətbiqi və sertifikasiyası</li>
        <li>HACCP planının hazırlanması</li>
        <li>BRCGS və IFS standartlarına uyğunlaşma</li>
        <li>AQTA tələblərinə tam uyğunluq təmini</li>
        <li>Daxili audit və təlim proqramları</li>
        <li>Sənədləşmə sisteminin qurulması</li>
    </ul>`
        },
    strateji: {
        title: 'Strateji İdarəetmə',
    body: `<p>Biznesinizin strateji idarəetmə sistemlərini müasir standartlara uyğun qurmaq üçün kompleks həllər təqdim edirik.</p>
    <ul>
        <li>Menecment Qaydaları (MQ) sistemlərinin tətbiqi</li>
        <li>Biznes proseslərinin optimallaşdırılması</li>
        <li>HR Audit və insan resursları idarəetməsi</li>
        <li>KPI sisteminin qurulması</li>
        <li>Korporativ idarəetmə strukturunun formalaşdırılması</li>
        <li>Strateji planlaşdırma sessiyaları</li>
    </ul>`
        },
    huquqi: {
        title: 'İqtisadi-Hüquqi Ekspertiza',
    body: `<p>Qanunvericilik ekspertizası və iqtisadi təhlil sahəsində peşəkar dəstək göstəririk.</p>
    <ul>
        <li>RIA (Qanunvericilik Ekspertizası) hazırlanması</li>
        <li>Feasibility Study (İqtisadi Əsaslandırma) analizləri</li>
        <li>Normativ-hüquqi aktların ekspertizası</li>
        <li>İnvestisiya layihələrinin hüquqi qiymətləndirilməsi</li>
        <li>Biznes risklərinin hüquqi analizi</li>
        <li>Müqavilə və sənədlərin ekspertizası</li>
    </ul>`
        }
      };

    function openModal(type) {
        const d = modalData[type];
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalBody').innerHTML = d.body;
    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
      }
    function closeModal() {
        document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = '';
      }
    function closeModalOutside(e) {
        if (e.target === document.getElementById('serviceModal')) closeModal();
      }
    function openDiagnostic() {
        const n = prompt("Zəhmət olmasa adınızı və müəssisə adını daxil edin:");
    if (n) alert(`Hörmətli ${n}, müraciətiniz qəbul edildi. Ekspertlərimiz 24 saat ərzində sizinlə əlaqə saxlayacaq.`);
      }

    function handleChecklistDownload() {
        const name = document.getElementById('clName').value;
    const email = document.getElementById('clEmail').value;
    if (!name || !email) {alert('Zəhmət olmasa ad və e-poçt daxil edin.'); return; }
    const btn = document.querySelector('.btn-checklist-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Hazırlanır...';
        setTimeout(() => {
        alert("Təbriklər! 'Audit Hazırlıq Checklist-i' " + email + " ünvanına göndərildi.");
    btn.innerHTML = '🔖 Pulsuz Yüklə';
    document.getElementById('clName').value = '';
    document.getElementById('clEmail').value = '';
    document.getElementById('clCompany').value = '';
        }, 2000);
      }

    function handleExpertSubmit() {
        const name = document.getElementById('expName').value;
    const email = document.getElementById('expEmail').value;
    if (!name || !email) {alert('Zəhmət olmasa ad və e-poçt daxil edin.'); return; }
    const btn = document.querySelector('.btn-expert-submit');
    btn.textContent = 'Göndərilir...';
        setTimeout(() => {
        alert('Hörmətli ' + name + ', müraciətiniz qəbul edildi. Komandamız sizinlə əlaqə quracaq.');
    btn.textContent = 'ANKETİ GÖNDƏR →';
          ['expName','expEmail','expPhone','expCerts'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('expField').selectedIndex = 0;
        }, 1800);
      }

    /* Scroll to top */
    const scrollBtn = document.getElementById('scrollTop');
      window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('show', window.scrollY > 300);
    const nav = document.querySelector('.navbar');
        nav.style.padding = window.scrollY > 50 ? '5px 0' : '10px 0';
        nav.style.background = window.scrollY > 50 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.97)';
      });

    /* Animated counters */
    let counterDone = false;
    function runCounters() {
        if (counterDone) return;
    counterDone = true;
        document.querySelectorAll('.counter').forEach(el => {
          const target = +el.getAttribute('data-target');
    let current = 0;
          const timer = setInterval(() => {
        current += Math.ceil(target / 60);
            if (current >= target) {current = target; clearInterval(timer); }
    el.textContent = current;
          }, 30);
        });
      }
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) runCounters(); });
      }, {threshold: 0.3 });
    const statsEl = document.getElementById('projects');
    if (statsEl) obs.observe(statsEl);

      /* Smooth scroll */
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) window.scrollTo({ top: t.offsetTop - 75, behavior: 'smooth' });
        });
      });