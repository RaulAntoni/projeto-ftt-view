package br.com.unievangelica.ftt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import br.com.unievangelica.ftt.exception.ServiceException;
import br.com.unievangelica.ftt.model.Carro;
import br.com.unievangelica.ftt.repository.CarroRepository;
import br.com.unievangelica.ftt.util.Mensagens;

/**
 * Classe de négocio referente a entidade {@link Carro}.
 */
@Service
public class CarroService {

	@Autowired
	private CarroRepository carroRepository;

	/**
	 * Retorna a lista de {@link Carro} da base de dados.
	 *
	 * @return
	 */
	public List<Carro> getAllCarros() {
		List<Carro> carros = carroRepository.findAll();

		if (ObjectUtils.isEmpty(carros)) {
			throw new ServiceException(Mensagens.MSG_NENHUM_REGISTRO_ENCONTRADO);
		}

		return carros;
	}

	/**
	 * Retorna a instância de {@link Carro} conforme o 'id' informado.
	 *
	 * @param id
	 * @return
	 */
	public Carro getCarro(final Long id) {
		return carroRepository.findById(id)
				.orElseThrow(() -> new ServiceException(Mensagens.MSG_NENHUM_REGISTRO_ENCONTRADO));
	}

	/**
	 * Salva a instânica de {@link carro} na base de dados conforme os requisitos.
	 *
	 * @param carro
	 * @return
	 */
	@Transactional
	public Carro salvar(final Carro carro) {
		validarCamposObrigatorios(carro);
		return carroRepository.save(carro);
	}

	/**
	 * Exclui o {@link Carro} associado ao id informado.
	 *
	 * @param id
	 */
	public void excluir(final Long id) {
		Carro carro = getCarro(id);
		carroRepository.deleteById(carro.getId());
	}

	/**
	 * Valida se os campos obrigatórios foram preenchidos.
	 *
	 * @param carro
	 */
	private void validarCamposObrigatorios(final Carro carro) {
		boolean vazio = Boolean.FALSE;

		if (StringUtils.isEmpty(carro.getDescricao())) {
			vazio = Boolean.TRUE;
		}

		if (StringUtils.isEmpty(carro.getFabricante())) {
			vazio = Boolean.TRUE;
		}

		if (StringUtils.isEmpty(carro.getModelo())) {
			vazio = Boolean.TRUE;
		}

		if (StringUtils.isEmpty(carro.getCor())) {
			vazio = Boolean.TRUE;
		}

		if (StringUtils.isEmpty(carro.getValor())) {
			vazio = Boolean.TRUE;
		}

		if (StringUtils.isEmpty(carro.getVersao())) {
			vazio = Boolean.TRUE;
		}

		if (vazio) {
			throw new ServiceException(Mensagens.MSG_CAMPOS_OBRIGATORIOS);
		}
	}
}
