import { API_POST, ResponseAll, ResponseAdd, ResponseUpdate } from "../utils";


export interface Stop {
	id: number;
	load_id: number;
	time_from: string;
	time_to: string;
	street: string;
	city: string;
	contact: string;
	facility: string;

}

export interface LoadStatus {
	id: number;
	name: string;
	color: string;
}

export interface Load {
	id: number;
	user_id: number;
	edited_by_user_id: number;
	status_id: number;
	load_number: string;
	vendor_mc: string;
	vendor_name: string;
	vendor_phone: string;
	vendor_address: string;
	customer_name: string;
	destination_street: string;
	destination_city: string;
	destination_facility: string;
	weight: number;
	rate: number;
	detention: number;
	fee: number;
	total_cost: number;
	commodity: number;
	pallet_count: number;
	palletized: boolean;
	time_log: string;
}

// export interface LoadsAllResponse extends ResponseAll<Load> {}
// export interface LoadAddResponse extends ResponseAdd<Load> {}

export interface LoadsAllResponse {
	loads: Load[];
	load_statuses: LoadStatus[];
}

export interface LoadAddResponse extends ResponseAdd<Load> {}
export interface LoadUpdateResponse extends ResponseUpdate<Load> {}

export const loadsGetAllForClient = () => API_POST<LoadsAllResponse>(`/load/all/for-client`);
export const loadsGetAllForManager = () => API_POST<LoadsAllResponse>(`/load/all/for-manager`);
export const loadsGetAllLimitedForClient = (data: { ignores: string[] } = {} as any) => API_POST<LoadsAllResponse>(`/load/all/limited/for-client`, data);
export const loadsGetAllLimitedForManager = (data: { ignores: string[] } = {} as any) => API_POST<LoadsAllResponse>(`/load/all/limited/for-manager`, data);
export const loadHistory = (data: { id: string, }) => API_POST<LoadsAllResponse>(`/load/history`, data);
export const loadCancelByClient = (data: { id: string, }) => API_POST<LoadsAllResponse>(`/load/cancel-by-client`, data);
export const loadAdd = (data: any) => API_POST<LoadAddResponse>(`/load/add`, data);
export const loadUpdateByClient = (data: any) => API_POST<any>(`/load/update-by-client`, data);
export const loadUpdateByManager = (data: any) => API_POST<any>(`/load/update-by-manager`, data);
export const loadGetByLoadNumber = (data: { load_number: string }) => API_POST<any>(`/load/get-by-number`, data);
export const loadGetVendorInfoByMC = (data: { vendor_mc: string }) => API_POST<any>(`/load/vendor-info-by-mc`, data);

export interface LoadStatusesAllResponse extends ResponseAll<LoadStatus> {}
export const loadStatusesGetAll = () => API_POST<LoadStatusesAllResponse>(`/load/status/all`);


(window as any).loadsGetAllLimitedForClient = loadsGetAllLimitedForClient;
(window as any).loadsGetAllLimitedForManager = loadsGetAllLimitedForManager;
(window as any).loadsGetAllForClient = loadsGetAllForClient;
(window as any).loadsGetAllForManager = loadsGetAllForManager;
