import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import ContactUs from "@/pages/ContactUs";
import CreateNewPassword from "@/pages/CreateNewPassword";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import ResetPassword from "@/pages/ResetPassword";
import Verify from "@/pages/Verify";
import Prices from "@/pages/Prices";
import PasswordReset from "@/pages/PasswordReset";
import PasswordSetSuccessfully from "@/pages/PasswordSetSuccessfully";
import ErrorPage from "@/pages/ErrorPage";
import BlogDetails from "@/pages/BlogDetails";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import Timeline from "@/pages/dashboard/Timeline";
import Profile from "@/pages/dashboard/Profile";
import Following from "@/pages/dashboard/Following";
import Idea from "@/pages/dashboard/Idea";
import Messages from "@/pages/dashboard/Messages";
import Follower from "@/pages/dashboard/Follower";
import Statics from "@/pages/dashboard/Statics";
import Notifications from "@/pages/dashboard/Notifications";
import EditProfile from "@/components/dashboard/profile/EditProfile";
import OtherCompany from "@/components/dashboard/profile/OtherCompany";
import ConsultancyTimeline from "@/pages/dashboard/DashboardForConsultancy/ConsultancyTimeline";
import ConsultancyProfile from "@/pages/dashboard/DashboardForConsultancy/ConsultancyProfile";
import ConsultancyIdea from "@/pages/dashboard/DashboardForConsultancy/ConsultancyIdea";
import WatchList from "@/pages/dashboard/DashboardForConsultancy/WatchList";
import ProfileInformation from "@/components/dashboard/consultancyDashboard/ProfileInformation";
import EditConsultancyProfile from "@/components/dashboard/consultancyDashboard/EditConsultancyProfile";
import ConsultancyIdeaDetails from "@/pages/dashboard/DashboardForConsultancy/ConsultancyIdeaDetails";
import VerifyOtp from "@/pages/VerifyOtp";
import PrivateRoute from "@/components/Private/PrivateRoute";

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
    ]
  },

  //  #################### Dashboard Layout ####################
  {
    element: <PrivateRoute />, // Wrap the dashboard routes with PrivateRoute
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [

          // Small Business Dashboard (Type A)
          {
            path: '/dashboard/smallBusiness/timeline',
            element: <Timeline />,
          },
          {
            path: '/dashboard/smallBusiness/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard/smallBusiness/idea',
            element: <Idea />,
          },
          {
            path: '/dashboard/smallBusiness/following',
            element: <Following />,
          },
          {
            path: '/dashboard/smallBusiness/follower',
            element: <Follower />,
          },
          {
            path: '/dashboard/smallBusiness/notifications',
            element: <Notifications />,
          },
          {
            path: '/dashboard/smallBusiness/messages',
            element: <Messages />,
          },
          {
            path: '/dashboard/smallBusiness/statics',
            element: <Statics />,
          },
          {
            path: '/dashboard/smallBusiness/editProfile',
            element: <EditProfile />,
          },
          {
            path: '/dashboard/smallBusiness/otherCompany',
            element: <OtherCompany />,
          },

          // Consultancy Firms Dashboard (Type B)
          {
            path: '/dashboard/consultancyFirms/timeline',
            element: <ConsultancyTimeline />,
          },
          {
            path: '/dashboard/consultancyFirms/profile',
            element: <ConsultancyProfile />,
          },
          {
            path: '/dashboard/consultancyFirms/idea',
            element: <ConsultancyIdea />,
          },
          {
            path: '/dashboard/consultancyFirms/ideaDetails/:id',
            element: <ConsultancyIdeaDetails />,
          },
          {
            path: '/dashboard/consultancyFirms/watchList',
            element: <WatchList />,
          },
          {
            path: '/dashboard/consultancyFirms/profileInformation',
            element: <ProfileInformation />,
          },
          {
            path: '/dashboard/consultancyFirms/editProfile',
            element: <EditConsultancyProfile />,
          },
        ]
      }
    ]
  }
]);

export default Router;
