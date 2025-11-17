export function formatToINR(
    amount: number | string,
    options?: { minimumFractionDigits?: number; maximumFractionDigits?: number }
): string {
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
        return ""
    }

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: options?.minimumFractionDigits ?? 2,
        maximumFractionDigits: options?.maximumFractionDigits ?? 2,
    }).format(numericAmount);
}
