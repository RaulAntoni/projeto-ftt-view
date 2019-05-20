package br.com.unievangelica.ftt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import br.com.unievangelica.ftt.exception.ServiceException;
import br.com.unievangelica.ftt.model.Garagem;
import br.com.unievangelica.ftt.repository.GaragemRepository;
import br.com.unievangelica.ftt.util.Mensagens;

/**
 * Classe de négocio referente a entidade {@link Garagem}.
 */
@Service
public class GaragemService {

	@Autowired
	private GaragemRepository garagemRepository;

	/**
	 * Retorna a lista de {@link Garagem} da base de dados.
	 *
	 * @return
	 */
	public List<Garagem> getAllGaragens() {
		List<Garagem> garagens = garagemRepository.findAll();

		if (ObjectUtils.isEmpty(garagens)) {
			throw new ServiceException(Mensagens.MSG_NENHUM_REGISTRO_ENCONTRADO);
		}

		return garagens;
	}

	/**
	 * Retorna a instância de {@link Garagem} conforme o 'id' informado.
	 *
	 * @param id
	 * @return
	 */
	public Garagem getGaragem(final Long id) {
		return garagemRepository.findById(id)
				.orElseThrow(() -> new ServiceException(Mensagens.MSG_NENHUM_REGISTRO_ENCONTRADO));
	}

	/**
	 * Salva a instânica de {@link Garagem} na base de dados conforme os requisitos.
	 *
	 * @param garagem
	 * @return
	 */
	@Transactional
	public Garagem salvar(final Garagem garagem) {
		validarCamposObrigatorios(garagem);
		return garagemRepository.save(garagem);
	}

	/**
	 * Exclui o {@link Garagem} associado ao id informado.
	 *
	 * @param id
	 */
	public void excluir(final Long id) {
		Garagem garagem = getGaragem(id);
		garagemRepository.deleteById(garagem.getId());
	}

	/**
	 * Valida se os campos obrigatórios foram preenchidos.
	 *
	 * @param garagem
	 */
	private void validarCamposObrigatorios(final Garagem garagem) {
		boolean vazio = Boolean.FALSE;

		if (StringUtils.isEmpty(garagem.getNome())) {
			vazio = Boolean.TRUE;
		}

		if (vazio) {
			throw new ServiceException(Mensagens.MSG_CAMPOS_OBRIGATORIOS);
		}
	}
}
