import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor() {}
  
  handleError(error: any) {
    console.error('Hata oluştu');
    console.log(error.url);
    console.log(error.status);
    console.log(error.name);
    console.log(error.message);
  }

}