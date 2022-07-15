/*
  Warnings:

  - You are about to drop the column `productSampleId` on the `CartItems` table. All the data in the column will be lost.
  - Added the required column `productId` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CartItems` DROP FOREIGN KEY `CartItems_productSampleId_fkey`;

-- AlterTable
ALTER TABLE `CartItems` DROP COLUMN `productSampleId`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
