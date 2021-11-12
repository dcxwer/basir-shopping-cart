 import './ProductFilter.css'


function ProductFilter ({count, size, sort, handleSizeChange, handleSortChange}) {


 

    return (
        <div className="filter">
            <div className="filter-results">{count} Products</div>
            
            <div className="filter-sort">
                Order {' '} 
                <select value={sort} onChange={handleSortChange} >
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>

            <div className="filter-size">
                Filter {' '} 
                <select value={size} onChange={handleSizeChange}>
                    <option value="all">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

        </div>
    )
 
}

export default ProductFilter