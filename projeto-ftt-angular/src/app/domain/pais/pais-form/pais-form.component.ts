import { MessageService } from "src/app/shared/message/message.service";
import { Acao, AcaoSistema } from "./../../../core/acao";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Pais } from "./../pais";
import { Component, OnInit } from "@angular/core";
import { PaisService } from "../pais.service";

@Component({
  selector: "app-pais-form",
  templateUrl: "./pais-form.component.html",
  styleUrls: ["./pais-form.component.css"]
})
export class PaisFormComponent implements OnInit {

  /**
   * @var acao
   */
  public acao: AcaoSistema;

  /**
   * @var pais
   */
  public pais: Pais;

  /**
   * @var titulo
   */
  public titulo: string = "Cadastrar";

  /**
   * @var paisForm
   */
  public paisForm: FormGroup;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param formBuilder
   * @param paisService
   * @param messageService
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private paisService: PaisService,
    private messageService: MessageService
  ) {
    this.pais = new Pais();
    this.acao = new AcaoSistema(this.route);
    this.pais.id = this.route.snapshot.params["id"];
  }

  /**
   * Componente inicial
   */
  ngOnInit(): void {
    this.paisForm = this.formBuilder.group({
      id: [],
      nome: ["", Validators.required]
    });

    if (this.acao.isAcaoAlterar() || this.acao.isAcaoVisualizar()) {
      this.titulo = "Editar";

      this.paisService
        .findById(this.pais.id)
        .subscribe((pais: Pais) => this.paisForm.patchValue(pais));
    }

    if (this.acao.isAcaoVisualizar()) {
      this.titulo = "Visualizar";
    }
  }

  /**
   * Form para submissão de pais.
   */
  public onSave() {
    if (this.paisForm.valid) {
      this.paisService.salvar(this.paisForm.value).subscribe(
        () => {
          const messagemAcao = this.acao.isAcaoAlterar()
            ? "Registro alterado com sucesso."
            : "Registro inserido com sucesso.";

          this.messageService.showAlertSuccess(messagemAcao);
          this.router.navigate(["/pais"]);
        },
        error => {
          this.messageService.showAlertDanger(error);
        }
      );
    }
  }
}
