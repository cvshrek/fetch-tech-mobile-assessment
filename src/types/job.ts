export type TRoute = {
  name: string,
  address: string,
  lat: number,
  lng: number,
  status?: string,
  time?: string,
}

export type TJob = {
  id: number,
  code?: string,
  routes: TRoute[],
  amount: number,
  duration: number,
};
