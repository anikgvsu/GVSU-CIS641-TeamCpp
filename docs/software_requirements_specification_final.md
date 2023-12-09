# Overview

The Buddy Bites Software Requirements Specification (SRS) is a comprehensive document outlining the functional and non-functional requirements for the Buddy Bites application. Serving as a foundational guide, this document captures the features, behaviors, and constraints of our mobile application, providing a clear roadmap for development, design, and implementation. The SRS aims to establish a shared understanding of the application's requirements among all stakeholders.

# Software Requirements

This section outlines the software requirements for the application, categorizing them into functional and non-functional requirements.

## Functional Requirements

Functional requirements define the specific features and capabilities that the software must possess. These requirements are categorized based on different aspects of the application's functionality.

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

Non-functional requirements define the characteristics and constraints that the software must adhere to. These requirements address aspects such as performance, compatibility, security, user experience, and more.

### Performance and Reliability

| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | The application shall maintain a minimum uptime of 80%. |
| NFR2 | The application shall respond to user interactions within 5 seconds. |
| NFR3 | The application shall be optimized to handle concurrent user interactions. |
| NFR4 | Performance testing shall be conducted regularly. |
| NFR5 | Event details and user profiles data shall be regularly backed up. |

### Compatibility and Accessibility

| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | The application shall be compatible with iOS version 14 and above. |
| NFR7 | The application shall be compatible with Android version 10 and above. |
| NFR8 | The application shall ensure an accessible user experience for devices with screen sizes ranging from 4 inches to 6.5 inches. |
| NFR9 | The application shall comply with WCAG 2.1 Level AA accessibility standards. |
| NFR10 | Cross-platform compatibility shall be tested monthly using real devices representing the diversity of users. |

### Privacy and Security

| ID | Requirement |
| :-------------: | :----------: |
| NFR11 | User allergy information shall never be shared with any other user or third party. |
| NFR12 | Allergies from the guest list shall be aggregated and presented in a summary format to the event host, maintaining individual user privacy. |
| NFR13 | The application shall implement end-to-end encryption to protect user data during transmission. |
| NFR14 | Security audits and vulnerability assessments shall be conducted monthly to identify and address potential threats. |
| NFR15 | User authentication shall be needed. |

### User Interface and Experience

| ID | Requirement |
| :-------------: | :----------: |
| NFR16 | Users shall accomplish all tasks with at most 5 clicks. |
| NFR17 | The application's main screen shall load within 3 seconds. |
| NFR18 | All interactive elements, including buttons and menus, shall respond to user input within 5 seconds. |
| NFR19 | The user interface shall follow a color theme. |
| NFR20 | Design elements, including buttons and icons, shall be consistent across all screens. |

### Network and Connectivity

| ID | Requirement |
| :-------------: | :----------: |
| NFR21 | The Maps API requests shall not exceed 100 KB of data. |
| NFR22 | The Recipe API requests shall not exceed 50 KB of data. |
| NFR23 | The application shall recover gracefully from network failures. |
| NFR24 | Network requests shall be optimized to achieve a latency of less than 500 milliseconds. |
| NFR25 | Regular network performance monitoring shall be conducted. |

# Change Management Plan

The Change Management Plan outlines the strategies and processes to ensure the smooth integration of the new application into the customer's business, emphasizing training, ecosystem integration, issue resolution, and user adoption.

## Training and Skill Development:
A structured training program will be developed to cater to different user groups within the organization. This includes in-person workshops, virtual training sessions, and the creation of user-friendly online modules. Training materials will be tailored to the specific functionalities relevant to each user group, minimizing the learning curve and promoting swift adoption.

## Integration within Ecosystem/Software:
Collaboration with the customer's IT department is paramount for a seamless integration process. A thorough analysis of the existing software ecosystem will be conducted to identify potential integration points. APIs or connectors will be developed to ensure compatibility with current databases, security protocols, and other pertinent systems. Regular communication with IT teams will be maintained to address any emerging integration challenges promptly.

## Change Management Team:
Establishing a dedicated change management team is essential for guiding the integration process. This team, consisting of representatives from IT, end-users, and project management, will act as change ambassadors. Regular meetings will be conducted to assess progress, identify challenges, and adapt the integration strategy accordingly. This team will play a pivotal role in facilitating communication and addressing concerns.

