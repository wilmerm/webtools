

export type Translation = {

}


export type Defaults = {
  mainCurrencyCode: string,
}


export type Conf = {
  translation: Translation,
  defaults: Defaults,
}


export type Currency = {
  code: number;
}


export type Currencies = {
  [key: string]: number;
}