(function () {
  // ---------- Contador regressivo (upsell e downsell) ----------
  // data-timer = segundos iniciais; data-alerta = abaixo de quantos segundos fica vermelho
  document.querySelectorAll("[data-timer]").forEach(function (caixa) {
    var resta = Number(caixa.getAttribute("data-timer"));
    var alerta = Number(caixa.getAttribute("data-alerta") || 0);
    var saida = caixa.querySelector("[data-timer-saida]");
    function pinta() {
      var m = Math.floor(resta / 60), s = resta % 60;
      saida.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
      if (alerta && resta < alerta) caixa.classList.add("expirando");
    }
    pinta();
    var t = setInterval(function () {
      if (resta > 0) { resta--; pinta(); } else clearInterval(t);
    }, 1000);
  });

  // ---------- Widget do funil de vendas da Hotmart (botões de aceitar/recusar a oferta) ----------
  if (document.getElementById("hotmart-sales-funnel")) {
    var s = document.createElement("script");
    s.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    s.async = true;
    s.onload = function () {
      if (window.checkoutElements) window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
    };
    document.body.appendChild(s);
  }
})();
