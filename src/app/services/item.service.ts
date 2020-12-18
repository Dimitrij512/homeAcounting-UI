import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public rootHost: string;

  constructor(private http: HttpClient) { }

  getItemById(id: string) {
    this.rootHost = 'http://localhost:8085'
    return this.http.get('http://localhost:8085/item/id/5f9995f2ac27695bec1256c7');
  }

  getItemsByBalanceIdAndData(balancedId: String, fromDate: NgbDate, toDate: NgbDate ) {
    const from = new Date(fromDate.year, fromDate.month - 1, fromDate.day);
    const to = new Date(toDate.year, toDate.month - 1, toDate.day);

    //return this.http.get('http://localhost:8085/item/balancedId/5fd9e34a411ef71140dfc0f2/start/1603801414/end/1608121414')
    return this.http.get(this.rootHost + '/item/balancedId/' + balancedId + '/start/' + from.getTime() +'/end/' + to.getTime())
  }
}
