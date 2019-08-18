import { Injectable } from '@nestjs/common';
import { Hotel } from '../../app.model';

@Injectable()
export class HotelsService {
  private hotels = [...hotels];

  public async getHotels() {
    return this.hotels;
  }
}

const hotels = [
  {
    id: '1234',
    name: 'City Hotel',
    description: 'Testdescription 1234',
    location: { city: 'Amsterdam', country: 'Netherlands' }
  },
  {
    id: '2345',
    name: 'Park Hotel',
    description: 'Testdescription 1234',
    location: { city: 'Berlin', country: 'Germnany' }
  },
  {
    id: '3456',
    name: 'Garden Hotel',
    description: 'Testdescription 1234',
    location: { city: 'London', country: 'United Kingdom' }
  }
];
