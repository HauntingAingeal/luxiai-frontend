import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import Practice from "../pages/Practice";
import Chat from "../pages/Chat";
import Quiz from "../pages/Quiz";
import Report from "../pages/Report";
import Flashcards from "../pages/Flashcards";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
children: [
{ path: "dashboard", element: <Dashboard /> },
{ path: "practice", element: <Practice /> },
{ path: "chat", element: <Chat /> },
{ path: "quiz", element: <Quiz /> },
{ path: "report/:sessionId", element: <Report /> },
{ path: "flashcards", element: <Flashcards /> },
{ path: "settings", element: <Settings /> }
]
}
]);