/*
  Warnings:

  - You are about to drop the column `productId` on the `CartItems` table. All the data in the column will be lost.
  - You are about to drop the column `productReference` on the `DelegateParent` table. All the data in the column will be lost.
  - You are about to drop the column `referenceId` on the `Premise` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `PriceCategory` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `referenceId` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `ProductOnOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `ProductOnOrder` table. All the data in the column will be lost.
  - You are about to drop the `Reference` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productSampleId` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSampleId` to the `ProductOnOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `CartItems` DROP FOREIGN KEY `CartItems_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Premise` DROP FOREIGN KEY `Premise_referenceId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_referenceId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductOnOrder` DROP FOREIGN KEY `ProductOnOrder_productId_fkey`;

-- AlterTable
ALTER TABLE `CartItems` DROP COLUMN `productId`,
    ADD COLUMN `productSampleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DelegateParent` DROP COLUMN `productReference`;

-- AlterTable
ALTER TABLE `Premise` DROP COLUMN `referenceId`;

-- AlterTable
ALTER TABLE `PriceCategory` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `code`,
    DROP COLUMN `quantity`,
    DROP COLUMN `referenceId`;

-- AlterTable
ALTER TABLE `ProductOnOrder` DROP PRIMARY KEY,
    DROP COLUMN `productId`,
    ADD COLUMN `productSampleId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`productSampleId`, `orderId`);

-- DropTable
DROP TABLE `Reference`;

-- CreateTable
CREATE TABLE `ProductSample` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referenceNumber` VARCHAR(50) NOT NULL,
    `dateOfPurchase` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `comment` VARCHAR(255) NULL,
    `condition` VARCHAR(255) NOT NULL,
    `delegateParentId` INTEGER NULL,
    `productId` INTEGER NOT NULL,
    `premiseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_productSampleId_fkey` FOREIGN KEY (`productSampleId`) REFERENCES `ProductSample`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_productSampleId_fkey` FOREIGN KEY (`productSampleId`) REFERENCES `ProductSample`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_delegateParentId_fkey` FOREIGN KEY (`delegateParentId`) REFERENCES `DelegateParent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
