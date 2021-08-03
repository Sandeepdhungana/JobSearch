import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Freelancing from "./pages/Freelancing";
import FreelancerDetail from "./pages/DetailedFreelancer";
import CreateJob from "./pages/CreateJob";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import ClientProfile from "./pages/ClientProfile";
import JobDetail from "./pages/JobDetail";
import BrowseJobs from "./pages/BrowseJobs";
import NewSearchJob from "./pages/NewSearchJob";
import CandidateProfile from "./pages/CandidateProfile";
import EmployerProfile from "./pages/EmployerProfile";
import CreateCompany from "./pages/CreateCompany";
import BrowseResume from "./sections/BrowseResume";
import CreateResume from "./pages/CreateResume";
import HRJobDetails from "./pages/HRJobDetails";
import NewJobDetail from "./pages/NewJobDetail";
import Jobgrid from "./pages/Jobsgrid";
import Freelancingjobs from "./pages/Freelancingjobs";
import ManageEmployee from "./pages/ManageEmployee";
import BlogDetail from "./pages/BlogDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/blog" render={(props) => <Blog {...props} />} />
      <Route
        exact
        path="/createJob"
        render={(props) => <CreateJob {...props} />}
      />
      <Route
        exact
        path="/Freelancing"
        render={(props) => <Freelancing {...props} />}
      />
      <Route
        exact
        path="/FreelancerDetail"
        render={(props) => <FreelancerDetail {...props} />}
      />

      <Route exact path="/Pricing" render={(props) => <Pricing {...props} />} />
      <Route exact path="/Client" render={(props) => <Home {...props} />} />
      <Route exact path="/Payment" render={(props) => <Payment {...props} />} />
      <Route
        exact
        path="/clientProfile"
        render={(props) => <ClientProfile {...props} />}
      />
      <Route
        exact
        path="/jobdetail"
        render={(props) => <JobDetail {...props} />}
      />
      <Route
        exact
        path="/browsejob"
        render={(props) => <BrowseJobs {...props} />}
      />
      <Route
        exact
        path="/newSearchJob"
        render={(props) => <NewSearchJob {...props} />}
      />
      <Route
        exact
        path="/CreateCompany"
        render={(props) => <CreateCompany {...props} />}
      />
      <Route
        exact
        path="/BrowseResume"
        render={(props) => <BrowseResume {...props} />}
      />
      <Route
        exact
        path="/CreateResume"
        render={(props) => <CreateResume {...props} />}
      />
      <Route
        exact
        path="/HRJobDetails"
        render={(props) => <HRJobDetails {...props} />}
      />
      <Route
        exact
        path="/NewJobDetail"
        render={(props) => <NewJobDetail {...props} />}
      />
      <Route
        exact
        path="/candidateProfile"
        render={(props) => <CandidateProfile {...props} />}
      />
      <Route
        exact
        path="/employerProfile"
        render={(props) => <EmployerProfile {...props} />}
      />
      <Route
        exact
        path="/Blogdetail"
        render={(props) => <BlogDetail {...props} />}
      />

      <Route
        exact
        path="/jobsGrid"
        render={(props) => <Jobgrid {...props} />}
      />

      <Route
        exact
        path="/freelancingJobs"
        render={(props) => <Freelancingjobs {...props} />}
      />

      <Route
        exact
        path="/ManageEmployee"
        render={(props) => <ManageEmployee {...props} />}
      />
    </Switch>
  );
};
export default Routes;
