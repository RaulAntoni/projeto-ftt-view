import { ActivatedRoute } from "@angular/router";

/**
 * Enum com as possivéis ações da aplicação.
 */
export enum Acao {
  VISUALIZAR = "visualizar",
  INSERIR = "inserir",
  ALTERAR = "alterar"
}

/**
 * Class de controller da ação.
 */
export class AcaoSistema {

  /**
   * @var acao
   */
  private acao: Acao;

  /**
   * Construtor da classe.
   *
   * @param route
   */
  constructor(route?: ActivatedRoute) {
    if (route !== null && route !== undefined) {
      const data = route.snapshot.data;

      for (const index of Object.keys(data)) {
        const param = data[index];

        if (
          param !== null &&
          typeof param === "object" &&
          param["acao"] !== undefined
        ) {
          this.acao = param["acao"];
          break;
        }
      }
    }
  }

  /**
   * Seta o valor da ação
   *
   * @param acao
   */
  public setAcao(acao: Acao): AcaoSistema {
    this.acao = acao;
    return this;
  }

  /**
   * Verifica se a ação é 'Inserir'.
   *
   * @return boolean
   */
  public isAcaoInserir(): boolean {
    return Acao.INSERIR === this.acao;
  }

  /**
   * Verifica se a ação é 'Alterar'.
   *
   * @return boolean
   */
  public isAcaoAlterar(): boolean {
    return Acao.ALTERAR === this.acao;
  }

  /**
   * Verifica se a ação é 'Visualizar'.
   *
   * @return boolean
   */
  public isAcaoVisualizar(): boolean {
    return Acao.VISUALIZAR === this.acao;
  }
}
