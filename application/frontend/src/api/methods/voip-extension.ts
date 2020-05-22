import { API_POST, ResponseAll } from "../utils";


export interface VoipExtension {
	// id: number;
	// trunk_id: number;
	// user_id: number;
	// virtual_extension: string;
	// extension: string;
	// password: string;

	id: string;
	domain_uuid: string;
	extension: string;
	number_alias: string;
	password: string;
	description: string;
}

export interface VoipExtensionsAllResponse extends ResponseAll<VoipExtension> {}

export const voipExtensionGetAllByUserId = (data: {
	user_id: number;
}) => API_POST<VoipExtensionsAllResponse>(`/voip-extension/all/by-user`, data);

export const voipExtensionGetAllMy = () => API_POST<VoipExtensionsAllResponse>(`/voip-extension/all/my`);


(window as any).voipExtensionGetAllByUserId = voipExtensionGetAllByUserId;