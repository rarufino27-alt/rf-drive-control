<div id="sidebar" class="sidebar">
  <span class="menu-close" onclick="closeMenu()">×</span>
  <div class="menu-title">Navegação do app</div>

  <div class="menu-item" onclick="navegar('index','dashboard')">
    <span class="icon-flag" id="icon-dashboard"></span>
    <span class="menu-item-label">Dashboard</span>
  </div>

  <div class="menu-item">
    <span class="icon-flag" id="icon-entradas"></span>
    <span class="menu-item-label">Entradas</span>
  </div>
  <div class="submenu">
    <div class="submenu-item" onclick="navegar('entradas','entradas_corridas')">
      <span class="icon-flag" id="icon-entradas-corridas"></span>
      <span>Entradas corridas</span>
    </div>
    <div class="submenu-item" onclick="navegar('entradas','entradas_outras')">
      <span class="icon-flag" id="icon-entradas-outras"></span>
      <span>Outras entradas</span>
    </div>
    <div class="submenu-item" onclick="navegar('entradas','entradas_saidas')">
      <span class="icon-flag" id="icon-entradas-saidas"></span>
      <span>Saídas</span>
    </div>
  </div>

  <div class="menu-item" onclick="navegar('recibo_empresa','empresas')">
    <span class="icon-flag" id="icon-empresas"></span>
    <span class="menu-item-label">Empresas</span>
  </div>

  <div class="menu-item" onclick="navegar('recibo_particular','particular')">
    <span class="icon-flag" id="icon-particular"></span>
    <span class="menu-item-label">Particular</span>
  </div>

  <div class="menu-item" onclick="navegar('manutencao','manutencao')">
    <span class="icon-flag" id="icon-manutencao"></span>
    <span class="menu-item-label">Manutenção</span>
  </div>

  <div class="menu-item" onclick="navegar('resumo','resumo')">
    <span class="icon-flag" id="icon-resumo"></span>
    <span class="menu-item-label">Resumo</span>
  </div>

  <div class="menu-item" onclick="navegar('perfil','perfil')">
    <span class="icon-flag" id="icon-perfil"></span>
    <span class="menu-item-label">Perfil</span>
  </div>

  <div class="menu-item" onclick="navegar('calculadora','calculadora')">
    <span class="icon-flag" id="icon-calculadora"></span>
    <span class="menu-item-label">Calculadora</span>
  </div>
</div>
