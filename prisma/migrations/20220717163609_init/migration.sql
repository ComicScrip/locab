-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `hashedPassword` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'customer',
    `resetPasswordToken` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_resetPasswordToken_key`(`resetPasswordToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PriceCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `oneDay` DOUBLE NOT NULL,
    `twoDays` DOUBLE NOT NULL,
    `threeDays` DOUBLE NOT NULL,
    `fourDays` DOUBLE NOT NULL,
    `fiveDays` DOUBLE NOT NULL,
    `sixDays` DOUBLE NOT NULL,
    `sevenDays` DOUBLE NOT NULL,
    `eightDays` DOUBLE NOT NULL,
    `nineDays` DOUBLE NOT NULL,
    `tenDays` DOUBLE NOT NULL,
    `elevenDays` DOUBLE NOT NULL,
    `twelveDays` DOUBLE NOT NULL,
    `thirteenDays` DOUBLE NOT NULL,
    `fourteenDays` DOUBLE NOT NULL,
    `fifteenDays` DOUBLE NOT NULL,
    `sixteenDays` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `discountPercentage` VARCHAR(50) NULL,
    `productNumber` VARCHAR(50) NOT NULL,
    `priceCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CartItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNumber` VARCHAR(50) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paymentType` VARCHAR(50) NOT NULL,
    `paidPrice` DOUBLE NOT NULL,
    `comment` VARCHAR(255) NULL,
    `delegateParentId` INTEGER NULL,
    `partnerId` INTEGER NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `customerId` INTEGER NULL,
    `city` VARCHAR(191) NOT NULL,
    `billingEmail` VARCHAR(191) NOT NULL,
    `billingFirstname` VARCHAR(191) NOT NULL,
    `billingLastname` VARCHAR(191) NOT NULL,
    `billingPhoneNumber` VARCHAR(191) NOT NULL,
    `billingStreet` VARCHAR(191) NOT NULL,
    `billingCity` VARCHAR(191) NOT NULL,
    `billingZip` VARCHAR(191) NOT NULL,
    `deliveryPhoneNumber` VARCHAR(191) NULL,
    `deliveryFirstName` VARCHAR(191) NULL,
    `deliveryLastName` VARCHAR(191) NULL,
    `deliveryStreet` VARCHAR(191) NULL,
    `deliveryZip` VARCHAR(191) NULL,
    `deliveryCity` VARCHAR(191) NULL,
    `deliveryArrivalTime` VARCHAR(191) NULL,

    UNIQUE INDEX `Order_orderNumber_key`(`orderNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `productName` VARCHAR(191) NOT NULL,
    `unitPrice` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductSample` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referenceNumber` VARCHAR(50) NOT NULL,
    `dateOfPurchase` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `comment` VARCHAR(255) NULL,
    `condition` VARCHAR(255) NOT NULL,
    `unavailabilityStart` DATETIME(3) NULL,
    `unavailabilityEnd` DATETIME(3) NULL,
    `productId` INTEGER NOT NULL,
    `premiseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `caution` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `priceCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductPicture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Premise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `premiseType` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DelegateParent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(255) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `contactName` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_OrderItemToProductSample` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_OrderItemToProductSample_AB_unique`(`A`, `B`),
    INDEX `_OrderItemToProductSample_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItems` ADD CONSTRAINT `CartItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_delegateParentId_fkey` FOREIGN KEY (`delegateParentId`) REFERENCES `DelegateParent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_partnerId_fkey` FOREIGN KEY (`partnerId`) REFERENCES `Partner`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSample` ADD CONSTRAINT `ProductSample_premiseId_fkey` FOREIGN KEY (`premiseId`) REFERENCES `Premise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_priceCategoryId_fkey` FOREIGN KEY (`priceCategoryId`) REFERENCES `PriceCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductPicture` ADD CONSTRAINT `ProductPicture_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OrderItemToProductSample` ADD CONSTRAINT `_OrderItemToProductSample_A_fkey` FOREIGN KEY (`A`) REFERENCES `OrderItem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OrderItemToProductSample` ADD CONSTRAINT `_OrderItemToProductSample_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProductSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
