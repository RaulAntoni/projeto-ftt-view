import { Component, OnInit, Input, ContentChild } from "@angular/core";
import { FormControlName } from "@angular/forms";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"]
})
export class FieldComponent implements OnInit {

  /**
   * @var label
   */
  @Input() label: string;

  /**
   * @var required
   */
  @Input() required: boolean;

  /**
   * @var input
   */
  @ContentChild(FormControlName) input: FormControlName;

  /**
   * Construtor da classse.
   */
  constructor() {}

  ngOnInit() {}

  /**
   * Verifica se o componete é obrigatório.
   */
  public isRequired() {
    return this.required ? true : false;
  }

  /**
   * Verifica se esta preenchido corretamente
   */
  public hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  /**
   * Verifica se existe erro
   */
  public hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

  /**
   * Alterna entre as classes CSS
   */
  public optionClass() {
    return {
      "has-error": this.hasError(),
      "has-success": this.hasSuccess()
    };
  }
}
