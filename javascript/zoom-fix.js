/**
 * ZOOM FIX — corrige le scroll et le débordement horizontal
 * après transform: scale() sur le body.
 * À placer juste avant </body> dans chaque page HTML.
 */
(function () {
    function getScale() {
        var w = window.innerWidth;
        if (w <= 480)  return 0.34;
        if (w <= 768)  return 0.54;
        if (w <= 1024) return 0.72;
        return 1;
    }

    function applyZoom() {
        var scale  = getScale();
        var body   = document.body;
        var html   = document.documentElement;

        /* 1. Applique le zoom */
        body.style.transform       = 'scale(' + scale + ')';
        body.style.transformOrigin = 'top left';
        body.style.width           = '1400px';
        body.style.marginLeft      = '0';
        body.style.overflowX       = 'hidden';

        /* 2. Corrige la hauteur scrollable :
              hauteur réelle du body × scale = hauteur visible
              → on dit à <html> combien ça fait vraiment */
        var realHeight = body.scrollHeight * scale;
        html.style.height    = realHeight + 'px';
        html.style.overflowY = 'scroll';
        html.style.overflowX = 'hidden';
        html.style.width     = '100%';

        /* 3. Empêche le scroll horizontal sur le viewport */
        document.body.style.maxWidth = '1400px';
    }

    /* Lance au chargement et à chaque redimensionnement */
    applyZoom();
    window.addEventListener('resize', applyZoom);

    /* Relance après que les images/fonts soient chargées
       (la hauteur peut changer) */
    window.addEventListener('load', applyZoom);
})();