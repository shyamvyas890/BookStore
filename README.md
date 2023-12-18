# Book Store Management Application

This project helps you manage a hypothetical bookstore. You can view all the books in the bookstore, add additional books to the bookstore, edit an already existing book, or delete any books that are no longer being sold. The information stored in this management application are the title of the book, the price of the book, a description of the book, and an image of the book.

## Technologies Used:
I mainly used the technologies in the "MERN" stack, except I used MySQL, instead of MongoDB. These are MySQL, NodeJS, ExpressJS, and ReactJS.


## How to Run This Project

Make sure to have Node.js, npm, MySQL, and MySQL Workbench installed.

Navigate to MySQL Workbench and run the following commands:
1) ```sql
    CREATE DATABASE test;
2) ```sql 
    use test;
3) ```sql 
    CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `cover` varchar(1000) DEFAULT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
);


Now, navigate to the terminal and cd into this project directory.

Run the following commands:
1) ```cd backend```
2) ```npm install``` 
3) ```npm start```

Now, open a new terminal window and cd into this project directory.

Run the following commands:
1) ```cd client```
2) ```npm install```
1) ```npm start```

The project should open in your browser, and be ready for use.

The bookstore data will be stored, even when you close the application and rerun it.

To exit this application go to both of the terminal windows that are still running and press "Ctrl + C".