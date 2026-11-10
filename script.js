document.addEventListener('DOMContentLoaded', () => {
  const packageBox = document.getElementById('package-box');
  const letterCard = document.getElementById('letter-card');
  const qrCard = document.getElementById('qr-card');
  const nextBtn = document.getElementById('next-btn');
  const tapHint = document.getElementById('tap-hint');

  let isOpened = false;

  // 1. OPEN PACKAGE & REVEAL LETTER
  const openPackage = () => {
    if (isOpened) return;
    isOpened = true;

    tapHint.style.opacity = '0';

    packageBox.classList.add('is-opening');
    packageBox.classList.add('is-open-scene');

    setTimeout(() => {
      letterCard.classList.remove('hidden');
    }, 500);
  };

  // Click & Touch events for cross-platform support
  packageBox.addEventListener('click', openPackage);
  packageBox.addEventListener('touchend', (e) => {
    e.preventDefault();
    openPackage();
  });

  packageBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPackage();
    }
  });

  // 2. CLICK NEXT BUTTON -> TUCK LETTER BACK & SHOW BOUQUET LINK BUTTON
  const handleNext = () => {
    letterCard.classList.add('hidden');

    setTimeout(() => {
      qrCard.classList.remove('hidden');
    }, 450);
  };

  nextBtn.addEventListener('click', handleNext);
  nextBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    handleNext();
  });
});