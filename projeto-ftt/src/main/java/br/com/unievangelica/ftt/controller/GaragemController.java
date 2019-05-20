package br.com.unievangelica.ftt.controller;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.ftt.model.Garagem;
import br.com.unievangelica.ftt.service.GaragemService;

/**
 * Classe de controle referente a entidade {@link Garagem}.
 */
@RestController
@RequestMapping("/garagem")
public class GaragemController {

	@Autowired
	private GaragemService garagemService;

	/**
	 * Retorna a lista de {@link Garagem} encontradas na base de dados.
	 *
	 * @return
	 */
	@GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Garagem>> getGaragens() {
		List<Garagem> garagens = garagemService.getAllGaragens();
		return ResponseEntity.status(HttpStatus.OK).body(garagens);
	}

	/**
	 * Retorna a instância de {@link Garagem} conforme o 'idGaragem' informado.
	 *
	 * @param id
	 * @return
	 */
	@GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Garagem> getGaragem(@PathVariable final Long id) {
		Garagem garagem = garagemService.getGaragem(id);
		return ResponseEntity.status(HttpStatus.OK).body(garagem);
	}

	/**
	 * Salva a instância de {@link Garagem} na base de dados.
	 *
	 * @param Garagem
	 * @return
	 */
	@PostMapping(path = "/salvar")
	public ResponseEntity<Garagem> salvar(@RequestBody @Valid Garagem garagem) {
		garagem = garagemService.salvar(garagem);
		return ResponseEntity.status(HttpStatus.CREATED).body(garagem);
	}

	/**
	 * Altera a instância de {@link Garagem} na base de dados.
	 * 
	 * @param id
	 * @param Garagem
	 * @return
	 */
	@PutMapping(path = "/{id}")
	public ResponseEntity<Garagem> alterar(@PathVariable final BigDecimal id, @Valid @RequestBody Garagem garagem) {
		garagem = garagemService.salvar(garagem);
		return ResponseEntity.status(HttpStatus.OK).body(garagem);
	}

	/**
	 * Exclui o {@link Garagem} associado ao id informado.
	 *
	 * @param id
	 * @return
	 */
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> excluir(@PathVariable final Long id) {
		garagemService.excluir(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
