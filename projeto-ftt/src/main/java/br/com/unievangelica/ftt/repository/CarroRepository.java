package br.com.unievangelica.ftt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.unievangelica.ftt.model.Carro;

/**
 * Classe de persistência referente a entidade {@link Carro}.
 */
@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

}
