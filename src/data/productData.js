import headsetImg from '../assets/images/headset.png';
import keyboardImg from '../assets/images/Keyboard.png';
import mouseImg from '../assets/images/mouse.png';
import chairImg from '../assets/images/chair.png';
import cleaningToolsImg from '../assets/images/cleaning_tools.png';
import homeStorageImg from '../assets/images/home_Storage.png';
import homeDecorImg from '../assets/images/home_decor.png';
import beddingImg from '../assets/images/bedding.png';
import playImg from '../assets/images/play.png';
import cookerImg from '../assets/images/Cooker.png';
import coffeeImg from '../assets/images/Coffe.png';
import potsImg from '../assets/images/pots.png';
import kettleImg from '../assets/images/kettle.png';
import officeImg from '../assets/images/office.png';
import jeansImg from '../assets/images/jeans.png';
import topsImg from '../assets/images/tops.png';
import dressImg from '../assets/images/dress.png';
import shoesImg from '../assets/images/shoes.png';
import kidsImg from '../assets/images/kids.png';
import kitchenImg from '../assets/images/kitchen.png';
import homeImg from '../assets/images/home.png';
import decorImg from '../assets/images/decor.png';
import bathImg from '../assets/images/bath.png';

export const productData = [
  {
    id: 'gaming-accessories',
    title: 'Gaming accessories',
    layout: 'quad-grid',
    topRow: [
      { wrapperClass: 'headset', src: headsetImg, alt: '', label: 'Headset', labelStyle: { fontSize: '0.7rem' } },
      { wrapperClass: 'keyboard', src: keyboardImg, alt: '', label: 'Keyboard', labelStyle: { fontSize: '0.7rem' } },
    ],
    bottomRow: [
      { wrapperClass: 'mouse', src: mouseImg, alt: '', label: 'Mouse', labelStyle: { fontSize: '0.7rem' } },
      { wrapperClass: 'chair', src: chairImg, alt: '', label: 'Chair', labelStyle: { fontSize: '0.7rem' } },
    ],
    seeMoreText: 'See More',
    seeMoreHref: '#',
  },
  {
    id: 'home-essentials',
    title: 'Shop for your home essentials',
    layout: 'quad-grid',
    topRow: [
      { wrapperClass: 'cleaners', src: cleaningToolsImg, alt: '', label: ' Cleaning Tools' },
      { wrapperClass: 'storage', src: homeStorageImg, alt: '', label: 'Home Storage' },
    ],
    bottomRow: [
      { wrapperClass: 'decor', src: homeDecorImg, alt: '', label: 'Home Decor' },
      { wrapperClass: 'bed', src: beddingImg, alt: '', label: 'Bedding' },
    ],
    seeMoreText: 'See More',
    seeMoreHref: '#',
  },
  {
    id: 'get-your-game-on',
    title: 'Get your game on',
    layout: 'single',
    src: playImg,
    alt: '',
    useOffiWrapper: false,
    seeMoreText: 'Shop Gaming',
    seeMoreHref: '#',
  },
  {
    id: 'kitchen-appliances',
    title: 'Top categories in Kitchen appliances',
    layout: 'kitchen-grid',
    topItem: { wrapperClass: 'cooker', src: cookerImg, alt: '', label: 'Cooker' },
    bottomRow: [
      { wrapperClass: 'cofe', src: coffeeImg, alt: '', label: 'Coffee Machine' },
      { wrapperClass: 'pots', src: potsImg, alt: '', label: 'Pots & Pans' },
      { wrapperClass: 'kettle', src: kettleImg, alt: '', label: 'Kettles' },
    ],
    seeMoreText: 'Discover more in Home',
    seeMoreHref: '#',
  },
  {
    id: 'new-year-supplies',
    title: 'New year, new supplies',
    layout: 'single',
    src: officeImg,
    alt: '',
    useOffiWrapper: true,
    seeMoreText: 'Shop Gaming',
    seeMoreHref: '#',
  },
  {
    id: 'fashion-deals',
    title: 'Shop deals in Fashion',
    layout: 'quad-grid',
    topRow: [
      { wrapperClass: 'jeans', src: jeansImg, alt: '', label: ' Jeans under $50' },
      { wrapperClass: 'tops', src: topsImg, alt: '', label: 'Tops under $25' },
    ],
    bottomRow: [
      { wrapperClass: 'dress', src: dressImg, alt: '', label: 'Dresses under $30' },
      { wrapperClass: 'shoe', src: shoesImg, alt: '', label: 'Shoes under $50' },
    ],
    seeMoreText: 'See All details',
    seeMoreHref: '#',
  },
  {
    id: 'fill-basket',
    title: 'Fill your basket with joy',
    layout: 'single',
    src: kidsImg,
    alt: '',
    useOffiWrapper: true,
    seeMoreText: 'Shop for easter',
    seeMoreHref: '#',
  },
  {
    id: 'home-arrivals',
    title: 'New home arrivals under $50',
    layout: 'quad-grid',
    topRow: [
      { wrapperClass: 'kitchen', src: kitchenImg, alt: '', label: ' Cleaning Tools' },
      { wrapperClass: 'home', src: homeImg, alt: '', label: 'Home Storage' },
    ],
    bottomRow: [
      { wrapperClass: 'newdecor', src: decorImg, alt: '', label: 'Home Decor' },
      { wrapperClass: 'bedding', src: bathImg, alt: '', label: 'Bedding' },
    ],
    seeMoreText: 'Shop the latest from Home',
    seeMoreHref: '#',
  },
];

const PRICE_MAP = {
  headset: 49.99, keyboard: 79.99, mouse: 24.99, chair: 199.99,
  cleaners: 18.99, storage: 22.99, decor: 15.99, bed: 34.99,
  cooker: 89.99, cofe: 119.99, pots: 44.99, kettle: 34.99,
  jeans: 49.99, tops: 22.99, dress: 28.99, shoe: 45.99,
  kitchen: 24.99, home: 19.99, newdecor: 16.99, bedding: 29.99,
};
export function getItemsFromProduct(product) {
  const price = (item) => item.price ?? PRICE_MAP[item.wrapperClass] ?? 29.99;
  if (product.layout === 'quad-grid') {
    return [...product.topRow, ...product.bottomRow].map((item) => ({
      id: `${product.id}-${item.wrapperClass}`, name: item.label.trim(), image: item.src, price: price(item),
    }));
  }
  if (product.layout === 'kitchen-grid') {
    return [product.topItem, ...product.bottomRow].map((item) => ({
      id: `${product.id}-${item.wrapperClass}`, name: item.label.trim(), image: item.src, price: price(item),
    }));
  }
  if (product.layout === 'single') {
    return [{ id: product.id, name: product.title, image: product.src, price: product.price ?? 39.99 }];
  }
  return [];
}
export function filterProducts(products, query) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => p.title.toLowerCase().includes(q) || getItemsFromProduct(p).some((i) => i.name.toLowerCase().includes(q)));
}
