package net.emsProject.emsbackend.mapper;

import net.emsProject.emsbackend.dto.EventDto;
import net.emsProject.emsbackend.entity.Event;

public class EventMapper {

    // map event jpa entity to EventDto
    public static EventDto mapToEventDto(Event event) {
        return new EventDto(
                event.getId(),
                event.getEvent_name(),
                event.getEvent_description(),
                event.getDate(),
                event.getLocation(),
                event.getOrganizer(),
                event.getCapacity(),
                event.getTags(),
                event.getImagePath()
        );
    }

    // map EventDto to Event jpa entity
    public static Event mapToEvent(EventDto eventDto) {
        return new Event(
                eventDto.getId(),
                eventDto.getEvent_name(),
                eventDto.getEvent_description(),
                eventDto.getDate(),
                eventDto.getLocation(),
                eventDto.getOrganizer(),
                eventDto.getCapacity(),
                eventDto.getTags(),
                eventDto.getImagePath()
        );
    }
}
