import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Carro } from "../carro";
import { CarroService } from "../carro.service";

/**
 * Componente responsável pela inclusão e alteração de 'Carro'.
 */
@Component({
  selector: "app-carro-form",
  templateUrl: "./carro-form.component.html",
  styleUrls: ["./carro-form.component.css"]
})
export class CarroFormComponent implements OnInit {

  /**
   * @var carro
   */
  public carro: Carro;

  /**
   * @var carroForm
   */
  public carroForm: FormGroup;

  /**
   * Construtor da classe.
   *
   * @param formBuilder
   * @param carroService
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private carroService: CarroService
  ) {}

  /**
   * Component inicial.
   */
  ngOnInit(): void {
    this.initForm();
    this.carro = new Carro();
  }

  /**
   * Inicialização do formulário.
   */
  private initForm(): void {
    this.carroForm = this.formBuilder.group({
      id: null,
      cor: ["", [Validators.required]],
      valor: ["", [Validators.required]],
      versao: ["", [Validators.required]],
      modelo: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      fabricante: ["", [Validators.required]]
    });
  }

  /**
   * Envia os dados para inclusão ou alteração do carro.
   */
  public onSave(): void {
    if (this.carroForm.valid) {
      this.carroService.salvar(this.carroForm.value).subscribe(() => {
        this.router.navigate(['/carro']);
      });
    }
  }
}
