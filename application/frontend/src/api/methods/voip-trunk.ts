import { API_POST, ResponseAll } from "../utils";


export interface VoipTrunk {
	gateway_uuid: string;
	domain_uuid?: string;
	gateway?: string;
	username?: string;
	password?: string;
	distinct_to?: string;
	auth_username?: string;
	realm?: string;
	from_user?: string;
	from_domain?: string;
	proxy?: string;
	register_proxy?: string;
	outbound_proxy?: string;
	expire_seconds?: number;
	register?: string;
	register_transport?: string;
	retry_seconds?: number;
	extension?: string;
	ping?: string;
	caller_id_in_from?: string;
	supress_cng?: string;
	sip_cid_type?: string;
	codec_prefs?: string;
	channels?: number;
	extension_in_contact?: string;
	context?: string;
	profile?: string;
	hostname?: string;
	enabled?: string;
	description?: string;

}

export interface VoipTrunksAllResponse extends ResponseAll<VoipTrunk> {}

export const voipTrunkGetAllByUserId = (data: {
	user_id: number;
}) => API_POST<VoipTrunksAllResponse>(`/voip-trunk/all/by-user`, data);

export const voipTrunkGetAllMy = () => API_POST<VoipTrunksAllResponse>(`/voip-trunk/all/my`);


(window as any).voipTrunkGetAllByUserId = voipTrunkGetAllByUserId;
(window as any).voipTrunkGetAllMy = voipTrunkGetAllMy;