package net.emsProject.emsbackend.repository;

import net.emsProject.emsbackend.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
