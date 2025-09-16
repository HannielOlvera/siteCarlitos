Carlitos — Sitio para GitHub Pages

Instrucciones rápidas:

1. Coloca tus imágenes en `docs/assets/img/` y tus videos en `docs/assets/videos/` usando los nombres sugeridos en `docs/assets/ASSETS_README.md`.
2. Inicia un repositorio Git en `carlitos-site` y sube a GitHub.
3. En la configuración del repositorio en GitHub, activa GitHub Pages y elige la carpeta `docs/` como fuente (branch `main` o `master`).
4. Después de publicar, espera unos minutos y visita `https://<tu-usuario>.github.io/<tu-repo>/`.

Preview local (simple): puedes abrir `docs/index.html` en tu navegador, pero algunos navegadores bloquean `video` por rutas relativas si no se sirve desde un servidor. Para mejor preview, sirve la carpeta con un servidor estático (por ejemplo `npx http-server docs` o `python -m http.server --directory docs 8000`).
