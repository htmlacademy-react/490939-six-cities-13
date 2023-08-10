type reviewData = {
  'avatar': string;
  'name': string;
  'rating': number;
  'text': string;
  'date': string;
}

type offerData = {
  'id': number;
  'images': string[];
  'class': string;
  'name': string;
  'rating': number;
  'entire': string;
  'bedrooms': number;
  'adults': number;
  'price': number;
  'currency': string;
  'inside': string[];
  'hostAvatar': string;
  'hostName': string;
  'hostStatus': string;
  'text': string[];
  'reviews': reviewData[];
}

const offers: offerData[] = [
  {
    'id': 1,
    'images': [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    'class': 'Premium',
    'name': 'Beautiful &amp; luxurious studio at great location',
    'rating': 4.8,
    'entire': 'Apartment',
    'bedrooms': 3,
    'adults': 4,
    'price': 120,
    'currency': '&euro;',
    'inside': [
      'Wi-Fi',
      'Washing machine',
      'Towels', 'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    'hostAvatar': 'avatar-angelina.jpg',
    'hostName': 'Angelina',
    'hostStatus': 'Pro',
    'text': [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],
    'reviews': [
      {
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'id': 2,
    'images': [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    'class': 'Premium',
    'name': 'Beautiful &amp; luxurious studio at great location',
    'rating': 3,
    'entire': 'Apartment',
    'bedrooms': 1,
    'adults': 2,
    'price': 1020,
    'currency': '&euro;',
    'inside': [
      'Wi-Fi',
      'Washing machine',
      'Towels', 'Heating',
      'Coffee machine',
    ],
    'hostAvatar': 'avatar-angelina.jpg',
    'hostName': 'Angelina',
    'hostStatus': 'Pro',
    'text': [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],
    'reviews': [
      {
        'avatar': 'avatar-max.jpg',
        'name': 'Andy',
        'rating': 3,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-28'
      }
    ]
  },
  {
    'id': 3,
    'images': [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    'class': 'Premium',
    'name': 'Beautiful &amp; luxurious studio at great location',
    'rating': 4.8,
    'entire': 'Apartment',
    'bedrooms': 3,
    'adults': 4,
    'price': 120,
    'currency': '&euro;',
    'inside': [
      'Wi-Fi',
      'Washing machine',
      'Towels', 'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    'hostAvatar': 'avatar-angelina.jpg',
    'hostName': 'Angelina',
    'hostStatus': 'Pro',
    'text': [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],
    'reviews': [
      {
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'id': 4,
    'images': [
      'room.jpg',
      'apartment-01.jpg',
      'apartment-02.jpg',
      'apartment-03.jpg',
      'studio-01.jpg',
      'apartment-01.jpg'
    ],
    'class': 'Premium',
    'name': 'Beautiful &amp; luxurious studio at great location',
    'rating': 4.8,
    'entire': 'Apartment',
    'bedrooms': 3,
    'adults': 4,
    'price': 120,
    'currency': '&euro;',
    'inside': [
      'Wi-Fi',
      'Washing machine',
      'Towels', 'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    'hostAvatar': 'avatar-angelina.jpg',
    'hostName': 'Angelina',
    'hostStatus': 'Pro',
    'text': [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],
    'reviews': [
      {
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
];

export type { offerData, reviewData };
export default offers;
