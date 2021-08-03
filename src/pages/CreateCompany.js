import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const CreateCompany = () => {
  return (
    <>
		<Navbar/>
      <section className="inner-header-title blank">
				<div className="container">
					<h1>Create Company</h1>
				</div>
			</section>
			<div className="clearfix"></div>

      <div className="container white-shadow">
					<div className="row">
						<div className="detail-pic js">
							<div className="box">
								<input type="file" name="upload-pic[]" id="upload-pic" className="inputfile"/>
								<label for="upload-pic"><i className="fa fa-upload" aria-hidden="true"></i><span></span></label>
							</div>
						</div>
					</div>
					
					<div className="row bottom-mrg">
						<form className="add-feild">
						
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Company Name" />
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Company Tagline" />
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<select className="form-control input-lg">
										<option>All Categories</option>
										<option>Software</option>
										<option>Hardware</option>
										<option>Machanical</option>
										<option>HR/Manager</option>
									</select>
								</div>
							</div>
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Company CEO Name" />
								</div>
							</div>
							<div className="col-md-12 col-sm-12">
								<textarea className="form-control" placeholder="Company Description"></textarea>
							</div>
						</form>
					</div>
					
					<div className="row no-padd">
						<div className="detail pannel-footer">
							<div className="col-md-12 col-sm-12">
								<div className="detail-pannel-footer-btn pull-right">
									<Link to="#" className="footer-btn choose-cover">Choose Cover Image</Link>
								</div>
							</div>
						</div>
					</div>
					
				</div>
        <div className="container">
					<div className="row bottom-mrg extra-mrg">
						<form>
							<h2 className="detail-title">Work Experience</h2>
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope"></i></span>
									<input type="text" className="form-control" placeholder="Email Address" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-phone"></i></span>
									<input type="text" className="form-control" placeholder="Phone Number" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-globe"></i></span>
									<input type="text" className="form-control" placeholder="Website Address" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-map-marker"></i></span>
									<input type="text" className="form-control" placeholder="Local E.g. It Park New" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-birthday-cake"></i></span>
									<input type="text" id="company-dob" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users"></i></span>
									<input type="text" className="form-control" placeholder="Employee E.g. 100-2500" />
								</div>	
							</div>
							
						</form>
					</div>
					
					<div className="row bottom-mrg extra-mrg">
						<form>
							<h2 className="detail-title">Social Profile</h2>
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-facebook"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-google-plus"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-twitter"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-instagram"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-linkedin"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-dribbble"></i></span>
									<input type="text" className="form-control" placeholder="Profile Link" />
								</div>	
							</div>
							
						</form>
					</div>
					
					<div className="row bottom-mrg extra-mrg">
						<form>
							<h2 className="detail-title">About Company</h2>
							<div className="col-md-12 col-sm-12">
								<textarea className="form-control textarea" placeholder="About Company"></textarea>
							</div>	
							<div className="col-md-12 col-sm-12">
								<button className="btn btn-success btn-primary small-btn">Submit your company</button>	
							</div>	
						</form>
					</div>
				</div>
				<Footer/>
    </>
  );
}

export default CreateCompany;