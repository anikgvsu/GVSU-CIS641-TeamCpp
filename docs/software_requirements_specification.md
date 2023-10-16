# Overview

The Buddy Bites Software Requirements Specification (SRS) is a meticulous document delineating the functional and non-functional requirements for the Buddy Bites application. This document serves as a definitive guide, meticulously capturing the features, behaviors, and constraints of our mobile application. It offers a comprehensive insight into the application's scope and functionality, providing clear guidelines for development, design, and implementation. The SRS acts as a foundational blueprint, ensuring a unified understanding of the application's requirements among all stakeholders.

# Functional Requirements

1. User Registration and Profile Management
    1. The system shall allow users to register, providing essential information such as name, username, email, favorite foods, allergies, and diet habits.
    2. Users shall have the ability to edit their profile information after registration, including updating allergies and diet habits.

2. Authentication and Login
    1. Users shall securely log into the application using their registered username and password.

3. Event Management
    1. Users shall be able to create events, specifying details such as event name, date, location, description, and guest list.
    2. The system shall display a personalized event list for users, showing events where they are hosts or guests, on the home page after login.
    3. Event hosts shall have the capability to edit specific event details like name, date, and location.
    4. Users shall be able to RSVP to events, indicating their attendance status (e.g., "Going," "Not Going," "Maybe").
    5. Event hosts shall access an attendance list, allowing them to manage confirmed guests.
    6. Event guests shall receive timely notifications for event invitations, updates, and reminders.
    7. The system shall send push notifications to users' devices for real-time event updates.

4. Recipe Search and Discovery
    1. Users shall have the ability to search for recipes based on ingredients or recipe types.

5. Community Management
    1. Users shall have the ability to create multiple communities, providing a name, description, and members for each community.
    2. Community administrators shall have the authority to add or remove members from the community.
    3. Event hosts shall have the ability to invite all members of a community to an event.

# Non-Functional Requirements

1. Cross-Platform Compatibility
    1. The application shall be compatible with both iOS and Android platforms, ensuring accessibility to a wide range of users.

2. Uptime and Reliability
    1. The application shall maintain a minimum uptime of 80%, guaranteeing reliable service to users.

3. User Data Privacy
    1. Individual allergy information of users shall remain confidential and shall never be disclosed to any other user or third party. Allergies from the guest list shall be aggregated and presented as a collective summary to the event host.

4. Responsiveness
    1. The application shall respond to user interactions within 5 seconds.

5. User Interface
    1. The application's user interface shall be intuitive and user-friendly, reducing the need for extensive user training.

6. Concurrent Users
    1. The application shall be optimized to handle concurrent user interactions, guaranteeing responsiveness even during peak usage times.

7. Testing
    1. Performance testing shall be conducted regularly to identify and address potential bottlenecks and slowdowns.

8. Data Integrity
    1. User data, including event details, community interactions, and user profiles, shall be regularly backed up to ensure data integrity and recovery in case of data loss.
