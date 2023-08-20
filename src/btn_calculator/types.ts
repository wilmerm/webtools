

export type Translation = {
  height: string;
  lenght: string;
  width: string;
  results: string;
  suggestedPower: string;
  recommendedPower: string;
}


export type Defaults = {
  height: number;
  lenght: number;
  width: number;
  credits: string;
}


export type Conf = {
  translation: Translation,
  defaults: Defaults,
}