import {ProductAction} from "../../constants/google";

export class GoogleEcommerce {
    public setTransactionId(transactionId: string) {}
    public setTransactionAffiliation(transactionAffiliation: string) {}
    public setTransactionRevenue(transactionRevenue: number) {}
    public setTransactionShipping(transactionShipping: number) {}
    public setTransactionTax(transactionTax: number) {}
    public setItemName(itemName: string) {}
    public setItemPrice(itemPrice: number) {}
    public setItemQuantity(itemQuantity: number) {}
    public setItemCode(itemCode: string) {}
    public setItemCategory(itemCategory: string) {}

    public setProductSKU(productIndex: number, value: string) {}
    public setProductName(productIndex: number, value: string) {}
    public setProductBrand(productIndex: number, value: string) {}
    public setProductCategory(productIndex: number, value: string) {}
    public setProductVariant(productIndex: number, value: string) {}
    public setProductPrice(productIndex: number, value: number) {}
    public setProductQuantity(productIndex: number, value: number) {}
    public setProductCouponCode(productIndex: number, value: string) {}
    public setProductPosition(productIndex: number, value: number) {}
    public setProductCustomDimension(
        productIndex: number,
        dimensionIndex: number,
        value: string
    ) {}
    public setProductCustomMetric(
        productIndex: number,
        metricIndex: number,
        value: number
    ) {}

    public setProductAction(
        productAction: ProductAction,
        transactionId?: string,
        affiliation?: string,
        revenue?: number,
        tax?: number,
        shipping?: number,
        couponCode?: string,
        productActionList?: string,
        checkoutStep?: number,
        checkoutStepOption?: string
    ) {}

    public setProductImpressionListName(listIndex: number, value: string) {}
    public setProductImpressionSKU(
        listIndex: number,
        productIndex: number,
        sku: string
    ) {}
    public setProductImpressionName(
        listIndex: number,
        productIndex: number,
        name: string
    ) {}
    public setProductImpressionBrand(
        listIndex: number,
        productIndex: number,
        brand: string
    ) {}
    public setProductImpressionCategory(
        listIndex: number,
        productIndex: number,
        category: string
    ) {}
    public setProductImpressionVariant(
        listIndex: number,
        productIndex: number,
        variant: string
    ) {}
    public setProductImpressionPosition(
        listIndex: number,
        productIndex: number,
        position: number
    ) {}
    public setProductImpressionPrice(
        listIndex: number,
        productIndex: number,
        price: number
    ) {}
    public setProductImpressionCustomDimension(
        listIndex: number,
        productIndex: number,
        customDimensionIndex: number,
        value: string
    ) {}
    public setProductImpressionCustomMetric(
        listIndex: number,
        productIndex: number,
        customMetricIndex: number,
        value: number
    ) {}
    public setPromotionId(promoIndex: number, promotionId: string) {}
    public setPromotionName(promoIndex: number, promotionName: string) {}
    public setPromotionCreative(
        promoIndex: number,
        promotionCreative: string
    ) {}
    public setPromotionPosition(
        promoIndex: number,
        promotionPosition: string
    ) {}
    public setPromotionAction(promotionAction: string) {}
    public setCurrencyCode(currencyCode: string) {}
}
