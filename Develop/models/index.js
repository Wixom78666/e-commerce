// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'product_id'
});
// Tags belongToMaPny Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'tag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
