const ProductTableMap = require("./mapping/tabla");
class Product {
  constructor() {
    this.name = "";
    this.description = "";
    this.brand = "";
    this.model = "";
    this.price = 0;
    this.photos = [];
    this.variant_types = [];
    this.price_type = "";
    this.product_condition = "";
    this.use_variants = false;
    this.stock = 0;
    this.condition = "";
    this.warranty = "";
    this.sku = "";
    this.bar_code = "";
    this.user_name = "";
    this.user_id = null;
    this.category_id = null;
    this.variants = [];
    this.shipping = {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
    };
    this.likes = 0;
    this.views = 0;
  }
  setThisByTable(datos = new ProductTableMap()) {
    this.name = datos.Comentario;
    this.description = datos.Descripcion;
    this.brand = datos.Marca;
    this.model = datos.Modelo;
    this.price = datos.Precio;
    this.photos = datos.Images;
    this.variant_types = datos.variant_types;
    this.price_type = datos.Precio;//repetido
    this.product_condition = datos.Condicion; //deberia ser product_condition
    this.use_variants = datos.Tiene_variantes;
    this.stock = datos.Stock;
    this.condition = datos.Condicion; //repetido
    this.warranty = datos.Garantia;
    this.sku = datos.SKU;
    this.bar_code = datos.Codigo_universal;
    this.user_name = null; //no existe
    this.user_id = null; //no existe
    this.category_id = null; //no existe
    this.variants = datos.Cantidad_variantes; // debe ser arreglo
    this.shipping = { //definir tipo de dato
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
    };
    this.likes = 0; //no definido
    this.views = 0; //no definido
    return this;
  }
}

module.exports = { Product };
