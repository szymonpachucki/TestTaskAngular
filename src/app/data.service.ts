// data.service.ts
import { Injectable } from '@angular/core';
import { Campaign } from './types/campaigns';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private balance: number = 10000;
  private campaigns: Campaign[] = [
    {
      id: 1,
      name: 'test Campaign',
      productName: 'iPhone 14',
      keyWords: ['save', 'top-rated'],
      bidAmount: 1,
      fund: 400,
      status: 'active',
      town: 'kraków',
      radius: 50,
    },
    {
      id: 2,
      name: 'test Campaign nazwa kampani mega długa ',
      productName: 'iPhone 14',
      keyWords: ['save', 'top-rated'],
      bidAmount: 3,
      fund: 2000,
      status: 'active',
      town: 'Warszawa-wschodnia',
      radius: 50,
    },
    {
      id: 3,
      name: 'test Campaign',
      productName: 'iPhone 14',
      keyWords: ['save', 'top-rated'],
      bidAmount: 5,
      fund: 200,
      status: 'inactive',
      town: 'kraków',
      radius: 50,
    }
  ];

  private products: string[] = [
    'iPhone 13',
    'Samsung Galaxy S21',
    'Google Pixel 6',
    'OnePlus 9',
    'Xiaomi Mi 11',
    'Huawei P40 Pro'
  ];

  private towns: string[] = [
    'Warszawa',
    'Kraków',
    'Gdańsk',
    'Poznań',
    'Wrocław',
    'Łódź'
  ];
  private keyWords: string[] = [
    'shop',
    'buy',
    'sell',
    'cart',
    'checkout',
    'product',
    'order',
    'payment',
    'discount',
    'promotion',
    'shipping',
    'delivery',
    'customer',
    'account',
    'login',
    'register',
    'wishlist',
    'review',
    'rating',
    'recommendation',
    'sale',
    'deal',
    'offer',
    'promotion',
    'coupon',
    'voucher',
    'inventory',
    'stock',
    'availability',
    'tracking',
    'return',
    'refund',
    'exchange',
    'shopping',
    'online',
    'store',
    'marketplace',
    'vendor',
    'brand',
    'category',
    'search',
    'filter',
    'sort',
    'compare',
    'wishlist',
    'notification',
    'subscription',
    'newsletter',
    'membership',
    'loyalty',
    'reward',
    'points',
    'affiliate',
    'commission',
    'recommend',
    'explore',
    'trending',
    'new arrivals',
    'bestseller',
    'popular',
    'featured',
    'top-rated',
    'buy now',
    'add to cart',
    'checkout',
    'secure payment',
    'fast delivery',
    'shop now',
    'limited stock',
    'flash sale',
    'clearance',
    'exclusive',
    'premium',
    'authentic',
    'sale off',
    'daily deals',
    'gift card',
    'wishlist',
    'save',
    'subscribe',
    'loyalty program',
    'customer support',
    'live chat',
    'contact us',
    'faq',
    'terms and conditions',
    'privacy policy',
    'shipping policy',
    'return policy',
    'track order',
    'gift wrapping',
    'customization',
    'virtual try-on',
    'size chart',
    'fit guide',
    'style quiz',
  ];
  private id:number = 3;

  getTowns(): string[] {
    return this.towns;
  }

  getId(): number {
    return this.id;
  }

  getProducts(): string[] {
    return this.products;
  }

  getKeyWords(): string[] {
    return this.keyWords;
  }

  getCampaigns(): Campaign[] {
    return this.campaigns;
  }

  updateBalance(amount: number): void {
    this.balance += amount;
  }

  removeCampaign(c: Campaign): void {
    this.campaigns = this.campaigns.filter( (campaign) => campaign.id !== c.id);
  }

  addCampaign(newCampaign: Campaign): void {
    this.campaigns.push(newCampaign);
  }
}
