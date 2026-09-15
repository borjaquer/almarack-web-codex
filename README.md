# Almar-Rack — web narrativa y contenidos

Versión de revisión privada. 24 páginas navegables, más página 404. No modifica localhost:3100 ni almarack.com.

## Contenido

`content.cjs` contiene la redacción revisada. `build.cjs` genera las páginas interiores, los menús, la ampliación de portada y los archivos SEO. La historia visual y fotografías están en `dist/`.

- `node build.cjs`: vista privada con `noindex` y rastreo desactivado.
- `node build.cjs --production`: preparación para el dominio **https://almarack.com**, con indexación permitida. Ejecutar únicamente después de validar datos empresariales y condiciones del alojamiento final.
- `node validate.cjs`: referencias locales, anclas, títulos, H1 y JSON-LD.

La publicación de la versión privada no activa SEO en el dominio oficial. El sitemap y las URL canónicas están preparados para almarack.com; los archivos llms son complementarios, no garantizan recomendaciones.

## Migración al dominio oficial

Conservar las rutas actuales de servicios. `_redirects` contiene equivalencias de privacidad, cookies y sitemap para alojamientos compatibles con ese formato. En WordPress/Apache/Nginx se deben configurar sus redirecciones equivalentes. Verificar códigos HTTP, canónicas, robots y sitemap después de la migración; enviar el sitemap en Google Search Console y Bing Webmaster Tools con cuentas autorizadas. Revisar el cortafuegos y robots en producción; no confundir permiso de rastreo con posicionamiento ni entrenamiento con búsqueda.

## Pendientes de validación del titular

Razón social exacta (S.L./S.L.U.), NIF, datos registrales, política de privacidad definitiva y proveedores del alojamiento; acreditación comercial MPM si se quiere afirmar «distribuidor oficial»; experiencia/antigüedad y garantías de plazos si se quieren mostrar como compromisos. No se han inventado reseñas, calificaciones, certificaciones o casos de clientes.

La secuencia a −30 °C está recreada con cuatro escenas, no es vídeo continuo ni un procedimiento técnico. La tercera escena muestra el resultado terminado de un kit de empalme con placas laterales y tornillería, sin representar operaciones de corte, apuntalado o apriete. La referencia comercial habla de −25 °C: la capacidad real debe confirmarse. Fotos de trabajos seleccionadas del material aportado, con dos retoques de presentación conservados fuera del sitio en `outputs/retoques/`.
