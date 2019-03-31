CREATE TABLE Universities (
	UniversityID int,
	UniversityName varchar(255),
    PRIMARY KEY (UniversityID)
);

CREATE TABLE Users (
	UserID int,
	Email varchar(100) NOT NULL,
	Pass varchar(20) NOT NULL,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Bio varchar(5000),
    UniversityID int,
	PRIMARY KEY (UserID),
	FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID)	
);

CREATE TABLE Courses (
	CourseID int,
	CourseCode varchar(255) NOT NULL,
	CourseName varchar(255) NOT NULL,
    UniversityID int,
    PRIMARY KEY (CourseID),
    FOREIGN KEY (UniversityID) REFERENCES Universities(UniversityID)
);

CREATE TABLE UserCourses (
    UserID int,
    CourseID int,
	FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

CREATE TABLE Notes (
    NoteID int,
	FileName varchar(1000),
	FileLink varchar(1000),
    CourseID int,
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
