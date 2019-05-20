package br.com.unievangelica.ftt.controller;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.ftt.model.Carro;
import br.com.unievangelica.ftt.service.CarroService;

/**
 * Classe de controle referente a entidade {@link Carro}.
 */
@RestController
@RequestMapping("/carros")
@CrossOrigin(origins = "http://localhost:4200")
public class CarroController {

	@Autowired
	private CarroService carroService;

	/**
	 * Retorna a lista de {@link Carro} encontradas na base de dados.
	 *
	 * @return
	 */
	@GetMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Carro>> getCarros() {
		List<Carro> carros = carroService.getAllCarros();
		return ResponseEntity.status(HttpStatus.OK).body(carros);
	}

	/**
	 * Retorna a instância de {@link Carro} conforme o 'idCarro' informado.
	 *
	 * @param id
	 * @return
	 */
	@GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Carro> getCarro(@PathVariable final Long id) {
		Carro carro = carroService.getCarro(id);
		return ResponseEntity.status(HttpStatus.OK).body(carro);
	}

	/**
	 * Salva a instância de {@link Carro} na base de dados.
	 *
	 * @param carro
	 * @return
	 */
	@PostMapping(path = "/salvar")
	public ResponseEntity<Carro> salvar(@RequestBody @Valid Carro carro) {
		carro = carroService.salvar(carro);
		return ResponseEntity.status(HttpStatus.CREATED).body(carro);
	}

	/**
	 * Altera a instância de {@link Carro} na base de dados.
	 * 
	 * @param id
	 * @param carro
	 * @return
	 */
	@PutMapping(path = "/{id}")
	public ResponseEntity<Carro> alterar(@PathVariable final BigDecimal id, @Valid @RequestBody Carro carro) {
		carro = carroService.salvar(carro);
		return ResponseEntity.status(HttpStatus.OK).body(carro);
	}

	/**
	 * Exclui o {@link Carro} associado ao id informado.
	 *
	 * @param id
	 * @return
	 */
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> excluir(@PathVariable final Long id) {
		carroService.excluir(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
