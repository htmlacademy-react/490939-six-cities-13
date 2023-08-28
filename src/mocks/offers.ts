type TReview = {
  'id': string;
  'avatar': string;
  'name': string;
  'rating': number;
  'text': string;
  'date': string;
}

type TOffer = {
  'city': string;
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
  'reviews': TReview[];
  'lat': number;
  'lng': number;
}

const offers: TOffer[] = [
  {
    'city': 'Amsterdam',
    'id': 1,
    'lat': 52.3909553943508,
    'lng': 4.85309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      },
      {
        'id': '2',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-02-22'
      }
    ]
  },
  {
    'city': 'Amsterdam',
    'id': 2,
    'lat': 52.3609553943508,
    'lng': 4.85309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Andy',
        'rating': 3,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-28'
      }
    ]
  },
  {
    'city': 'Amsterdam',
    'id': 3,
    'lat': 52.3909553943508,
    'lng': 4.929309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'city': 'Amsterdam',
    'id': 4,
    'lat': 52.3809553943508,
    'lng': 4.939309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'city': 'Paris',
    'id': 5,
    'lat': 52.3809553943508,
    'lng': 4.939309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'city': 'Paris',
    'id': 6,
    'lat': 52.3809553943508,
    'lng': 4.939309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      }
    ]
  },
  {
    'city': 'Paris',
    'id': 7,
    'lat': 52.3909553943508,
    'lng': 4.85309666406198,
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
        'id': '1',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '2019-04-24'
      },
      {
        'id': '2',
        'avatar': 'avatar-max.jpg',
        'name': 'Max',
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-02-22'
      }
    ]
  },
];

export type {TOffer, TReview};
export default offers;
