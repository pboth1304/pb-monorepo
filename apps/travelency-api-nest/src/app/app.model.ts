// export interface Hotel {
//   name: string; // Name of the hotel
//   slug: string; // Url slug of the hotel name
//   description: string; // Description of the hotel
//   amenities: Amenity[]; // Amenities of the hotel
//   // pricePerNight: number; // Price per night of the hotel
//   // rooms: Room[]; // Rooms of the hotel
//   // reviews: Review[]; // Reviews of the hotel
//   coverImage: string; // Cover image to display
//   // ratingsAverage: number; // Average of all ratings (min: 1, max 5)
//   // ratingsQuantity: number; // Quantity of the ratings
//   // location: Location; // Location of the hotel
//   // stars: number; // Stars of the hotel (1-5)
//   images: string[];
// }
// export interface Amenity {
//   id: string;
//   icon: string; // Path to icon
//   type: string; // type of amenity (e.g. Safe, Minibar)
// }
// export interface Room {
//   id: string;
//   name: string; // Room name
//   type: RoomType; // Room type
//   size: number; // size of the room
//   description: string; // Description of the Room
//   amenities: Amenity[]; // Amenities of the Room
//   isAvailable: boolean; // Status of the availabilty
//   coverImage: string; // Cover Image of the Room
//   images: string[]; // Images from the room
// }
export interface Review {
  id: string;
  userId: User; // Id of the User which provided the review
  review: string; // Review
  rating: number; // Rating of the Review (min: 1, max: 5)
  hotel: number; // Id of the hotel there the review belongs to
}
export interface Location {
  id: string;
  country: string;
  street: string;
  number: number;
  postcode: string;
  lat: string; // Latitute
  lng: string; // longitude
}
export interface User {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  reviews: Review[]; // All reviews of the user
  bookings: Booking[]; // All bookings of the user
  password: string;
  passwordConfirm: string;
}
export interface Booking {
  bookingId: string;
  amount: string;
  paymentStatus: 'Open' | 'Paid';
  hotelId: string; // Booked Hotel
  roomId: string; // Booked room of the hotel
  bookedAt: Date; // Booking date
  checkInDat: Date;
  checkOutDate: Date;
}
export type RoomType = 'Single' | 'Double' | 'Deluxe' | 'Suite';
