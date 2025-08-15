import { ThemeProvider } from './components/ThemeProvider'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Error, Home, PrivacyPolicy, TermsAndConditions } from './pages'
import { Footer, Header } from './components'

export default function App() {

  function PageLayout() {
    return <>
      <Header />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />
        },
      ],
      errorElement: <Error />
    },
  ])

  return (
    <main className='bg-white font-sans'>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider >
    </main>
  )
}
