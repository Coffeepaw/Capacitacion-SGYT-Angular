import {Injectable} from '@angular/core';
import {Bitacora} from "../../../model/interfaces/Bitacora";

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  BITACORA_KEY: string = "BITACORA_KEY";

  constructor() {
  }

  bitacora: Bitacora[] = [];

  addRegistry(registry: Bitacora) {
    this.bitacora = this.bitacora.reverse();
    this.bitacora.push(registry);
    this.bitacora = this.bitacora.reverse();
    localStorage.setItem(this.BITACORA_KEY, JSON.stringify(this.bitacora));
  }

  resetRegistry() {
    this.bitacora = [];
    localStorage.setItem(this.BITACORA_KEY, JSON.stringify(this.bitacora));
  }

  getBitacora(): Bitacora[] {
    let bitacoraStorage = localStorage.getItem(this.BITACORA_KEY);

    if (bitacoraStorage) {
      this.bitacora = JSON.parse(bitacoraStorage);
    }
    return this.bitacora;
  }


}
