package br.com.unievangelica.ftt.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Classe de representação de 'Carro'.
 */
@Getter
@Setter
@Entity
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
@Table(name = "carro")
public class Carro implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;

	@Column(name = "fabricante", nullable = false)
	private String fabricante;

	@Column(name = "modelo", nullable = false)
	private String modelo;

	@Column(name = "versao", nullable = false)
	private String versao;

	@Column(name = "descricao", nullable = false)
	private String descricao;

	@Column(name = "cor", nullable = false)
	private String cor;

	@Column(name = "valor", nullable = false)
	private BigDecimal valor;

	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "garagem_id", referencedColumnName = "id")
	private Garagem garagem;
}
