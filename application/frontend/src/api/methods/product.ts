import { API_POST, ResponseAll, ResponseAdd, ResponseDelete } from "../utils";


export interface Product {
	id: number;
	name: string;
	description: string;
}


export const productGetAll = () => API_POST<ResponseAll<Product>>(`/product/all`);
export const productAdd = (data: any) => API_POST<ResponseAdd<Product>>(`/product/add`, data);
export const productDelete = (data: {
	product_id: number;
}) => API_POST<ResponseDelete>(`/product/delete`, data);
