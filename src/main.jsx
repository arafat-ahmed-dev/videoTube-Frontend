import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import LikedVideos from "./pages/User/LikedVideos";
import History from "./pages/User/History";
import MyContent from "./pages/User/MyContent";
import Collection from "./pages/User/Collection";
import Subscribers from "./pages/User/Subscribers";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import ChannelProfile from "./pages/Channel/ChannelProfile";
import Tweets from "./pages/Channel/Tweets";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Protected from "./components/AuthLayout";
import { Provider } from "react-redux";
import store from "./store/Store";
import { createRoot } from "react-dom/client";
import "./index.css";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login";
import Playlist from "./pages/Channel/Playlist";
import { Videos } from "./pages/Channel/Videos";
import Follow from "./pages/Channel/Follow";
import PlaylistCard from "./components/playlist/PlaylistCard";
import Profile from "./pages/User/Profile";

// Define your routing setup
const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <App />, // Main layout component
    children: [
      { path: "/", element: <Home />, index: true }, // Public Home Page
      { path: "/watch/:videoId", element: <Watch /> }, // Public Video Watch Page
      { path: "/playlists/:playlistId", element: <PlaylistCard /> }, // New route for playlists
      {
        path: "channel/:channelId",
        element: <ChannelProfile />,
        children: [
          { path: "videos", element: <Videos />, index: true },
          { path: "playlists", element: <Playlist /> }, // New route for playlists
          { path: "tweets", element: <Tweets /> },
          { path: "following", element: <Follow /> },
        ],
      }, // Public Channel Profile
    ],
  },

  // Protected Routes (Requires Authentication)
  {
    path: "/",
    element: <App />, // Main layout for restricted routes
    children: [
      {
        path: "/liked-videos",
        element: (
          <Protected authentication={true}>
            <LikedVideos />
          </Protected>
        ),
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/my-content",
        element: (
          <Protected authentication={true}>
            <MyContent />
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected authentication={true}>
            <Profile />
          </Protected>
        ),
      },
      {
        path: "/subscribers",
        element: (
          <Protected authentication={true}>
            <Subscribers />
          </Protected>
        ),
      },
      {
        path: "/support",
        element: (
          <Protected authentication={true}>
            <Support />
          </Protected>
        ),
      },
      {
        path: "/settings",
        element: (
          <Protected authentication={true}>
            <Settings />
          </Protected>
        ),
      },
      {
        path: "/collection",
        element: (
          <Protected authentication={true}>
            <Collection />
          </Protected>
        ),
      },
    ],
  },

  // Auth Routes (No Authentication Required)
  {
    path: "/auth",
    element: (
      <Protected authentication={false}>
        <Auth />
      </Protected>
    ),
    children: [
      {
        path: "login",
        element: <Login />, // Login Page
      },
      {
        path: "register",
        element: <Register />, // Register Page
      },
      {
        path: "forget-password",
        element: <ForgetPassword />, // Forget Password Page
      },
      {
        path: "reset-password",
        element: <ResetPassword />, // Reset Password Page
      },
    ],
  },
]);

// Render the app with the router and Redux provider
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
