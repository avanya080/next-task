// import styles from '../../../styles/PastExams.module.css'


function ProductList({ products }) {

    const fetchData = async () => {
        console.log("Refresh2");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
      
        return {
          props: {
            products: data,
          }
        };
      }
    
    const HandleClick=(e)=>{
        console.log("Refresh1");
        event.preventDefault();
    
        fetchData();
    }
    return (
      <>
      <div className="alignment">
        <h1>List of products</h1>
        <button className="button-style" onClick={HandleClick}>Refresh</button>
     </div>
        {products.map((product) => {
          return (
            <div key={product.id}>

              <h2>
                {product.id} {product.title}
              </h2>
              <hr />
            </div>
          );
        })}
      </>
    );
  }
  
  export default ProductList;
  
  export async function getStaticProps() {
    console.log("Generating/Regenerating ProductList");
    console.log("check");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
  
    return {
      props: {
        products: data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 5, // In seconds
    };
  }
  