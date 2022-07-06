/*
  Warnings:

  - You are about to drop the column `delegateParentId` on the `ProductSample` table. All the data in the column will be lost.
  - Added the required column `name` to the `Premise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caution` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastDateOrder` to the `ProductSample` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ProductSample` DROP FOREIGN KEY `ProductSample_delegateParentId_fkey`;

-- AlterTable
ALTER TABLE `Premise` ADD COLUMN `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `caution` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ProductPicture` MODIFY `url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `ProductSample` DROP COLUMN `delegateParentId`,
    ADD COLUMN `lastDateOrder` DATETIME(3) NOT NULL;
