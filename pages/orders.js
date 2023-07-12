import Layout from "@/components/Layout";

export default function OrdersPage(){
    return(
        <Layout>
            <h1>Orders</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Recipient</th>
                        <th>Products</th>
                    </tr>
                </thead>
            </table>
        </Layout>
    );
}