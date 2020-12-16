import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemById(id: string) {
    return this.http.get('http://localhost:8085/item/id/5f9995f2ac27695bec1256c7');
  }

  getItemsByBalanceIdAndData() {
    return this.http.get('http://localhost:8085/item/balancedId/5fd9e34a411ef71140dfc0f2/start/1603801414/end/1608121414')
  }
}
