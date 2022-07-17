-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_premiseId_fkey`;

-- AlterTable
ALTER TABLE `Order` MODIFY `premiseId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
