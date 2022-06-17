-- DropForeignKey
ALTER TABLE `CartItems` DROP FOREIGN KEY `CartItems_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `CartItems` DROP FOREIGN KEY `CartItems_productSampleId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_premiseId_fkey`;

-- DropForeignKey
ALTER TABLE `Pack` DROP FOREIGN KEY `Pack_priceCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_priceCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductOnOrder` DROP FOREIGN KEY `ProductOnOrder_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductOnOrder` DROP FOREIGN KEY `ProductOnOrder_productSampleId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductPicture` DROP FOREIGN KEY `ProductPicture_productId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductSample` DROP FOREIGN KEY `ProductSample_premiseId_fkey`;

-- DropForeignKey
ALTER TABLE `ProductSample` DROP FOREIGN KEY `ProductSample_productId_fkey`;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_productSampleId_fkey` FOREIGN KEY (`productSampleId`) REFERENCES `ProductSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_productSampleId_fkey` FOREIGN KEY (`productSampleId`) REFERENCES `ProductSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductPicture` ADD CONSTRAINT `ProductPicture_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
