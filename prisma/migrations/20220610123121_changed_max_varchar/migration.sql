-- AlterTable
ALTER TABLE `Customer` MODIFY `lastname` VARCHAR(255) NOT NULL,
    MODIFY `firstname` VARCHAR(255) NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `DelegateParent` MODIFY `lastname` VARCHAR(255) NOT NULL,
    MODIFY `firstname` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Order` MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `comment` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Pack` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Partner` MODIFY `company` VARCHAR(255) NOT NULL,
    MODIFY `contactName` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Premise` MODIFY `address` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `PriceCategory` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `code` VARCHAR(50) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `brand` VARCHAR(255) NOT NULL,
    MODIFY `description` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Reference` MODIFY `comment` VARCHAR(255) NULL,
    MODIFY `condition` VARCHAR(255) NOT NULL;
