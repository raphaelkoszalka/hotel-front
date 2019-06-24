import { EventEmitter } from '@angular/core';

export class BroadcasterService {

  private static emitters: { [event: string]: EventEmitter<any> } = {};

  public static get (event:string): EventEmitter<any> {
    if (!this.emitters[event])
      this.emitters[event] = new EventEmitter<any>();
    return this.emitters[event];
  }

}
