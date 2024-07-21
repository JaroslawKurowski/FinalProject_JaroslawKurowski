-- Tworzenie bazy danych
CREATE DATABASE FeedbackSystem;
GO

-- U¿ywanie nowo utworzonej bazy danych
USE FeedbackSystem;
GO

-- Tabela u¿ytkowników
CREATE TABLE Users (
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    UserName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Role INT NOT NULL,
    CreatedAt DATETIME NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    PasswordLastChangedAt DATETIME
);

-- Tabela zg³oszeñ
CREATE TABLE Reports (
    ReportId INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(255) NOT NULL,
    Description NVARCHAR(MAX) NOT NULL,
    Status INT NOT NULL DEFAULT 0, -- 0 = Pending
    StartDate DATETIME NULL,
    EndDate DATETIME,
    CreatedBy INT NOT NULL,
    CreatedAt DATETIME NOT NULL,
    ModifiedBy INT,
    ModifiedAt DATETIME,
    IsDeleted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Reports_CreatedBy FOREIGN KEY (CreatedBy) REFERENCES Users(UserId),
    CONSTRAINT FK_Reports_ModifiedBy FOREIGN KEY (ModifiedBy) REFERENCES Users(UserId)
);

-- Tabela akcji administratora
CREATE TABLE AdminActions (
    ActionId INT IDENTITY(1,1) PRIMARY KEY,
    ReportId INT NOT NULL,
    AdminId INT NOT NULL,
    Action INT NOT NULL,
    ActionDate DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_AdminActions_ReportId FOREIGN KEY (ReportId) REFERENCES Reports(ReportId),
    CONSTRAINT FK_AdminActions_AdminId FOREIGN KEY (AdminId) REFERENCES Users(UserId)
);

-- Tabela punktów innowacyjnoœci
CREATE TABLE InnovationPoints (
    UserId INT PRIMARY KEY,
    Points INT NOT NULL,
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

-- Tabela promocyjnych us³ug
CREATE TABLE Promotions (
    PromotionId INT IDENTITY(1,1) PRIMARY KEY,
    PromotionName NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX) NOT NULL,
    PointsRequired INT NOT NULL,
    CreatedBy INT NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT NULL,
    ModifiedAt DATETIME NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Promotions_CreatedBy FOREIGN KEY (CreatedBy) REFERENCES Users(UserId),
    CONSTRAINT FK_Promotions_ModifiedBy FOREIGN KEY (ModifiedBy) REFERENCES Users(UserId)
);

-- Tabela realizacji promocji przez u¿ytkowników
CREATE TABLE UserPromotions (
    UserPromotionId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    PromotionId INT NOT NULL,
    RedeemedAt DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_UserPromotions_UserId FOREIGN KEY (UserId) REFERENCES Users(UserId),
    CONSTRAINT FK_UserPromotions_PromotionId FOREIGN KEY (PromotionId) REFERENCES Promotions(PromotionId)
);

-- Dodanie predefiniowanych u¿ytkowników z zahaszowanymi has³ami
INSERT INTO Users (UserName, Email, Role, CreatedAt, PasswordHash)
VALUES 
('admin', 'admin@mail.com', 1, GETDATE(), HASHBYTES('SHA2_256', 'Admin12#')),
('user', 'user1@mail.com', 0, GETDATE(), HASHBYTES('SHA2_256', 'User345#'));

-- zamiast HASHBYTES - $2a$11$UHEopeSeA/ddm5dKbcZllukSl1lwxXDpqO6VJFtt.dOhQtgZdntMm oraz $2a$11$HK3.aadDYVOL2ugCsVhW4Oyx5XISZEDZ7fqSrMupeE8pVk72f9lni

-- Dodanie przyk³adowych promocji
INSERT INTO Promotions (PromotionName, Description, PointsRequired, CreatedBy, CreatedAt, IsDeleted)
VALUES 
('Better savings account', 'Enjoy an increased interest rate on your savings account for 3 months.', 100, 1, GETDATE(), 0),
('Express bank transfers', 'Enjoy free express bank transfers for a month.', 50, 1, GETDATE(), 0),
('Currency conversion fee', 'No commissions for currency conversion of your card transactions for 1 month.', 200, 1, GETDATE(), 0);
