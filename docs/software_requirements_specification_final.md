# Overview

The Buddy Bites Software Requirements Specification (SRS) is a comprehensive document outlining the functional and non-functional requirements for the Buddy Bites application. Serving as a foundational guide, this document captures the features, behaviors, and constraints of our mobile application, providing a clear roadmap for development, design, and implementation. The SRS aims to establish a shared understanding of the application's requirements among all stakeholders.

# Software Requirements

## Functional Requirements

### User Registration

| ID | Requirement |
| :-------------: | :----------: |
| FR1 | The system shall allow users to register with specific information, including name, username, email, password, favorite foods, allergies, and diet habits. |
| FR2 | During registration, name, username, password, email, favorite foods, and diet habits shall be considered as required fields. |
| FR3 | The system shall permit users to proceed with registration even if the allergy field is left empty. |
| FR4 | During registration, if any required field is not filled, the system shall prevent submission and display a red error message for each missing field. |
| FR5 | The password field must be a minimum of 6 characters long, and the system shall display a red error message if the password length is below this requirement. |
| FR6 | After successful registration, users shall be automatically logged into the application. |

### Authentication and Login

| ID | Requirement |
| :-------------: | :----------: |
| FR7 | The system shall allow users to log in using their registered username and password. |
| FR8 | Users shall have the ability to securely log out of the application, ending their current session. |
| FR9 | Users shall have the ability to log in from the same device with different credentials, allowing multiple users to use the application on a shared device. |
| FR10 | The system shall display an error message if the entered username or password during login is incorrect. |
| FR11 | Upon successful login, users shall be redirected to the home page, providing access to the application's features. |

### Event Creation

| ID | Requirement |
| :-------------: | :----------: |
| FR12 | Users shall initiate event creation by clicking the "Add Event" button on the home page. |
| FR13 | Users shall provide essential details including title, description, date, location, and guest list while creating an event. |
| FR14 | The system shall enable users to save events by clicking the "Save Event" button. |
| FR15 | Users shall have the ability to enter location details manually or use an interactive map to add location. |
| FR16 | Users shall be able to select guests from a dropdown menu. |

### Interactive Map

| ID | Requirement |
| :-------------: | :----------: |
| FR17 | The "Add Location from Map" button shall direct users to the interactive map screen. |
| FR18 | An interactive map on the screen shall include a search field for location queries. |
| FR19 | Users shall be able to move the map pointer to designate a specific location. |
| FR20 | Clicking the "Save" button shall add the selected map location. |
| FR21 | The map pointer color shall be red for visibility. |


### Guest Selection

| ID | Requirement |
| :-------------: | :----------: |
| FR22 | The guest list dropdown menu shall include a search option for users to find guests by name. |
| FR23 | The default text in the dropdown menu shall be 'Select Guests.' |
| FR24 | Selected guests' names shall be visibly displayed in the chosen guest list. |
| FR25 | Users shall have the ability to choose multiple guests from the guest list. |
| FR26 | Users shall have the ability to remove a selected guest from the chosen guest list. |

### Event Display

| ID | Requirement |
| :-------------: | :----------: |
| FR27 | The home page, upon user login, shall exhibit a personalized event list, displaying events where the user is the host or guest. |
| FR28 | Events in the event lists, categorized as hosts and guests, shall be presented as distinct cards with different colors for easy differentiation. |
| FR29 | The events listed as hosts and guests shall be individually scrollable within their respective sections. |
| FR30 | Each event card in the list shall display the event title, date, and location. |
| FR31 | Clicking on any event card shall navigate the user to the event details screen. |
| FR32 | The event details screen shall present comprehensive information, including the event title, host name, location, description, combined allergies of guests, and the guest list. |
| FR33 | Each guest entry in the event details screen shall include the guest's name, favorite foods, and diet habits. |


### Recipe Search and Discovery

| ID | Requirement |
| :-------------: | :----------: |
| FR34 | The home page shall feature a 'Recipe' button for user access. |
| FR35 | Clicking the 'Recipe' button shall navigate users to the 'Recipe' screen. |
| FR36 | The 'Recipe' screen shall present a search box with search instructions as a placeholder. |
| FR37 | Users shall have the capability to search for recipes based on ingredients or recipe types, separated by commas. |
| FR38 | Upon pressing the 'Get Recipe' button, the Recipe screen shall display the recipe name and detailed recipe. |
| FR39 | The detailed recipe section in the Recipe screen shall be scrollable for user convenience. |


## Non-Functional Requirements

### Cross-Platform Compatibility
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | The application shall be compatible with both iOS and Android platforms, ensuring accessibility to a wide range of users. |

### Uptime and Reliability
| ID | Requirement |
| :-------------: | :----------: |
| NFR2 | The application shall maintain a minimum uptime of 80%, guaranteeing reliable service to users. |

### User Data Privacy
| ID | Requirement |
| :-------------: | :----------: |
| NFR3 | Individual allergy information of users shall remain confidential and shall never be disclosed to any other user or third party. Allergies from the guest list shall be aggregated and presented as a collective summary to the event host. |

### Responsiveness
| ID | Requirement |
| :-------------: | :----------: |
| NFR4 | The application shall respond to user interactions within 5 seconds. |

### User Interface
| ID | Requirement |
| :-------------: | :----------: |
| NFR5 | The application's user interface shall be intuitive and user-friendly, reducing the need for extensive user training. |

### Concurrent Users
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | The application shall be optimized to handle concurrent user interactions, guaranteeing responsiveness even during peak usage times. |

### Testing
| ID | Requirement |
| :-------------: | :----------: |
| NFR7 | Performance testing shall be conducted regularly to identify and address potential bottlenecks and slowdowns. |

### Data Integrity
| ID | Requirement |
| :-------------: | :----------: |
| NFR8 | User data, including event details, community interactions, and user profiles, shall be regularly backed up to ensure data integrity and recovery in case of data loss. |

# Change Management Plan
<!-- <Description of what this section is> -->

# Traceability Links
<!-- <Description of this section> -->

## Use Case Diagram Traceability
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Move Player | FR5 |
| … | … | … |
## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classPlayer | NFR3, FR5 |
| … | … | … |
## Activity Diagram Traceability
<!-- <In this case, it makes more sense (I think, feel free to disagree) to link to the file and to those requirements impacted> -->
| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| <filename> | Handle Player Input | FR1-5, NFR2 |
| … | … | … |
# Software Artifacts
<!-- <Describe the purpose of this section> -->
* [I am a link](to_some_file.pdf)