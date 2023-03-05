Scenario
You are working on a product team which is developing new features for an e-commerce tool for retail
company.

Team
Inside a product team squad, you are working following Scrum methodology with 1 week sprint
duration. Each squad has different profiles for many disciplines and roles. You are working as QA
engineer role.
 1 product owner
 1 project manager
 1 delivery manager
 5 IOS developers
 5 Android developers
 4 backend developers
 5 QA engineers: you are one of these coworkers

Your main tasks
 Definition of the acceptance criteria for each HU defined by the PO
 Writing the test case for this acceptance criteria set in BDD Cucumber Gherkin language
 Manual execution of the test cases defined on the previous step

The new HU
We need to develop this HU on this sprint:
“Modify the login process so that in addition to username and password it is mandatory to accept a
privacy policy check before to click the submit button”

According the attached previous info, we need to:

1. Definition of the acceptance criteria of the HU defined a few lines above.

• The user should be able to see and read the privacy policy before accepting it.
• The checkbox for accepting the privacy policy should be checked by default.
• The user cannot proceed with the login process if they do not accept the privacy policy.
• The privacy policy acceptance status should be saved for future logins.

2. Writing the BDD Gherkin test cases to validate that HU

Feature: Login with Privacy Policy acceptance

  Scenario: Login with Privacy Policy acceptance
    Given I am on the login page
    When fill in valid username and password
    Then should see the privacy policy
    And the privacy policy checkbox should be checked by default
    When click on the submit button without checking the privacy policy checkbox
    Then should see an error message indicating I need to accept the privacy policy
    When check the privacy policy checkbox
    And click on the submit button
    Then should be logged in
    And my privacy policy acceptance status should be saved

3. Taking into account that this HU has implementation of both Web, iOS, Android and backend,
comment on what tools you would use to validate this HU in each discipline in manually way.

• Web: Browser developer tools like Chrome DevTools, Postman for API testing
• iOS: Xcode for simulating iOS devices, proxy server
• Android: Android Studio for simulating Android devices, proxy server
• Backend: Postman for API testing, database management tools like MySQL

4. As a QA engineer within a Scrum team, share with us what ceremonies and meetings you think
will exist during the week of the sprint.

• Sprint Planning: To review the backlog and select items for the upcoming sprint.
• Daily: A daily meeting to discuss the progress and challenges of the team.
• Sprint Review: A meeting to present the completed work to the stakeholders.
• Sprint Retrospective: A meeting to reflect on the previous sprint and plan for improvements.

5. As a final step, we would like to incorporate validation of this new use case into our automatic
regression plan.
a. Which tools would you use to automate the Web, iOS, Android, and backend part?
b. Whichk CI/CD tools do you think could be used to schedule the regression launch in a
planned and manual way?

• Web: Selenium WebDriver for automating web testing, Jenkins for CI/CD
• iOS: XCUITest for automating iOS testing, Jenkins for CI/CD
• Android: Katalon for automating Android testing, Jenkins for CI/CD
• Backend: Postman for API testing, Jenkins for CI/CD

6. Imagine that our PO tells us on Thursday morning that we have to put a new HU in this sprint
that closes Friday at noon and you still lack 1 development of this HU to receive from the
developers and try it.

Could you share any alternative to try to achieve the POs goal?

• One possible solution could be to prioritize the missing development and try to get it completed as soon as possible. 
• Another solution could be to break down the new HU into smaller tasks that can be completed within the sprint deadline. 
• Another option could be to postpone the new HU to the next sprint and focus on completing the current backlog. 
• It's important to discuss the options with the product owner and the team to come up with the best solution.