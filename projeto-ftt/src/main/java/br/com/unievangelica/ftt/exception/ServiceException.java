package br.com.unievangelica.ftt.exception;

/**
 * Exception para tratar erros de exceções.
 */
public class ServiceException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ServiceException(final String mensagem) {
		super(mensagem);
	}
}