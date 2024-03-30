import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
}) export class sharedService {

    public stuffShared = new Subject();
    public dataToDrop = new Subject();

    stuffFunction(data: any) {
        console.log(data)
        return this.stuffShared.next(data)

    }

    dataToDropFunc(data: any) {
        console.log(data, '18h logged')
     this.dataToDrop.next(data)
    }
}