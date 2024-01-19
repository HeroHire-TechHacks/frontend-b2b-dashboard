export interface IResponse {
	isError: boolean;
	message: string;
	data: unknown;
	responseStringCode: string;
	responseStatusCode: number;
	responseId: number;
}
