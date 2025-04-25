Feature: Add a book to cart

Scenario Outline: Add a book to cart
Given the user is on login page
And the user enter valid username and password
And the user clicks on the login button
When the user go to the "<Genre>" category
And the user add the "<Book>" book to the cart
Then the user should see the "<Book>" in the cart

Examples:
| Genre   | Book                   |
| Fiction | City of Girls          |
| Mystery | The Fault in Our Stars |

