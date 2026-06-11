# Portafolio Web — Bladimir Luna Corrales

Sitio personal estático construido con Astro + TypeScript + Tailwind CSS. Presenta proyectos, experiencia y habilidades desde una única fuente de datos en `src/data/profile.ts`.

## Resumen del proyecto

- **Autor**: Bladimir Luna Corrales
- **Stack**: Astro 6.4.4, TypeScript (strict), Tailwind CSS 4.3
- **Deploy**: Docker + Caddy (local) y GitHub Pages (estático)

## Comandos principales

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (localhost:4321)
npm run build      # construir sitio para producción -> ./dist/
npm run preview    # previsualizar build localmente
```

## Cómo desplegar en GitHub Pages (automático desde este repositorio)

El repositorio contiene un flujo para publicar el contenido estático en la rama `gh-pages`. Para reproducir manualmente:

```bash
npm run build
cd dist
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy: gh-pages"
git push --force origin gh-pages
```

Después del despliegue, la URL de Pages será `https://<TU_USUARIO>.github.io/portafolio` (reemplaza `<TU_USUARIO>` por tu usuario de GitHub).

## Estructura relevante

- `src/data/profile.ts` — fuente de la información del portafolio (skills, projects, experience)
- `src/components/` — secciones y componentes reutilizables (`ui/` contiene `Badge.astro`, `SectionTitle.astro`)
- `src/pages/index.astro` — página principal compuesta por secciones

## Contribuir

1. Edita `src/data/profile.ts` para actualizar contenido.
2. Modifica o añade componentes en `src/components/`.
3. Ejecuta `npm run build` y despliega según el proceso de Pages.

## Seguridad y despliegue automático

- Antes de commitear: asegúrate de no añadir archivos con secretos. Revisa `git status` y `git diff --staged`.
- Este repositorio incluye una serie de medidas para evitar fugas de secretos:
  - `.gitignore` contiene `*.pem`, `*.key`, `.env*`, `dist/`, `node_modules/`, `.DS_Store`.
  - Un script de escaneo `scripts/check_secrets.js` revisa patrones comunes de secretos.
  - Un gancho opcional `./.githooks/pre-push` está incluido; para activarlo localmente ejecuta:

```bash
git config core.hooksPath .githooks
```

- Despliegue automático: el workflow de GitHub Actions en `.github/workflows/deploy.yml` compila y publica `dist/` en GitHub Pages cada push a `main`/`master`.
- No almacenar secretos en el repositorio: usa `GitHub Secrets` para valores sensibles cuando una Action los necesite.

## Dominio personalizado (Name.com)

Este repositorio ya publica en `gh-pages`. Para usar `bladyluna.dev` añade un registro `A` en Name.com apuntando a los IPs de GitHub Pages:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Explicación: los registros `A` apuntan el dominio raíz al servicio de alojamiento (GitHub Pages). Para `www` añade un `CNAME` apuntando a `your-github-username.github.io`.

No aplico cambios DNS por ti; confirma antes de editar los registros. Tras la propagación GitHub emitirá el certificado HTTPS automático.

---

Si quieres que yo cree el repositorio público en GitHub y despliegue automáticamente, dímelo y lo hago ahora.
