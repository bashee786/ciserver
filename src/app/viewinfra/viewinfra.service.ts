import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewinfraService {

  url = 'http://localhost:8090/api/server/data';
    
    prodUrl = 'http://localhost:8090/api/server/data/Production';

    devUrl = 'http://localhost:8090/api/server/data/Development';

    stagingUrl = 'http://localhost:8090/api/server/data/Staging';

    constructor(private http: HttpClient){}

    serversData(){
       return this.http.get(this.url);
    }

    prodData(){
        return this.http.get(this.prodUrl);
    }

    devData(){
        return this.http.get(this.devUrl);
    }

    stagingData(){
        return this.http.get(this.stagingUrl);
    }
}
