import { GaragemService } from "./../garagem.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Garagem } from "../garagem";
import { Pais } from "../../pais/pais";

@Component({
  selector: "app-garagem-form",
  templateUrl: "./garagem-form.component.html",
  styleUrls: ["./garagem-form.component.css"]
})
export class GaragemFormComponent implements OnInit {

  /**
   * @var paises
   */
  public paises: Array<Pais> = [];

  /**
   * @var garagem
   */
  public garagem: Garagem;

  /**
   * @var garagemForm
   */
  public garagemForm: FormGroup;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param formBuilder
   * @param garagemService
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private garagemService: GaragemService
  ) {
    this.garagem = new Garagem();
    this.paises = this.route.snapshot.data["paises"];
  }

  /**
   * Checks the vector of objects to be selected
   */
  public compareFn(
    c1: { id: any; nome: string },
    c2: { id: any; nome: string }
  ): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  /**
   * Component inicial.
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Envia os dados para inclusão ou alteração de garagem.
   */
  public onSave(): void {
    if (this.garagemForm.valid) {
      this.garagemService.salvar(this.garagemForm.value).subscribe(() => {
        this.router.navigate(["/garagem"]);
      });
    }
  }

  /**
   * Inicializa o formulário de garagem.
   */
  private initForm(): void {
    this.garagemForm = this.formBuilder.group({
      id: null,
      endereco: this.addEnderecoForm(),
      nome: ["", [Validators.required]]
    });
  }

  /**
   * Inicializa o formulário de endereço.
   */
  private addEnderecoForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      pais: [""],
      bairro: [""],
      cidade: [""],
      estado: [""],
      logradouro: [""],
      complemento: [""]
    });
  }
}
