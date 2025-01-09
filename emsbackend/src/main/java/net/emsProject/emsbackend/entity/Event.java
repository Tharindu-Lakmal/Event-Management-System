package net.emsProject.emsbackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(name = "Event_Name")
    private String event_name;

    @Column(name = "Event_Description")
    private String event_description;

    @Column(name = "Date")
    private String date;

    @Column(name = "Location")
    private String location;

    @Column(name = "Organizer")
    private String organizer;

    @Column(name = "Capacity")
    private int capacity;

    @Column(name = "tags")
    private String tags;

    @Column(name = "image_path")
    private String imagePath;

}
