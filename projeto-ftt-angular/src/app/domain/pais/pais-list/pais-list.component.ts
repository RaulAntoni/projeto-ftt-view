import { Component, OnInit } from "@angular/core";
import { Pais } from "../pais";
import { PaisService } from "../pais.service";
import { MessageService } from "src/app/shared/message/message.service";

@Component({
  selector: "app-pais-list",
  templateUrl: "./pais-list.component.html",
  styleUrls: ["./pais-list.component.css"]
})
export class PaisListComponent implements OnInit {

  /**
   * @var paises
   */
  public paises: Array<Pais> = [];

  /**
   * Construtor da classe.
   *
   * @param paisService
   * @param messageService
   */
  constructor(
    private paisService: PaisService,
    private messageService: MessageService
  ) {}

  /**
   * Componente inicial
   */
  ngOnInit(): void {
    this.paisService.findAll().subscribe(response => (this.paises = response));
  }

  /**
   * Remove um pais.
   */
  public onDelete(id: number, index: number) {
    const result$ = this.messageService.showConfirm(
      "Você deseja realmente excluir este registro?"
    );

    result$.then(result => {
      if (result.value) {
        this.paisService.remover(id).subscribe(
          () => {
            this.messageService.showAlertSuccess(
              "Registro excluído com sucesso."
            );
            this.paises.splice(index, 1);
          },
          error => {
            this.messageService.showAlertDanger(error);
          }
        );
      }
    });
  }
}
