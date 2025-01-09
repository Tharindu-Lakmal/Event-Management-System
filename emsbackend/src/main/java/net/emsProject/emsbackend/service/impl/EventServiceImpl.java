package net.emsProject.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.emsProject.emsbackend.dto.EventDto;
import net.emsProject.emsbackend.entity.Event;
import net.emsProject.emsbackend.exception.ResourceNotFoundException;
import net.emsProject.emsbackend.mapper.EventMapper;
import net.emsProject.emsbackend.repository.EventRepository;
import net.emsProject.emsbackend.service.EventService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service // tell spring container to create spring Beam for this class
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private EventRepository eventRepository;

    @Override
    public EventDto createEvent(EventDto eventDto) {

        Event event = EventMapper.mapToEvent(eventDto);
        Event savedEvent = eventRepository.save(event);

        return EventMapper.mapToEventDto(savedEvent);
    }

    @Override
    public EventDto getEventById(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event is Not Found with Given ID: " + eventId)
                );

        return EventMapper.mapToEventDto(event);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();

        return events.stream().map((event) -> EventMapper.mapToEventDto(event))
                .collect(Collectors.toList());
    }

    @Override
    public EventDto updateEvent(Long eventId, EventDto updatedEvent) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event is Not Found with Given ID: " + eventId)
        );

        // update event object
        event.setEvent_name(updatedEvent.getEvent_name());
        event.setEvent_description(updatedEvent.getEvent_description());
        event.setDate(updatedEvent.getDate());
        event.setLocation(updatedEvent.getLocation());
        event.setOrganizer(updatedEvent.getOrganizer());
        event.setCapacity(updatedEvent.getCapacity());
        event.setTags(updatedEvent.getTags());

        // save event object | 'save' performs both save and update
        Event updateEventObj = eventRepository.save(event);

        return EventMapper.mapToEventDto(updateEventObj);
    }

    @Override
    public void deteteEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event is Not Found with Given ID: " + eventId)
                );

        eventRepository.deleteById(eventId);
    }

    // image upload
    @Override
    public String uploadImage(Long eventId, MultipartFile file) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with ID: " + eventId));

        try {
            // Define storage location
            String uploadDir = "uploads/";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath); // Create directory if not exists
            }

            // Generate unique file name
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);

            // Save the file
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Update the event with image path
            event.setImagePath(filePath.toString());
            eventRepository.save(event);

            return filePath.toString();

        } catch (Exception e) {
            throw new RuntimeException("Failed to store image", e);
        }
    }

}