## Continuous Communication:
Transparent and continuous communication is key to overcoming resistance and fostering a positive attitude toward the new application. A detailed communication plan will be developed, outlining key milestones, benefits, and anticipated challenges. Multiple channels, including emails, newsletters, and intranet announcements, will be utilized to disseminate information. Open forums and regular feedback sessions will be established to address concerns promptly.

## Issue Resolution Mechanism:
To ensure the swift resolution of issues, a centralized helpdesk or support system will be implemented. Users will have the means to report issues, and a categorization system will be in place based on severity. A knowledge base will be maintained, documenting known issues and their solutions for quick reference. Regular updates on issue resolution progress will be communicated to maintain transparency.

## User Feedback Mechanism:
Feedback is a valuable tool for improvement. Surveys, feedback forms, and regular feedback sessions will be implemented to collect user opinions on the application's usability and functionality. This feedback will be used to drive iterative updates and enhancements, ensuring that the application aligns with user expectations.

## Performance Monitoring:
To ensure optimal functionality, a robust performance monitoring system will be implemented. This involves monitoring tools to track application usage, response times, and system resource utilization. Periodic performance reviews will be conducted to identify potential bottlenecks or areas for optimization, ensuring a smooth and efficient user experience.

## Celebrate Success and Recognize Adoption:
Positive reinforcement is vital for successful integration. Success stories resulting from the application's use will be highlighted, and recognition and rewards will be provided to teams or individuals contributing to its adoption. This creates a positive narrative around the application's benefits, encouraging a culture of acceptance within the organization.

# Traceability Links
This section provides traceability links between different artifacts, including use cases, class diagrams, and activity diagrams, and their corresponding requirements.

## Use Case Diagram Traceability

| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| UseCase1 | Create Event | FR12-21, NFR5, NFR16, NFR18-21 |
| UseCase2 | Manage Event | FR27-31, NFR16, NFR18-20 |
| UseCase3 | Invite Guests | FR22-26, NFR16, NFR18-20 |

**Note:** We were unable to implement the following features, and thus, the corresponding use cases could not be accomplished:

| Artifact ID | Artifact Name |
| :-------------: | :----------: |
| UseCase4 | Accept Invitation |
| UseCase5 | Reject Invitation |
| UseCase6 | Create Community |
| UseCase7 | Invite Members |
| UseCase8 | Accept Invitation |
| UseCase9 | Reject Invitation |


## Class Diagram Traceability
| Artifact Name | Requirement ID |
| :-------------: |:----------: |
| classEvent | FR12-16, FR27-33, NFR5, NFR16, NFR18-20 |
| classUser | FR1-6, NFR11-12|
| classRecipe | FR34-39, NFR22 |
| classLocation | FR17-21, NFR21 |

**Note:** We were unable to implement the following features, and thus, the corresponding classes could not be accomplished:

| Artifact Name |
| :-------------: |
| classCommunity |
| classHangout |

## Activity Diagram Traceability

| Artifact ID | Artifact Name | Requirement ID |
| :-------------: | :----------: | :----------: |
| [Crate Event Activity Diagram](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Create%20Event%20Activity%20Diagram.pdf) | Create Event | FR12-21, NFR5, NFR16, NFR18-21 |

**Note:** We were unable to implement the following features, and thus, the corresponding activity diagram could not be accomplished:

| Artifact ID | Artifact Name |
| :-------------: | :----------: |
| [Crate Community Activity Diagram](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Create%20Community%20Activity%20Diagram.pdf) | Create Community |

# Software Artifacts

This section serves as a repository for important software artifacts created during the development lifecycle. Each artifact plays a distinct role in outlining project specifications, design components, and overall requirements. The purpose of these artifacts is to provide comprehensive documentation, aid in communication among team members, and serve as a reference for project stakeholders.

* [Project Proposal](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/proposal-template.md)
* [Use Case Diagrams](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Use%20Case%20Diagrams.pdf)
* [Activity Diagrams](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Activity%20Diagrams.pdf)
* [Class Diagram](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Class%20Diagram.pdf)
* [Object Diagram](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/Object%20Diagram.pdf)
* [SRS Midterm](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/software_requirements_specification.md)
* [SRS Final](https://github.com/anikgvsu/GVSU-CIS641-TeamCpp/blob/main/docs/software_requirements_specification_final.md)
