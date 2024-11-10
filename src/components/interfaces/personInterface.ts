
export interface PersonInterface{
  _id:string;
  name:string;
  lastName:string;
  dni:number;
}

export interface PeopleResponse{
  status: string;
  person?: PersonInterface;
  people?:[PersonInterface];
}

export interface AxiosResponse{
  data: PeopleResponse;
}