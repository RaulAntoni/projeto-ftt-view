package br.com.unievangelica.ftt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.unievangelica.ftt.model.Garagem;

/**
 * Classe de persistência referente a entidade {@link Garagem}.
 */
@Repository
public interface GaragemRepository extends JpaRepository<Garagem, Long> {

}
