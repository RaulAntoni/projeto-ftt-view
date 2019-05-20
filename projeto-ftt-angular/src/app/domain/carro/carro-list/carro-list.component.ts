import { CarroService } from "./../carro.service";
import { Component, OnInit } from "@angular/core";
import { Carro } from '../carro';

@Component({
  selector: "app-carro-list",
  templateUrl: "./carro-list.component.html",
  styleUrls: ["./carro-list.component.css"]
})
export class CarroListComponent implements OnInit {

  /**
   * @var carros
   */
  public carros: Array<Carro> = [];

  /**
   *
   */
  constructor(private carroService: CarroService) {
  }

  ngOnInit() {
    this.carroService.findAll().subscribe(response => this.carros = response);
  }

  public onDelete(id: number) {

  }
}
