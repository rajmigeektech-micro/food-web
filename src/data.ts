export type Category = {
  name: string
  image: string
}

export type Recipe = {
  title: string
  image: string
}

export type Collection = Recipe & {
  count: string
}

const menuImage = (number: number, extension = 'jpg') =>
  `/images/menus/menu${number}.${extension}`

export const categories: Category[] = [
  { name: 'Pasta', image: menuImage(8, 'png') },
  { name: 'Pizza', image: menuImage(9, 'png') },
  { name: 'Vegan', image: menuImage(10, 'png') },
  { name: 'Desserts', image: menuImage(11, 'png') },
  { name: 'Smoothies', image: menuImage(12, 'png') },
  { name: 'Breakfast', image: menuImage(13, 'png') },
]

export const featuredRecipes: Recipe[] = [
  { title: 'Delicious Fancy Glazed Blueberry Donuts', image: menuImage(84) },
  { title: 'Pan Fried Cod in Creamy Kale Sauce', image: menuImage(85) },
  { title: 'Berry Madness Biscuits', image: menuImage(86) },
  { title: 'Four Ingredient Oatmeal Pancakes', image: menuImage(87) },
  { title: 'Pumpkin Marshmallow Pie', image: menuImage(88) },
  { title: 'Mighty Cheesy Breakfast Burger', image: menuImage(89) },
]

export const collections: Collection[] = [
  { title: 'Sushi Combos for your Next Party', image: menuImage(14), count: '156 Recipes' },
  { title: 'Everything Bagel', image: menuImage(15), count: '156 Recipes' },
  { title: 'Cook Like a Chef', image: menuImage(16), count: '156 Recipes' },
  { title: 'Exquisite Dinner Recipe Ideas', image: menuImage(17), count: '156 Recipes' },
  { title: 'The Ultimate Cookie Frenzy', image: menuImage(18), count: '156 Recipes' },
  { title: 'For the Love of Donuts', image: menuImage(19), count: '156 Recipes' },
]

export const latestRecipes: Recipe[] = [
  { title: 'Caramel Strawberry Milkshake', image: menuImage(20) },
  { title: 'Cashew Vegan Rice', image: menuImage(21) },
  { title: 'Smoked Salmon Salad Sandwich', image: menuImage(22) },
  { title: 'Salmon in Creamy Sun Dried Tomato Sauce', image: menuImage(23) },
  { title: 'Healthy Jam Waffle Breakfast', image: menuImage(24) },
  { title: 'Chocolate and Banana Jar Cake', image: menuImage(25) },
  { title: 'Caramel Blueberry Scones', image: menuImage(26) },
  { title: 'Blueberry Carrot Cake', image: menuImage(27) },
  { title: 'Vegan Cauliflower Salad', image: menuImage(28) },
  { title: 'Roasted Red Pepper Soup', image: menuImage(29) },
  { title: 'Eggs and Avocado Toast', image: menuImage(30) },
  { title: 'Pork Shoulder Cashew Noodles', image: menuImage(31) },
  { title: 'Toasted Farfalle in Pesto Sauce', image: menuImage(32) },
  { title: 'Cheesy Bacon Burger Sliders', image: menuImage(33) },
  { title: 'Fig and Raisins Oatmeal', image: menuImage(34) },
  { title: 'Silky Smooth Panna Cotta', image: menuImage(35) },
  { title: 'Triple Decker Cranberry Cake', image: menuImage(36) },
  { title: 'Very Berry Healthy Summer Smoothie', image: menuImage(37) },
  { title: 'Crispy Orange Chips', image: menuImage(38) },
  { title: 'Turmeric Lavender Tea', image: menuImage(39) },
  { title: 'Blue Velvet Brownies', image: menuImage(40) },
  { title: 'Birthday Cupcakes', image: menuImage(41) },
  { title: 'Gourmet Fillet in Roasted Almond Sauce', image: menuImage(42) },
  { title: 'Four Ingredient Oatmeal Pancakes', image: menuImage(43) },
]
