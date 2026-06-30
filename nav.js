/* ========================================
   苏眉 — 移动端导航交互脚本
   ======================================== */
(function() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  // 切换菜单
  menuBtn.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });

  // 点击链接后关闭菜单
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });

  // 移动端下拉菜单
  document.querySelectorAll('.nav-dropdown > a').forEach(function(dd) {
    dd.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  // 点击页面其他区域关闭菜单
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && e.target !== menuBtn) {
      navLinks.classList.remove('open');
      menuBtn.textContent = '☰';
    }
  });
})();
