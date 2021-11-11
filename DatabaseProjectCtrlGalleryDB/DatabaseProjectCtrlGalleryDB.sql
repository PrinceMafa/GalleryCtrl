CREATE TABLE [dbo].[images1] (
    [image]      VARBINARY (MAX)   NULL,
    [location]   [sys].[geography] NULL,
    [tags]       VARCHAR (100)     NULL,
    [date]       DATETIME          NULL,
    [capturedby] VARCHAR (50)      NULL,
    CONSTRAINT [FK_images1_users1] FOREIGN key ([capturedby]) REFERENCES users1([phone_number])
);


GO

CREATE TABLE [dbo].[users1] (
    [names]        VARCHAR (60) NOT NULL,
    [surname]      VARCHAR (50) NOT NULL,
    [username]     VARCHAR (50) NOT NULL,
    [phone_number] NCHAR (10)   NOT NULL,
    [email]        VARCHAR (30) NULL,
    [password]     VARCHAR (10) NOT NULL,
    CONSTRAINT [PK_users1] PRIMARY KEY CLUSTERED ([phone_number] ASC)
);


GO

