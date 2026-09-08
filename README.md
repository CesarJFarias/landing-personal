# Landing Personal — César Farias

**En vivo (GitHub Pages):** https://cesarjfarias.github.io/landing-personal/

Página web personal / portafolio hecha a mano con **HTML, CSS y JavaScript** (sin frameworks).

## Qué incluye
- Diseño responsive (menú hamburguesa en mobile)
- Secciones: Especialidades, Sobre mí, Contacto
- Formulario de contacto con validación en JS
- Enlaces a LinkedIn y GitHub

## Cómo verlo en tu compu
Opción rápida: hacer doble clic en `index.html`.

Opción con servidor local (recomendado en entrevistas):
```
python -m http.server 8000
```
Después abrir `http://localhost:8000`.

## Estructura
```
landing-personal/
├── index.html
├── css/style.css
└── js/main.js
```

## Cómo personalizarlo (5 minutos)
- Textos: editá `index.html` (los párrafos están en `<section>`).
- Colores: cambiá las variables de `css/style.css` en el bloque `:root` (p. ej. `--primario`).
- Contacto: el form abrirá el email; ajustá el destino en `js/main.js`.

## Tecnologías
HTML5 · CSS3 · JavaScript (ES6) · Responsive design