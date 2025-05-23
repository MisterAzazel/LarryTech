import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { query } from 'firebase/firestore';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  documentos$!: Observable<any[]>

  constructor(private firestore: Firestore){}

  ngOnInit(): void {
      this.obtenerDocumentos()
  }

  obtenerDocumentos(){
    const fichasRef = collection(this.firestore, 'fichas');
    this.documentos$ = collectionData(fichasRef, { idField: 'id' });
  }
}
