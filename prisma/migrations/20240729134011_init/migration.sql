-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Post" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Value" INTEGER NOT NULL,
    "Discount" INTEGER,
    "Coupon" TEXT,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
