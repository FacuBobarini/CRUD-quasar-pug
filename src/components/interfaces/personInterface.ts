export interface PeopleInterface{
  _id:string;
  name:string;
  lastName:string;
  dni:number;
}

export interface PersonInterface{
  _id?:string;
  name:string;
  lastName:string;
  dni:number;
}

export interface PeopleResponse{
  status: string;
  person?: PersonInterface;
  people?:[PeopleInterface];
}

export interface AxiosResponse{
  data: PeopleResponse;
}