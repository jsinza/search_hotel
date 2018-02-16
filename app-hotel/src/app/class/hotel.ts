export class Hotel {
    constructor(
        public _id:string,
        public id: number,
        public name: string,
        public stars: number,
        public price: number,
        public image: string,
        public amenities:string[]
    ) {
      }
}
