export interface cardInterface {
  titleMsg: string;
  msg: string;
  data: data[];
}

export interface summaryInterface {
  data: data[];
}

interface data {
  category: string;
  score: number;
  icon: string;
}

export interface summaryObjInterface {
  icon: string;
  title: string;
  score: number;
}
