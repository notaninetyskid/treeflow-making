export interface itemsToDrrop {
   id: string,
   title: string,
   type: string,
   description: string,
   dragging: boolean,
   data?: {},
   sidebar?: string,
   yes?: itemsToDrrop[],
   no?: itemsToDrrop[],
}