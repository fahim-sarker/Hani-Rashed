import Blog from "@/pages/Blog";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Idea from "@/pages/dashboard/Idea";
import Registration from "@/pages/Registration";
import ResetPassword from "@/pages/ResetPassword";
import Verify from "@/pages/Verify";
import Prices from "@/pages/Prices";
import PasswordReset from "@/pages/PasswordReset";
import ErrorPage from "@/pages/ErrorPage";
import BlogDetails from "@/pages/BlogDetails";
import AuthLayout from "@/layout/AuthLayout";
import Timeline from "@/pages/dashboard/Timeline";
import Profile from "@/pages/dashboard/Profile";
import VerifyOtp from "@/pages/VerifyOtp";
import ContactUs from "@/pages/ContactUs";
import DashboardLayout from "@/layout/DashboardLayout";
import Statics from "@/pages/dashboard/Statics";
import Messages from "@/pages/dashboard/Messages";
import Follower from "@/pages/dashboard/Follower";
import { createBrowserRouter } from "react-router-dom";
import CreateNewPassword from "@/pages/CreateNewPassword";
import Notifications from "@/pages/dashboard/Notifications";
import PrivateRoute from "@/components/Private/PrivateRoute";
import Following from "@/pages/dashboard/Following";
import EditProfile from "@/components/dashboard/profile/EditProfile";
import PasswordSetSuccessfully from "@/pages/PasswordSetSuccessfully";
import OtherCompany from "@/components/dashboard/profile/OtherCompany";
import WatchList from "@/pages/dashboard/DashboardForConsultancy/WatchList";
import ConsultancyIdea from "@/pages/dashboard/DashboardForConsultancy/ConsultancyIdea";
import ConsultancyProfile from "@/pages/dashboard/DashboardForConsultancy/ConsultancyProfile";
import ConsultancyTimeline from "@/pages/dashboard/DashboardForConsultancy/ConsultancyTimeline";
import ProfileInformation from "@/components/dashboard/consultancyDashboard/ProfileInformation";
import ConsultancyIdeaDetails from "@/pages/dashboard/DashboardForConsultancy/ConsultancyIdeaDetails";
import EditConsultancyProfile from "@/components/dashboard/consultancyDashboard/EditConsultancyProfile";

const Router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
    ],
  },

  // Auth Layout
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/registration",
        element: <Registration />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/createNewPassword",
        element: <CreateNewPassword />,
      },
      {
        path: "/auth/verify",
        element: <Verify />,
      },
      {
        path: "/auth/verifyOtp",
        element: <VerifyOtp />,
      },
      {
        path: "/auth/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/auth/passwordReset",
        element: <PasswordReset />,
      },
      {
        path: "/auth/passwordSetSuccessfully",
        element: <PasswordSetSuccessfully />,
      },
    ],
  },

  //  #################### Dashboard Layout ####################
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          // Small Business Dashboard (Type A)
          {
            path: "/dashboard/smallBusiness/timeline",
            element: <Timeline />,
          },
          {
            path: "/dashboard/smallBusiness/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/smallBusiness/idea",
            element: <Idea />,
          },
          {
            path: "/dashboard/smallBusiness/following",
            element: <Following />,
          },
          {
            path: "/dashboard/smallBusiness/follower",
            element: <Follower />,
          },
          {
            path: "/dashboard/smallBusiness/notifications",
            element: <Notifications />,
          },
          {
            path: "/dashboard/smallBusiness/messages",
            element: <Messages />,
          },
          {
            path: "/dashboard/smallBusiness/statics",
            element: <Statics />,
          },
          {
            path: "/dashboard/smallBusiness/editProfile",
            element: <EditProfile />,
          },
          {
            path: "/dashboard/smallBusiness/otherCompany",
            element: <OtherCompany />,
          },

          // Consultancy Firms Dashboard (Type B)
          {
            path: "/dashboard/consultancyFirms/timeline",
            element: <ConsultancyTimeline />,
          },
          {
            path: "/dashboard/consultancyFirms/profile",
            element: <ConsultancyProfile />,
          },
          {
            path: "/dashboard/consultancyFirms/idea",
            element: <ConsultancyIdea />,
          },
          {
            path: "/dashboard/consultancyFirms/ideaDetails/:id",
            element: <ConsultancyIdeaDetails />,
          },
          {
            path: "/dashboard/consultancyFirms/watchList",
            element: <WatchList />,
          },
          {
            path: "/dashboard/consultancyFirms/profileInformation",
            element: <ProfileInformation />,
          },
          {
            path: "/dashboard/consultancyFirms/editProfile",
            element: <EditConsultancyProfile />,
          },
        ],
      },
    ],
  },
]);

export default Router;
