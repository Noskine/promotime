/*
  Warnings:

  - You are about to drop the `Coupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Coupons" DROP CONSTRAINT "Coupons_storeId_fkey";

-- DropTable
DROP TABLE "Coupons";

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "_code_coupons" TEXT NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);
