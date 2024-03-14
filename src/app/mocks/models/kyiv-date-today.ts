import { TripDate } from "../interfaces/trip-date";

export const kyivDateToday: TripDate = 
  { city: 'Kyiv', 
    startDate: new Date(), 
    endDate: new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + 7)
  }
;