package br.com.unievangelica.ftt.exception;

import lombok.Getter;
import lombok.Setter;

/**
 * Modelo representativo do Erro.
 */
@Getter
@Setter
public class Erro {

	/**
	 * Construtor do modelo Erro.
	 *
	 * @param propriedade
	 * @param mensagem
	 */
	public Erro(final String propriedade, final String mensagem) {
		this.propriedade = propriedade;
		this.mensagem = mensagem;
	}

	private String propriedade;
	private String mensagem;
}