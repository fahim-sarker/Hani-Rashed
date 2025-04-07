import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RoleProvider } from "./pages/Context/RoleContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <RoleProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </RoleProvider>
    </div>
  );
};

export default App;
