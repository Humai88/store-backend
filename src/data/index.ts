import Product from "./model/product";
import { Category } from "./type";

import {
  xboxDescription,
  airpodsDescription,
  airtagDescription,
} from "./items/descriptions";
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet("Size").addItemList([
  new Attribute("40"),
  new Attribute("41"),
  new Attribute("42"),
  new Attribute("43"),
]);

const clothesSizes = new AttributeSet("Size").addItemList([
  new Attribute("Small", "S"),
  new Attribute("Medium", "M"),
  new Attribute("Large", "L"),
  new Attribute("Extra Large", "XL"),
]);

const colors = new AttributeSet("Color")
  .setType(AttributeType.swatch)
  .addItemList([
    new Attribute("Green", "#44FF03"),
    new Attribute("Cyan", "#03FFF7"),
    new Attribute("Blue", "#030BFF"),
    new Attribute("Black", "#000000"),
    new Attribute("White", "#FFFFFF"),
  ]);

const yesNo = [new Attribute("Yes"), new Attribute("No")];

const capacity = new AttributeSet("Capacity").addItemList([
  new Attribute("512G"),
  new Attribute("1T"),
]);

const products: Product[] = [
  new Product("Denim Jacket")
    .setId("zara-jacket")
    .setPrice(130)
    .addImages([
      "https://i.ibb.co/tHTJYDL/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/ZdK4q2L/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/dkmYSDN/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Zara")
    .setDescription(
      "<p>Comfortable and versatile, slip into a denim jacket for easy, off-duty style. An ideal alternative to coats, our women's denim jackets are an on-trend essential. In a variety of washes and fabrics, wear a cropped denim jacket with a slogan tee, co-ordinating jeans and trainers. Take it to the evening and wear a black denim jacket with a cami top and heels. Style: Oversized JacketsFabric: Denim</p>"
    )
    .setCategory(Category.clothes),

  new Product("Leather Jacket")
    .setId("burton-leather-jacket")
    .setPrice(430)
    .addImages([
      "https://i.ibb.co/wNjktWG/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/Kq8x1GW/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/MNSLk39/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Burton")
    .setDescription(
      "<p>This best-selling style from Barneys Originals is made from super soft sheep nappa leather. The jacket features ribbed detailing on the sleeves which is enhanced with wadding. It also has an asymmetric zipline</p>"
    )
    .setCategory(Category.clothes),

  new Product("Casual Dress")
    .setId("mango-casual-dress")
    .setPrice(110)
    .setDescription(
      "<p> Crafted in a slinky jersey, this printed midi dress is designed in a fixed wrap style. Complete with long length sleeves and an all-over geometric print, pair with heeled boots for an easy-to-wear evening look. Model wears a size 10 and is 176cm.</p>"
    )
    .addImages([
      "https://i.ibb.co/JxfcPk5/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
      "https://i.ibb.co/KLjD3X1/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
      "https://i.ibb.co/94y6hVV/Graceful-european-woman-in-winter-fur-coat-and-stylish-dress-sitting-in-studio-over-white-background.jpg",
    ])
    .setCategory(Category.clothes)
    .setBrand("Mango")
    .setInStock(false)
    .addAttributeSet(clothesSizes),

  new Product("Coat")
    .setId("coat-canada-goose")
    .setPrice(355)
    .addImages([
      "https://i.ibb.co/8MrtHfC/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/KjkCyrZ/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/TYDJQw8/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Canada Goose")
    .setDescription(
      "<p>This coat comes in soft, thick faux wool fabric and features a cocoon silhouette known for its loose-fit and voluminous sleeves - perfect for layering, a longline design draping just below the knee, lapels at the front, and button-front closure. Style over a hoodie or sweater. Style:Wool Coat Fit: Relaxed Length: Longline Occasion: Casual Model is 5'9'' and wears a size M (US size 6/UK size 10).</p>"
    )
    .setCategory(Category.clothes),

  new Product("Hoodie")
    .setId("superdry-hoodie")
    .setPrice(50)
    .addImages([
      "https://i.ibb.co/5T6VXq9/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/DRsgf5M/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/5RRbbmz/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Superdry")
    .setDescription(
      "<p>Red overhead hoodie with a front pocket. Size & Fit: Model's height: 6 foot 1 Model is wearing size: Medium Fabric & Care:52% Cotton, 48% Polyester. Machine washable.</p>"
    )
    .setCategory(Category.clothes),

  new Product("Shirt")
    .setId("superdry-shirt")
    .setPrice(70)
    .addImages([
      "https://i.ibb.co/CHJszbQ/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
      "https://i.ibb.co/G2HN7vd/Handsome-relaxed-redhead-man-standing-casual-holding-hands-in-pockets-and-smiling-happy-Strong-attra.jpg",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Superdry")
    .setDescription(
      "<p>In a classic checked design, the Superdry shirt is an easy wardrobe staple. It features a button down front and 2 chest pockets.</p>"
    )
    .setCategory(Category.clothes),

  new Product("PlayStation 5")
    .setId("ps-5")
    .setPrice(700)
    .addImages([
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    ])
    .addAttributeSet(colors)
    .addAttributeSet(capacity)
    .setBrand("Sony")
    .setInStock(false)
    .setDescription(
      "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>"
    )
    .setCategory(Category.tech),

  new Product("Xbox Series S 512GB")
    .setId("xbox-series-s")
    .setPrice(277)
    .addImages([
      "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
    ])
    .setBrand("Microsoft")
    .setInStock(false)
    .addAttributeSet(colors)
    .addAttributeSet(capacity)
    .setDescription(xboxDescription)
    .setCategory(Category.tech),

  new Product("iMac 2021")
    .setId("apple-imac-2021")
    .setPrice(1400)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ])
    .addAttributeSet(
      new AttributeSet("Capacity")
        .addItem(new Attribute("256GB"))
        .addItem(new Attribute("512GB"))
    )
    .setDescription("The new iMac!")
    .addAttributeSet(new AttributeSet("With USB 3 ports").addItemList(yesNo))
    .addAttributeSet(
      new AttributeSet("Touch ID in keyboard").addItemList(yesNo)
    )
    .setCategory(Category.tech),

  new Product("iPhone 12 Pro")
    .setId("apple-iphone-12-pro")
    .setPrice(830)
    .setBrand("Apple")
    .setDescription("This is iPhone 12. Nothing else to say.")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ])
    .addAttributeSet(capacity)
    .addAttributeSet(colors)
    .setCategory(Category.tech),

  new Product("AirPods Pro")
    .setId("apple-airpods-pro")
    .setPrice(249)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    ])
    .setInStock(false)
    .setDescription(airpodsDescription)
    .setCategory(Category.tech),

  new Product("AirTag")
    .setId("apple-airtag")
    .setPrice(100)
    .setBrand("Apple")
    .addImages([
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ])
    .setDescription(airtagDescription)
    .setCategory(Category.tech),
];

export { products };
