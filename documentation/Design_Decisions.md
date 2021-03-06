# Feature Design Decisions for UCSBB

## Initial Planning
The initial idea of UCSBB was proposed by Derek, and it was envisioned to be a mobile app that simply gave the user a map with their initial location and nearby bathrooms. However, once the group formed and we got together, we began to determine the exact features of our product.

The first thing we had to decide on was what mobile app development tool to use. Because none of us really had any mobile development experience, we were struggling to decide. Through a lot of contemplation between using Swift (iOS), React Native (iOS and Android), and Android Studio (Android), we decided to use React Native because our product could be deployed on both iOS and Android. In addition, we believed it was more versatile in mobile and web development, so it was worth learning.

The second thing we had to determine were the features of our product. This came in the form of user stories, which helped us understand what features our users can expect from our product. After contemplating and thinking of ideas for our app, we came up with 4 user stories:
1. As a user, I can find the bathrooms closest to my location. (Navigation)
2. As a user, I can view details about a given bathroom so that I know whether I can use it. (Bathroom Information)
3. As a user, I can find a route to the nearest bathroom. (Navigation)
4. As a user, I can review bathrooms that I've used so that other users can know the conditions within. (User Interaction)

In the later half of the project, however, we decided not to complete the 4th user story because it was the least important feature and we didn't have enough time to implement it.

Besides the user stories, we also determined the scope of our project. Understanding that some features were very hard to implement, we decided to narrow the map to just the UCSB campus and to have a static set of bathrooms (users cannot independently add bathrooms to the existing list). This lowered our workload as we didn't need to consider any additional changes to the app in the long-run.

## MVP Design
Using our user stories as a guideline, we created our MVP. For this minimum goal, we condensed our user stories into features that we could implement into our app:
1. As a user, I can see a list of bathrooms by building so that I can locate the nearest one (User Story 1)
2. As a user, I can see gender and accessibility information easily for each bathroom (User Story 2)
3. As a user, I can see a map centered on my current location with the nearby buildings so I can navigate to the bathroom of my choosing (User Story 3)

What these three user stories entailed were two tabs/screens for our app. One was a map of the user's current location used for navigation. The other was a list that had every bathroom detail used for bathroom information. Our idea was that for the bare minimum, the map could only be used by the user for navigation (only show Google Maps with their location marked) while the list notified them of where bathrooms were. This meant the users had to go find the bathroom themselves. However, we believed it was enough to satisfy our user stories. With these features decided, we began working on implementing a list and map into our app

Because we didn't have any experience in React Native, we relied on a lot of tutorials and APIs to help us design the app. For the map and list, we used two APIs: react-native-maps and react-native-collapsible-list (this was later changed to a custom component to make the list more customizable). As we began to have a goal to pursue, we divided up roles and began to progressively work towards out goal.

## Finishing Touches
As we approached achieving our MVP, we found our features a bit lacking. The data were all inputted manually and there was zero interaction with the app to make the features more effective. Thus, after our MVP was basically done, we decided to add a few features to flesh out our user stories:
* Create an online database (using Firebase since it was promoted in lecture) to easily load and update the data
* Put markers on the map that were interactable (showed information)
* Make the list interactable so that users could find where that bathroom was on the map
* Implement a Settings tab that filtered out bathrooms based on Gender and Accessibility
* Add a Welcome message when the user first opens the app to teach them how to use the app

By adding these additional features to the app, we believed the user experience would be better. However, we did scrap some of the ideas we had in mind. For example, we initially thought of making each campus building clickable; and when clicked, they would show every bathroom within the building through an overlay or pop-up marker. This was suggested because there were too many markers that showed up on the map. However, we decided that the feature was really tedious to code (we would have to check every single building's perimeter), so we came up with filters to bypass this problem.

As a result, our final product was designed to have 3 tabs:
1. A Map Tab that helps navigate the user and shows nearby bathroom locations
2. A Bathroom List Tab that provides the user a comprehensive list and helps the user find bathrooms by building.
3. A Settings Tab that allows the user to filter out bathrooms by Accessibility and Gender.

By separating our roles and working on different features, we managed to create a working product that satisfies our user stories. 

# Team Management Design Decisions for UCSBB
Our team of six, influenced by the teachings of CS48, decided to implement many features of Agile programming and Scrum:
* Whenever the team met up (in lecture or in lab), we would hold a standup meeting to get a progress report and stay informed on the development progress.
* We created a Kanban Board, which allowed us to more easily organize our roles and jobs to do.
* We used feature branches so that each feature is modularized and easier to merge
* We forced everyone to push their feature branches into a testing branch instead of master so that the working product in master won't be potentially ruined (this happened once)
* We utilized Github Actions to help automate testing
* We held retrospectives to review how we're doing and improve our efficiency
* We documented every one of our meetings so that we could recall them if we needed to
* We based our features off of User Stories in order to satisfy the needs of the user
* We used Slack as our main method of communication and tried to stay in touch
* We held out-of-class meetings to do sprint planning if class time was not enough
* We needed to have others review our Pull Requests to approve it (this helped lower the amount of bugs that went into the Testing Branch)

By choosing to use these practices, the team worked together better and we created a working product in the end of the ten weeks.
