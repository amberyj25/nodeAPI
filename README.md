## 介紹

- wine project的後端API
- 使用 Node 串接 MongoDB
- Server 部署在 cyclic.sh 平台
- 備註：
  - 前端的github: https://github.com/amberyj25/wineUseVue3
  - 網站: https://amberyj25.github.io/wineSpace/dist/#/

## 可用以下 url 在 Postman call API

- API 部署在 cyclic.sh 平台
  - GET API - products
    - https://fluffy-gold-tuxedo.cyclic.app/productListA
    - https://fluffy-gold-tuxedo.cyclic.app/productListB
  - GET API - shoppingCart
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartA
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartB
  - POST API - 新增 product 到 shoppingCart
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartA
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartB
  - DELETE API - 刪除shoppingCart product
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartA/${payload}
    - https://fluffy-gold-tuxedo.cyclic.app/shoppingCartB/${payload}
  - POST API - signOut
    - https://fluffy-gold-tuxedo.cyclic.app/logout
