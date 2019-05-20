import { Component, OnInit } from '@angular/core';
import { Garagem } from '../garagem';
import { GaragemService } from '../garagem.service';

@Component({
  selector: 'app-garagem-list',
  templateUrl: './garagem-list.component.html',
  styleUrls: ['./garagem-list.component.css']
})
export class GaragemListComponent implements OnInit {

  public garagens: Array<Garagem> = [];

  /**
   * Construtor da classe.
   *
   * @param garagemService
   */
  constructor(private garagemService: GaragemService) { }

  ngOnInit() {
    this.garagemService.findAll().subscribe(response => this.garagens = response);
  }

  public onDelete(id: number) {

  }
}
