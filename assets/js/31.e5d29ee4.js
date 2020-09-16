(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{397:function(e,t,a){e.exports=a.p+"assets/img/IQSchool-ERD.9589c95f.png"},470:function(e,t,a){"use strict";a.r(t);var s=a(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"iqschool-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iqschool-demo","aria-hidden":"true"}},[e._v("#")]),e._v(" IQSchool Demo")]),e._v(" "),s("p",[e._v("The following SQL examples are based off of the IQSchool database. The install script for this database can be found "),s("a",{attrs:{href:"https://raw.githubusercontent.com/DMIT-1508/DMIT-1508-StudentNotes/master/IQSchool/DDL/IQSchool%20Tables%20and%20Data.sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("ERD and Script")]),e._v(" "),s("p",[s("img",{attrs:{src:a(397),alt:""}})]),e._v(" "),s("p",[e._v("Physical ERD")]),e._v(" "),s("h3",{attrs:{id:"simple-select-exercise-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-select-exercise-1","aria-hidden":"true"}},[e._v("#")]),e._v(" SIMPLE SELECT EXERCISE 1")]),e._v(" "),s("ul",[s("li",[e._v("Select all the information from the club table")]),e._v(" "),s("li",[e._v("Select the FirstNames and LastNames of all the students")]),e._v(" "),s("li",[e._v("Select the student id and Full name of all the students")]),e._v(" "),s("li",[e._v("Select all the CourseId and CourseName of all the coureses. Use the column aliases of Course ID and Course Name")]),e._v(" "),s("li",[e._v("Select all the course information for courseID 'DMIT101'")]),e._v(" "),s("li",[e._v("Select the Staff names who have positionID of 3")]),e._v(" "),s("li",[e._v("Select the CourseNames whos CourseHours are less than 96")]),e._v(" "),s("li",[e._v("Select the studentID's, CourseID and mark where the Mark is between 70 and 80")]),e._v(" "),s("li",[e._v("Select the StudentIDs where the withdrawal status is null")]),e._v(" "),s("li",[e._v("Select the student ids of students who have withdrawn from a course")]),e._v(" "),s("li",[e._v("Select the studentID's, CourseID and mark where the Mark is between 70 and 80 and the courseID is DMIT223 or DMIT168")]),e._v(" "),s("li",[e._v("Select the studentIDs, CourseID and mark where the Mark is 80 and 85")])]),e._v(" "),s("blockquote",[s("p",[e._v('The next few questions introduce the idea of "wildcards" and pattern matching in the WHERE clause. '),s("code",[e._v("_")]),e._v(" is a wildcard for a single character; "),s("code",[e._v("%")]),e._v(" is a wildcard for zero or more characters; "),s("code",[e._v("[]")]),e._v(" is a pattern for a single character matching the pattern in the square brackets.")])]),e._v(" "),s("ul",[s("li",[e._v("Select the students first and last names who have last names starting with S")]),e._v(" "),s("li",[e._v("Select Coursenames whose CourseID have a 1 as the fifth character")]),e._v(" "),s("li",[e._v("Select the CourseID's and Coursenames where the CourseName contains the word 'programming'")]),e._v(" "),s("li",[e._v("Select all the ClubNames who start with N or C.")]),e._v(" "),s("li",[e._v("Select Student Names, Street Address and City where the lastName has only 3 letters long.")]),e._v(" "),s("li",[e._v("Select all the StudentID's where the PaymentAmount < 500 OR the PaymentTypeID is 5")])]),e._v(" "),s("h3",{attrs:{id:"simple-select-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-select-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Select 2")]),e._v(" "),s("ul",[s("li",[e._v("Select the average Mark from all the Marks in the registration table")]),e._v(" "),s("li",[e._v("Show the average mark, the total of all marks, and a count of all marks.")]),e._v(" "),s("li",[e._v("Select the average Mark of all the students who are taking DMIT104")]),e._v(" "),s("li",[e._v("Select how many students are there in the Student Table")]),e._v(" "),s("li",[e._v("Select how many students are taking (have a grade for) DMIT152")]),e._v(" "),s("li",[e._v("Select the average payment amount for payment type 5")]),e._v(" "),s("li",[e._v("Select the highest payment amount")]),e._v(" "),s("li",[e._v("Select the lowest payment amount")]),e._v(" "),s("li",[e._v("Select the total of all the payments that have been made")]),e._v(" "),s("li",[e._v("How many different payment types does the school accept?")]),e._v(" "),s("li",[e._v("How many students are in club 'CSS'?")])]),e._v(" "),s("h3",{attrs:{id:"simple-select-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-select-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Select 3")]),e._v(" "),s("ul",[s("li",[e._v("Select the average mark for each course. Display the CourseID and the average mark")]),e._v(" "),s("li",[e._v("How many payments where made for each payment type. Display the Payment typeID and the count")]),e._v(" "),s("li",[e._v("Select the average Mark for each studentID. Display the StudentId and their average mark")]),e._v(" "),s("li",[e._v("Select the same data as question 3 but only show the studentID's and averages that are > 80")]),e._v(" "),s("li",[e._v("How many students are from each city? Display the City and the count.")]),e._v(" "),s("li",[e._v("Which cities have 2 or more students from them? (HINT, remember that fields that we use in the where or having do not need to be selected.....)")]),e._v(" "),s("li",[e._v("what is the highest, lowest and average payment amount for each payment type?")]),e._v(" "),s("li",[e._v("How many students are there in each club? Show the clubID and the count")]),e._v(" "),s("li",[e._v("Which clubs have 3 or more students in them?")])]),e._v(" "),s("h3",{attrs:{id:"join-exercise-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-exercise-1","aria-hidden":"true"}},[e._v("#")]),e._v(" JOIN EXERCISE 1")]),e._v(" "),s("ul",[s("li",[e._v("Select Student full names and the course ID's they are registered in.")]),e._v(" "),s("li",[e._v("Select Student full names, the course ID and the course name that the students are registered in. -- (Hint, this involves joining together three tables)")]),e._v(" "),s("li",[e._v("Select the Staff full names and the Course ID's they teach")]),e._v(" "),s("li",[e._v("Select all the Club ID's and the Student full names that are in them")]),e._v(" "),s("li",[e._v("Select the Student full name, courseID's and marks for studentID 199899200.")]),e._v(" "),s("li",[e._v("Select the Student full name, course names and marks for studentID 199899200.")]),e._v(" "),s("li",[e._v("Select the CourseID, CourseNames, and the Semesters they have been taught in")]),e._v(" "),s("li",[e._v("What Staff Full Names have taught Networking 1?")]),e._v(" "),s("li",[e._v("What is the course list for student ID 199912010 in semester 2001S. Select the Students Full Name and the CourseNames")]),e._v(" "),s("li",[e._v("What are the Student Names, courseID's that have Marks >80?")])]),e._v(" "),s("h3",{attrs:{id:"join-exercise-with-aggregates-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#join-exercise-with-aggregates-1","aria-hidden":"true"}},[e._v("#")]),e._v(" JOIN EXERCISE with Aggregates 1")]),e._v(" "),s("ul",[s("li",[e._v("How many staff are there in each position? Select the number and Position Description")]),e._v(" "),s("li",[e._v("Select the average mark for each course. Display the CourseName and the average mark. Sort the results by average in descending order.")]),e._v(" "),s("li",[e._v("How many payments where made for each payment type. Display the PaymentTypeDescription and the count")]),e._v(" "),s("li",[e._v("Select the average Mark for each student. Display the Student Name and their average mark. Use table aliases in your FROM & JOIN clause.")]),e._v(" "),s("li",[e._v("Select the same data as question 4 but only show the student names and averages that are > 80")]),e._v(" "),s("li",[e._v("what is the highest, lowest and average payment amount for each payment type Description?")]),e._v(" "),s("li",[e._v("How many students are there in each club? Show the clubName and the count")]),e._v(" "),s("li",[e._v("Which clubs have 3 or more students in them? Display the Club Names.")])]),e._v(" "),s("h3",{attrs:{id:"outer-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outer-join","aria-hidden":"true"}},[e._v("#")]),e._v(" OUTER JOIN")]),e._v(" "),s("ul",[s("li",[e._v("Select All position descriptions and the staff ID's that are in those positions")]),e._v(" "),s("li",[e._v("Select the Position Description and the count of how many staff are in those positions. Return the count for ALL positions.")]),e._v(" "),s("li",[e._v("Select the average mark of ALL the students. Show the student names and averages.")]),e._v(" "),s("li",[e._v("Select the highest and lowest mark for each student.")]),e._v(" "),s("li",[e._v("How many students are in each club? Display club name and count.")])]),e._v(" "),s("h3",{attrs:{id:"subquery-exercise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subquery-exercise","aria-hidden":"true"}},[e._v("#")]),e._v(" SUBQUERY EXERCISE")]),e._v(" "),s("ul",[s("li",[e._v("Select the Payment dates and payment amount for all payments that were Cash")]),e._v(" "),s("li",[e._v("Select The Student ID's of all the students that are in the 'Association of Computing Machinery' club")]),e._v(" "),s("li",[e._v("Select All the staff full names that have taught a course.")]),e._v(" "),s("li",[e._v("Select All the staff full names that taught DMIT172.")]),e._v(" "),s("li",[e._v("Select All the staff full names that have never taught a course")]),e._v(" "),s("li",[e._v("Select the Payment TypeID(s) that have the highest number of Payments made.")]),e._v(" "),s("li",[e._v("Select the Payment Type Description(s) that have the highest number of Payments made.")]),e._v(" "),s("li",[e._v("What is the total avg mark for the students from Edm?")]),e._v(" "),s("li",[e._v("What is the avg mark for each of the students from Edm? Display their StudentID and avg(mark)")])]),e._v(" "),s("h3",{attrs:{id:"union"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#union","aria-hidden":"true"}},[e._v("#")]),e._v(" Union")]),e._v(" "),s("ul",[s("li",[e._v("Write a script that will produce the 'It Happened in October' display.")])]),e._v(" "),s("h3",{attrs:{id:"insert-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Insert Examples")]),e._v(" "),s("ul",[s("li",[e._v('Let\'s add a new course called "Expert SQL". It will be a 90 hour course with a cost of $450.00')]),e._v(" "),s("li",[e._v("Let's add a new staff member, someone who's really good at SQL")]),e._v(" "),s("li",[e._v("Let's add another instructor")]),e._v(" "),s("li",[e._v("There are three additional clubs being started at the school: -- - START - Small Tech And Research Teams -- - CALM - Coping And Lifestyle Management -- - RACE - Rapid Acronym Creation Experts")])]),e._v(" "),s("h3",{attrs:{id:"update-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Examples")]),e._v(" "),s("ul",[s("li",[e._v("The school thinks it can get a bit more money out of students -- because of the popularity of a few of its courses. As such, -- they are increasing the course cost of 'Expert SQL' and 'Quality Assurance' -- by 10%.")]),e._v(" "),s("li",[e._v("Along with the goals of the school to make more money, they are allowing -- all courses to have a total of 10 students as the maximum.")]),e._v(" "),s("li",[e._v("One of the students has moved and has supplied their new address. -- Change the address of student 199912010 to 4407-78 Ave, Edmonton, T4Y3P0")]),e._v(" "),s("li",[e._v("Someone in the registrar's office has noticed a bunch of data-entry errors. -- All the student cities named 'Edm' should be changed to 'Edmonton'")])]),e._v(" "),s("h3",{attrs:{id:"delete-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete Examples")]),e._v(" "),s("ul",[s("li",[e._v("A scandal has rocked the CSS club. The president has run off with all the -- club's money. As such, the club is disbanded. Remove all the members of the -- CSS club.")])]),e._v(" "),s("h3",{attrs:{id:"sprocs-dml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sprocs-dml","aria-hidden":"true"}},[e._v("#")]),e._v(" Sprocs - DML")]),e._v(" "),s("ul",[s("li",[e._v("Create a stored procedure called AddPosition that will accept a Position Description (varchar 50). Return the primary key value that was database-generated as a result of your Insert statement. Also, ensure that the supplied description is not NULL and that it is at least 5 characters long. Make sure that you do not allow a duplicate position name.")]),e._v(" "),s("li",[e._v("Create a stored procedure that will change the mailing address for a student. Call it ChangeMailingAddress. -- Make sure all the parameter values are supplied before running the UPDATE (ie: no NULLs).")]),e._v(" "),s("li",[e._v("Create a stored procedure called RemoveClubMembership that takes a club ID and deletes all the members of that club. Be sure that the club exists. Also, raise an error if there were no members deleted from the club.")])]),e._v(" "),s("h3",{attrs:{id:"sprocs-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sprocs-query","aria-hidden":"true"}},[e._v("#")]),e._v(" Sprocs - Query")]),e._v(" "),s("ul",[s("li",[e._v("Create a stored procedure that will display all the staff and their position in the school. -- Show the full name of the staff member and the description of their position.")]),e._v(" "),s("li",[e._v("Display all the final course marks for a given student. Include the name and number of the course -- along with the student's mark.")]),e._v(" "),s("li",[e._v("Display the students that are enrolled in a given course on a given semester. -- Display the course name and the student's full name and mark.")]),e._v(" "),s("li",[e._v("The school is running out of money! Find out who still owes money for the courses they are enrolled in.")]),e._v(" "),s("li",[e._v("Create a stored procedure called OverActiveMembers that takes a single number: ClubCount. This procedure should return the names of all members that are active in as many or more clubs than the supplied club count. -- (p.s. - You might want to make sure to add more members to more clubs, seeing as tests for the last question might remove a lot of club members....)")]),e._v(" "),s("li",[e._v("Create a stored procedure called ListStudentsWithoutClubs that lists the full names of all students who are not active in a club.")]),e._v(" "),s("li",[e._v("Create a stored procedure called LookupStudent that accepts a partial student last name and returns a list of all students whose last name includes the partial last name. Return the student first and last name as well as their ID.")]),e._v(" "),s("li",[e._v("Create a stored procedure called LookupClubMembers that takes a club ID and returns the full names of all members in the club.")])]),e._v(" "),s("h3",{attrs:{id:"sprocs-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sprocs-transactions","aria-hidden":"true"}},[e._v("#")]),e._v(" Sprocs - Transactions")]),e._v(" "),s("ul",[s("li",[e._v("Add a stored procedure called TransferCourse that accepts a student ID, semester, and two course IDs: the one to move the student out of and the one to move the student in to.")]),e._v(" "),s("li",[e._v("Add a stored procedure called AdjustMarks that takes in a course ID. The procedure should adjusts the marks of all students for that course by increasing the mark by 10%. Be sure that nobody gets a mark over 100%.")]),e._v(" "),s("li",[e._v("Add a stored procedure called ExpelStudent that takes a StudentID and performs the following actions:")]),e._v(" "),s("li",[e._v("Withdraw the student from every course that he/she does not have a mark in and set the mark for the course(s) to a zero. (There should be at least one course they are removed from, otherwise it should be considered an error.)")]),e._v(" "),s("li",[e._v("Remove the student from all clubs in which they are active.")]),e._v(" "),s("li",[e._v("Create a stored procedure called RegisterStudent that accepts StudentID, CourseID and Semester as parameters. If the number of students in that course and semester are not greater than the Max Students for that course, add a record to the Grade table and add the cost of the course to the students balance. If the registration would cause the course in that semester to have greater than MaxStudents for that course raise an error.")]),e._v(" "),s("li",[e._v("Add a stored procedure called WitnessProtection that erases all existence of a student from the database. The stored procedure takes the StudentID, first and last names, gender, and birthdate as parameters. Ensure that the student exists in the database before removing them (all the parameter values must match).")]),e._v(" "),s("li",[e._v("Create a procedure called StudentPayment that accepts Student ID and paymentamount as parameters. Add the payment to the payment table and adjust the students balance owing to reflect the payment.")]),e._v(" "),s("li",[e._v("Create a stored procedure called WithdrawStudent that accepts a StudentID, CourseId, and semester as parameters. Withdraw the student by updating their Withdrawn value to 'Y' and subtract 1/2 of the cost of the course from their balance. If the result would be a negative balance set it to 0.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);