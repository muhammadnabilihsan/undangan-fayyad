document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Undangan Aqiqah Muhammad Fayyadh siap!");

  // Countdown Timer
  const countdownElement = document.getElementById("countdown");
  // Perhatikan: Tanggal acara adalah 05 Juli 2025, Pukul 10:00 WITA.
  // Jika Anda ingin akurasi zona waktu yang ketat, pertimbangkan library.
  // Untuk tujuan ini, 10:00:00 akan diinterpretasikan sebagai 10 AM di zona waktu lokal browser.
  const eventDate = new Date("2025-07-05T10:00:00").getTime();

  const updateCountdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (countdownElement) {
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
      } else {
        clearInterval(updateCountdown);
        countdownElement.innerHTML = "ACARA SEDANG BERLANGSUNG / TELAH USAI";
      }
    }
  }, 1000);

  // INTERAKTIVITAS: FADE-IN SECTIONS ON SCROLL
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null, // Mengamati viewport
    rootMargin: "0px",
    threshold: 0.1, // Ketika 10% dari elemen terlihat
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.unobserve(entry.target); // Berhenti mengamati setelah animasi pertama
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0"; // Mulai dengan transparan
    section.style.transform = "translateY(20px)"; // Sedikit di bawah
    sectionObserver.observe(section);
  });

  // Interaktivitas: Hover effect pada ornamen sudut
  // const ornamentTopLeft = document.querySelector(".ornament-top-left");
  // if (ornamentTopLeft) {
  //   ornamentTopLeft.addEventListener("mouseenter", () => {
  //     ornamentTopLeft.style.transform = "scale(1.05) rotate(5deg)";
  //     ornamentTopLeft.style.transition = "transform 0.3s ease-out";
  //   });
  //   ornamentTopLeft.addEventListener("mouseleave", () => {
  //     ornamentTopLeft.style.transform = "scale(1) rotate(0deg)";
  //     ornamentTopLeft.style.transition = "transform 0.3s ease-out";
  //   });
  // }

  // Optional: Tambahkan efek Confetti saat tombol RSVP diklik
  // Untuk mengaktifkan ini, Anda perlu menambahkan library Confetti.js di HTML:
  // <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  // const whatsappBtn = document.querySelector('.whatsapp-btn');
  // if (whatsappBtn) {
  //     whatsappBtn.addEventListener('click', function(event) {
  //         // event.preventDefault(); // Uncomment jika tidak ingin langsung ke WhatsApp
  //         confetti({
  //             particleCount: 100,
  //             spread: 70,
  //             origin: { y: 0.6 }
  //         });
  //     });
  // }
});
