

export type Translation = {
  height: string;
  lenght: string;
  width: string;
  results: string;
  approximatePowerRequired: string;
  recommendedPower: string;
}


export type Defaults = {
  height: number;
  lenght: number;
  width: number;
}


export type Conf = {
  translation: Translation,
  defaults: Defaults,
}