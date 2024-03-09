import React from "react";
import BusinessDashboardProductCard from "./Business-dashboard-product-card";

export default function ListedProducts(props) {
    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const [currentPage, setCurrentPage] = React.useState(1);
    const [productsPerPage] = React.useState(10);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = paginate(props.products, productsPerPage, currentPage);
    const totalPages = Math.ceil(props.products.length / productsPerPage);
    return (
        <div className="w-100">
      <div style={{
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "500px",
        minHeight: "500px"
}}
    className="border-bottom"
>
  {currentProducts.map((product, index) => (
    <BusinessDashboardProductCard product={product} key={index} />
  ))}
</div>
      
          <div className="d-flex justify-content-center mt-5">
            <ul className="pagination">
              <li className="page-item mx-2">
                <a
                  className="page-link"
                  href="#"
                  onClick={() =>{
                    if(currentPage > 1){
                    setCurrentPage(currentPage - 1)}}}
                  disabled={currentPage === 1}
                >
                  Previous
                </a>
              </li>
      
              <li className="page-item mx-1">
                <span className="page-link">
                  Page {currentPage} of {totalPages}
                </span>
              </li>
      
              <li className="page-item mx-2">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => 
                    
                {   if(currentPage < totalPages){
                    setCurrentPage(currentPage + 1)}}
                }
                  disabled={currentPage === totalPages}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
        );
}