function goStep2() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'flex';
    document.getElementById('dot1').classList.remove('active');
    document.getElementById('dot2').classList.add('active');
  }
  function goStep1() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'flex';
    document.getElementById('dot2').classList.remove('active');
    document.getElementById('dot1').classList.add('active');
  }
  document.querySelectorAll('.form-row select').forEach(sel => {
    sel.addEventListener('change', () => sel.classList.add('filled'));
  });

  function goStep2b() {
    document.getElementById('step1b').style.display = 'none';
    document.getElementById('step2b').style.display = 'flex';
    document.getElementById('dot1b').classList.remove('active');
    document.getElementById('dot2b').classList.add('active');
  }
  function goStep1b() {
    document.getElementById('step2b').style.display = 'none';
    document.getElementById('step1b').style.display = 'flex';
    document.getElementById('dot2b').classList.remove('active');
    document.getElementById('dot1b').classList.add('active');
  }

  function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }