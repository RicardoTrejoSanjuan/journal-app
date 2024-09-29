import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomePage } from "../journal/pages"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login & Register */}
        <Route path="/auth/*" element={<AuthRoutes />} index />
        {/* Journal App */}
        <Route path="/*" element={<HomePage />} index />

        
    </Routes>
  )
}
