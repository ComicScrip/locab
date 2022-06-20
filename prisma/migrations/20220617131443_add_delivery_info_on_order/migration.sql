-- AlterTable
ALTER TABLE `Order` ADD COLUMN `deliveryArrivalTime` VARCHAR(191) NULL,
    ADD COLUMN `deliveryCity` VARCHAR(191) NULL,
    ADD COLUMN `deliveryFirstName` VARCHAR(191) NULL,
    ADD COLUMN `deliveryLastName` VARCHAR(191) NULL,
    ADD COLUMN `deliveryPhoneNumber` VARCHAR(191) NULL,
    ADD COLUMN `deliveryStreet` VARCHAR(191) NULL,
    ADD COLUMN `deliveryZip` VARCHAR(191) NULL;
