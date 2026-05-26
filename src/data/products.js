import heroBanner from '../assets/images/hero-banner.svg'
import headphonesImage from '../assets/images/headphones.svg'
import keyboardImage from '../assets/images/keyboard.svg'
import laptopImage from '../assets/images/laptop.svg'

const products = [
  {
    id: 1,
    name: 'Gaming Laptop GX-15',
    price: 450000,
    category: 'Laptops',
    image: laptopImage,
    images: [laptopImage, heroBanner],
    description: 'High performance gaming laptop with RTX graphics and a fast CPU.',
    specs: { cpu: 'Intel i7', ram: '16GB', storage: '1TB SSD' },
    reviews: [{ user: 'Aisha', rating: 5, text: 'Fantastic performance.' }],
  },
  {
    id: 2,
    name: 'Mechanical Keyboard MK-88',
    price: 85000,
    category: 'Accessories',
    image: keyboardImage,
    images: [keyboardImage, heroBanner],
    description: 'Durable mechanical keyboard with RGB lighting and tactile switches.',
    specs: { switches: 'Blue', layout: 'TKL' },
    reviews: [{ user: 'Kelechi', rating: 4, text: 'Solid build quality.' }],
  },
  {
    id: 3,
    name: 'Studio Headphones HD-200',
    price: 120000,
    category: 'Accessories',
    image: headphonesImage,
    images: [headphonesImage, heroBanner],
    description: 'Comfortable studio headphones with crisp sound and noise isolation.',
    specs: { impedance: '32 Ohms', type: 'Over-ear' },
    reviews: [{ user: 'Michael', rating: 5, text: 'Excellent sound quality.' }],
  },
]

export default products
