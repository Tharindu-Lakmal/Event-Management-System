// use transfer data between client and server

package net.emsProject.emsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {

    private  Long id;
    private String event_name;
    private String event_description;
    private String date;
    private String location;
    private String organizer;
    private int capacity;
    private String tags;
    private String imagePath;
}
