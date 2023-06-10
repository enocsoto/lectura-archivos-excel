class ProductTableMap {
    constructor(data) {
      this.Marca = data.Marca || "";
      this.Modelo = data.Modelo || "";
      this.Comentario = data.Comentario || "";
      this.Descripcion = data["Descripción"] || "";
      this.Precio = data.Precio || "";
      this.Fotos = data.Fotos || "";
      this.Tiene_variantes = data.Tiene_variantes || "";
      this.Stock = data.Stock || "";
      this.SKU = data.SKU || "";
      this.Condicion = data.Condicion || "";
      this.Garantia = data.Garantia || "";
      this.Envios = data.Envios || "";
      this.Codigo_universal = data.Codigo_universal || "";
      this.Nombre_categoria = data.Nombre_categoria || "";
      this.Cantidad_variantes = data.Cantidad_variantes || "";
      this.Variante_nombre_1 = data.Variante_nombre_1 || "";
      this.Variante_valor_1 = data.Variante_valor_1 || "";
      this.Variante_stock_1 = data.Variante_stock_1 || "";
      this.Variante_sku_1 = data.Variante_sku_1 || "";
      this.Variante_cod_universal_1 = data.Variante_cod_universal_1 || "";
      this.Variante_active_1 = data.Variante_active_1 || "";
      this.Variante_fotos_1 = data.Variante_fotos_1 || "";
      this.Variante_nombre_2 = data.Variante_nombre_2 || "";
      this.Variante_valor_2 = data.Variante_valor_2 || "";
      this.Variante_stock_2 = data.Variante_stock_2 || "";
      this.Variante_sku_2 = data.Variante_sku_2 || "";
      this.Variante_cod_universal_2 = data.Variante_cod_universal_2 || "";
      this.Variante_active_2 = data.Variante_active_2 || "";
      this.Variante_fotos_2 = data.Variante_fotos_2 || "";
      this.Variante_nombre_3 = data.Variante_nombre_3 || "";
      this.Variante_valor_3 = data.Variante_valor_3 || "";
      this.Variante_stock_3 = data.Variante_stock_3 || "";
      this.Variante_sku_3 = data.Variante_sku_3 || "";
      this.Variante_cod_universal_3 = data.Variante_cod_universal_3 || "";
      this.Variante_active_3 = data.Variante_active_3 || "";
      this.Variante_fotos_3 = data.Variante_fotos_3 || "";
    }
  }
  module.exports = ProductTableMap