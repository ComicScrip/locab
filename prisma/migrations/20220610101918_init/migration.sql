-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `hashedPassword` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'visitor',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(20) NOT NULL,
    `firstname` VARCHAR(20) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `hashedPassword` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PriceCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `price` VARCHAR(50) NOT NULL,
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
    `productId` INTEGER NOT NULL,
    `packId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `discountPercentage` VARCHAR(50) NULL,
    `productNumber` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNumber` VARCHAR(50) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paymentType` VARCHAR(50) NOT NULL,
    `price` DOUBLE NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `comment` VARCHAR(250) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductOnOrder` (
    `productId` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`productId`, `orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `brand` VARCHAR(50) NOT NULL,
    `quantity` VARCHAR(50) NOT NULL,
    `description` VARCHAR(250) NOT NULL,
    `referenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductPicture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(50) NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referenceNumber` VARCHAR(50) NOT NULL,
    `dateOfPurchase` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `comment` VARCHAR(250) NULL,
    `condition` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Premise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(100) NOT NULL,
    `zip` VARCHAR(10) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `premiseType` VARCHAR(10) NOT NULL,
    `orderId` INTEGER NOT NULL,
    `referenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DelegateParent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(20) NOT NULL,
    `firstname` VARCHAR(20) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `productReference` VARCHAR(50) NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(100) NOT NULL,
    `city` VARCHAR(60) NOT NULL,
    `contactName` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PriceCategory` ADD CONSTRAINT `PriceCategory_packId_fkey` FOREIGN KEY (`packId`) REFERENCES `Pack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PriceCategory` ADD CONSTRAINT `PriceCategory_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_referenceId_fkey` FOREIGN KEY (`referenceId`) REFERENCES `Reference`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductPicture` ADD CONSTRAINT `ProductPicture_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Premise` ADD CONSTRAINT `Premise_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Premise` ADD CONSTRAINT `Premise_referenceId_fkey` FOREIGN KEY (`referenceId`) REFERENCES `Reference`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DelegateParent` ADD CONSTRAINT `DelegateParent_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Partner` ADD CONSTRAINT `Partner_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
