import MobileLayout from "@/components/storefront/MobileLayout";

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MobileLayout>
            {children}
        </MobileLayout>
    );
}
