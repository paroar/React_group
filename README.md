

# [4 Birds 1 Stone](https://4birds.netlify.com/)
> La finalidad de esta aplicación es la de proporcionar
> a sus usuarios información relacionada con el 7º arte.
> La idea es que mediante una interfaz sencilla, atractiva
> y amigable el usuario pueda encontrar información precisa,
> detalla y actualizada mediante el uso de distintas APIs


## Funcionalidad
- [x] Buscador de películas
- [x] Catálogo
- [x] Detalles, sinopsis, actores
- [ ] Sección de noticias relacionadas
- [ ] Gráfico popularidad/búsquedas
- [x] Ayuda
- [ ] Usuarios
- [ ] Series

---
### API
Se facilita una api para consultar nominaciones de la gala de los oscar 2020

##### **GET**

Información sobre la gala
**https://api4birds.netlify.com/.netlify/functions/api/getOscarsPoll**

Para obtener información sobre las categorías
**https://api4birds.netlify.com/.netlify/functions/api/getOscarsPoll/topic?topic=\<pattern>**

Para obtener información sobre los nominados
**https://api4birds.netlify.com/.netlify/functions/api/getOscarsPoll/nominations?nominations=\<pattern>**

---
#### USUARIO DE PRUEBA

**paco@paco.com** : pacopaco
