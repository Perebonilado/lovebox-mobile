export interface LoveboxItemInterface {
  title: string;
  id: number | string;
}

export interface RetrieveLoveboxQuery {
  token: string;
}

export interface RetrieveLoveboxResponseData {
  _id: string;
  members: {_id: string; username: string}[];
  title: string;
}

export interface RetrieveLoveboxResponse {
  data: RetrieveLoveboxResponseData[]
}
