import { Pensamento } from '../pensamentos/pensamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  // Decorator responsável por sinalizar pro Angular que essa classe é injetável.
  providedIn: 'root', // provedor que diz que esse decorator é visível em toda a aplicação+
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento._id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluir(_id: string): Observable<Pensamento> {
    const url = `${this.API}/${_id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(_id: string): Observable<Pensamento> {
    const url = `${this.API}/${_id}`;
    return this.http.get<Pensamento>(url);
  }
}
