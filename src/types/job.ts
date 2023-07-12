export type TRoute = {
  name: string,
  address: string,
  lat: number,
  lng: number,
}

export type TJob = {
  id: number,
  routes: TRoute[],
  amount: number,
  duration: number,
};
