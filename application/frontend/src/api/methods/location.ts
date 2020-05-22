import { API_POST, ResponseAll, ResponseAdd, ResponseDelete } from "../utils";


export interface City {
	id: number;
	name: string;
	state: string;
	country: string;
	population: number;
}

export interface Street {
	id: number;
	name: string;
}

export interface CityAllResponse extends ResponseAll<City> {}
export interface StreetAllResponse extends ResponseAll<Street> {}

export const locationCityTerm = (data: { term: string } = { term: '' }) => API_POST<CityAllResponse>(`/location/city/term`, data);
export const locationStreetTerm = (data: { term: string } = { term: '' }) => API_POST<StreetAllResponse>(`/location/street/term`, data);

(window as any).locationCityTerm = locationCityTerm;
(window as any).locationStreetTerm = locationStreetTerm;
