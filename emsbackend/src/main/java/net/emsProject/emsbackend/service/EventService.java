package net.emsProject.emsbackend.service;

import net.emsProject.emsbackend.dto.EventDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface EventService {

    // Create event
    EventDto createEvent(EventDto eventDto);

    // Get each event
    EventDto getEventById(Long eventId);

    // Get all events
    List<EventDto> getAllEvents();

    // Update events
    EventDto updateEvent(Long eventId, EventDto updatedEvent);

    // Delete event
    void deteteEvent(Long eventId);

    // image upload
    String uploadImage(Long eventId, MultipartFile file);


}
