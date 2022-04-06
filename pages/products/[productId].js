import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.id}
        {product.title}
      </h2>
      <p>{product.body}</p>
      <hr />
    </div>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
