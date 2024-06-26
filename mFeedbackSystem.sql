create database mFeedbackSystem;
go

-- Tabela u¿ytkowników
CREATE TABLE Users (
    UserId INT PRIMARY KEY,
    UserName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Role INT NOT NULL,
    CreatedAt DATETIME NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    PasswordLastChangedAt DATETIME
);

-- Tabela zg³oszeñ
CREATE TABLE Reports (
    ReportId INT PRIMARY KEY,
	Title NVARCHAR(255) NOT NULL,
	Description NVARCHAR(MAX) NOT NULL,
	Status INT NOT NULL DEFAULT 'Pending',
    StartDate DATETIME NULL,
    EndDate DATETIME,
    CreatedBy INT NOT NULL,
    CreatedAt DATETIME NOT NULL,
    ModifiedBy INT,
    ModifiedAt DATETIME,
    CONSTRAINT FK_Reports_CreatedBy FOREIGN KEY (CreatedBy) REFERENCES Users(UserId),
    CONSTRAINT FK_Reports_ModifiedBy FOREIGN KEY (ModifiedBy) REFERENCES Users(UserId)
);
-- Dostêpne statusy: 'Pending', 'InProgress', 'Resolved', 'Closed', 'Rejected'

-- Tabela akcji administratora
CREATE TABLE AdminActions (
    ActionId INT PRIMARY KEY, -- przemyœleæ IDENTITY
    ReportId INT NOT NULL,
    AdminId INT NOT NULL,
    Action INT NOT NULL,
    ActionDate DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_AdminActions_ReportId FOREIGN KEY (ReportId) REFERENCES Reports(ReportId),
    CONSTRAINT FK_AdminActions_AdminId FOREIGN KEY (AdminId) REFERENCES Users(UserId)
);
-- Dostêpne akcje: 'View', 'Respond', 'ChangeStatus', 'AssignPoints', 'Close'

-- Tabela punktów innowacyjnoœci
CREATE TABLE InnovationPoints (
    PointId INT PRIMARY KEY,
    UserId INT NOT NULL,
    Points INT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

-- Tabela promocyjnych us³ug
CREATE TABLE Promotions (
    PromotionId INT PRIMARY KEY,
    PromotionName NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX) NOT NULL,
    PointsRequired INT NOT NULL
);

-- Tabela realizacji promocji przez u¿ytkowników
CREATE TABLE UserPromotions (
    UserPromotionId INT PRIMARY KEY,
    UserId INT NOT NULL,
    PromotionId INT NOT NULL,
    RedeemedAt DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_UserPromotions_UserId FOREIGN KEY (UserId) REFERENCES Users(UserId),
    CONSTRAINT FK_UserPromotions_PromotionId FOREIGN KEY (PromotionId) REFERENCES Promotions(PromotionId)
);

GO

insert into Users(UserId, UserName, Email, Role, CreatedAt, PasswordHash)
    values(1, 'admin', 'admin', 1, getdate(), '')

SELECT * FROM Users