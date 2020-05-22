import { API_POST, ResponseAll } from "../utils";


export interface VoipCall {
	id: number;

	domain_name: string;
	direction: string;
	start_stamp: string;
	billsec: string;
	caller_id_number: string;
	destination_number: string;
	gateway_uuid: string;
	gateway_name: string;
}

export interface VoipCallsAllResponse extends ResponseAll<VoipCall> {}

export const voipCallGetAllByUserId = (data: {
	user_id: number,
	offset: number,
	extension: string,
	trunk: string,
}) => API_POST<VoipCallsAllResponse>(`/voip-call/all/by-user`, data);

export const voipCallGetAllMy = (data: {
	offset: number,
	extension: string,
	trunk: string,
}) => API_POST<VoipCallsAllResponse>(`/voip-call/all/my`, data);


(window as any).voipCallGetAllByUserId = voipCallGetAllByUserId;
(window as any).voipCallGetAllMy = voipCallGetAllMy;