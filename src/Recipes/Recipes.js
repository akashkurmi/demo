import React, { PureComponent } from 'react';
import './Recipes.css';
import './bootstrap.min.css'

class Recipes extends PureComponent {
    

    render() {
        return (
            <div className="Page">
                {/* <h1>All Recipes</h1> */}

                {/* <!-- Hero section --> */}
	<section className="page-top-section set-bg" data-setbg="img/page-top-bg.jpg">
		<div className="container">
			<h2>Recipe</h2>
		</div>
	</section>
	{/* <!-- Hero section end --> */}


	{/* <!-- Search section --> */}
	<div className="search-form-section">
		<div className="sf-warp">
			<div className="container">
				<form className="big-search-form">
					<select>
						<option>All Recipes Categories</option>
						<option>Pizza</option>
						<option>Salads</option>
						<option>Desserts</option>
						<option>Side Dishes</option>
					</select>
					<select>
						<option>All Ingredients</option>
						<option>Breakfast</option>
						<option>Lunch</option>
						<option>Dinner</option>
					</select>
					<input type="text" placeholder="Search Receipies"></input>
					<button className="bsf-btn">Search</button>
				</form>
			</div>
		</div>
	</div>
	{/* <!-- Search section end --> */}


	{/* <!-- Recipes section --> */}
	<section className="recipes-page spad">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="section-title">
						<h2>Latest recipes</h2>
					</div>
				</div>
				<div className="col-md-4">
					<div className="recipe-view">
						<i className="fa fa-bars"></i>
						<i className="fa fa-th active"></i>
					</div>
				</div>
			</div>
			<div class="row">
			<div class="col-lg-4 col-md-6">
					<div class="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div class="recipe-info-warp">
							<div class="recipe-info">
								<h3>Traditional Pizza</h3>
								<div class="rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div class="recipe-info-warp">
							<div class="recipe-info">
								<h3>Traditional Pizza</h3>
								<div class="rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div class="recipe-info-warp">
							<div class="recipe-info">
								<h3>Traditional Pizza</h3>
								<div class="rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div class="recipe-info-warp">
							<div class="recipe-info">
								<h3>Traditional Pizza</h3>
								<div class="rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div class="recipe-info-warp">
							<div class="recipe-info">
								<h3>Traditional Pizza</h3>
								<div class="rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Recipes section end --> */}



	{/* <!-- Gallery section --> */}
	<div className="gallery">
		<div className="gallery-slider owl-carousel">
			<div className="gs-item set-bg" data-setbg="img/instagram/1.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/2.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/3.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/4.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/5.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/6.jpg"></div>
		</div>
	</div>
	{/* <!-- Gallery section end --> */}


            </div>
        )
    }
}
export default Recipes;