export interface User {
  'id': number;
  'name': string;
  'username': string;
  'email': string;
  'address': UserAddress;
  'phone': string;
  'website': string;
  'company': UserCompany;
}

export interface UserAddress {
  'street': string;
  'suite': string;
  'city': string;
  'zipcode': string;
  'geo': UserCoordinates;
}

export interface UserCompany {
  'name': string;
  'catchPhrase': string;
  'bs': string;
}

export interface UserCoordinates {
  'lat': string;
  'lng': string;
}
