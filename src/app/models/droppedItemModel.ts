export interface itemsToDrrop {
   id: string,
   name: string,
   type: string,
   description: string,
   dragging: boolean,
   yes?: itemsToDrrop[],
   no?: itemsToDrrop[],
}