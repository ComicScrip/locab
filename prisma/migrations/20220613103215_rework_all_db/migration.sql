/*
  Warnings:

  - You are about to drop the column `orderId` on the `DelegateParent` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Premise` table. All the data in the column will be lost.
  - You are about to drop the column `packId` on the `PriceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `PriceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[premiseId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[partnerId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premiseId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceCategoryId` to the `Pack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceCategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hashedPassword` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `DelegateParent` DROP FOREIGN KEY `DelegateParent_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `Partner` DROP FOREIGN KEY `Partner_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `Premise` DROP FOREIGN KEY `Premise_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `PriceCategory` DROP FOREIGN KEY `PriceCategory_packId_fkey`;

-- DropForeignKey
ALTER TABLE `PriceCategory` DROP FOREIGN KEY `PriceCategory_productId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `DelegateParent` DROP COLUMN `orderId`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `address`,
    DROP COLUMN `city`,
    DROP COLUMN `price`,
    DROP COLUMN `zip`,
    ADD COLUMN `customerId` INTEGER NOT NULL,
    ADD COLUMN `delegateParentId` INTEGER NULL,
    ADD COLUMN `paidPrice` DOUBLE NOT NULL,
    ADD COLUMN `partnerId` INTEGER NULL,
    ADD COLUMN `premiseId` INTEGER NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE `Pack` ADD COLUMN `priceCategoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Partner` DROP COLUMN `orderId`;

-- AlterTable
ALTER TABLE `Premise` DROP COLUMN `orderId`;

-- AlterTable
ALTER TABLE `PriceCategory` DROP COLUMN `packId`,
    DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `priceCategoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ProductOnOrder` ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `name`,
    ADD COLUMN `address` VARCHAR(255) NOT NULL,
    ADD COLUMN `city` VARCHAR(60) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(255) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(255) NOT NULL,
    ADD COLUMN `phone` VARCHAR(50) NOT NULL,
    ADD COLUMN `zip` VARCHAR(10) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `hashedPassword` VARCHAR(191) NOT NULL,
    MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'customer';

-- DropTable
DROP TABLE `Customer`;

-- CreateIndex
CREATE UNIQUE INDEX `Order_premiseId_key` ON `Order`(`premiseId`);

-- CreateIndex
CREATE UNIQUE INDEX `Order_partnerId_key` ON `Order`(`partnerId`);

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_delegateParentId_fkey` FOREIGN KEY (`delegateParentId`) REFERENCES `DelegateParent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_partnerId_fkey` FOREIGN KEY (`partnerId`) REFERENCES `Partner`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
