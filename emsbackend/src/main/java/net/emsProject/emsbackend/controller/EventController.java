package net.emsProject.emsbackend.controller;

import lombok.AllArgsConstructor;
import net.emsProject.emsbackend.dto.EventDto;
import net.emsProject.emsbackend.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

// annotating class with ADD rest control annotation,
// the class become a spring rest controller and class handle HTTP request
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/events") // defining a base url for all REST API
public class EventController {

    private EventService eventService;

    // Build add event REST API

    // Adding Spring Annotation make methods REST API
    @PostMapping    // Map the incoming HTTP post request to the method
    // @RequestBody extracts the Json from HTTP request
    public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
        EventDto savedEmployee = eventService.createEvent(eventDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    // Build Get Event REST API
    @GetMapping("{id}")
    public ResponseEntity<EventDto> getEventById(@PathVariable("id") Long eventId) {
        EventDto eventDto = eventService.getEventById(eventId);
        return ResponseEntity.ok(eventDto);
    }


    // Build Get All Events REST API
    @GetMapping
    public ResponseEntity<List<EventDto>> getAllEvents() {
        List<EventDto> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }


    // Build Update Event REST API
    @PutMapping("{id}") // Map http incoming Put request to the method
    public ResponseEntity<EventDto> updateEvent(@PathVariable("id") Long eventId, @RequestBody EventDto updatedEvent) {
        EventDto eventDto = eventService.updateEvent(eventId, updatedEvent);
        return ResponseEntity.ok(eventDto);
    }


    // Build Delete Event REST API
    @DeleteMapping("{id}") // Map http incoming Delete request to the method
    public ResponseEntity<String> deleteEvent(@PathVariable("id") Long eventId) {
        eventService.deteteEvent(eventId);
        return ResponseEntity.ok("Event delete successfully!");
    }

    // Build Image Upload Event REST API
    @PostMapping("{id}/upload-image") // /upload-image
    public ResponseEntity<String> uploadImage(
            @PathVariable("id") Long eventId,
            @RequestParam("file") MultipartFile file) {

        String imagePath = eventService.uploadImage(eventId, file);
        return ResponseEntity.ok("Image uploaded successfully: " + imagePath);
    }


}
